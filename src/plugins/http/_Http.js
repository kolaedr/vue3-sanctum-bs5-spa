import Vue from "vue";
import * as VueAxios from "vue-axios";
import qs from "qs";
import store from "@/store";
import axios from "axios";
import _ from "lodash";

Vue.use(VueAxios, axios);

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

function onAccessTokenFetched(accessToken) {
  subscribers = subscribers.filter((callback) => callback(accessToken));
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

/**
 * This interceptor will add global filters to requests which support such filters
 */
axios.interceptors.request.use((request) => {
  const globalFilters = _.cloneDeep(store.getters["globalFilters/get"]);

  // URLs unto whom don't need to add customer_id to request data
  const exceptedEndpoints = [
    "/api/login",
    "/api/refresh",
    "/api/users/current",
    "/api/roles",
    "/api/countries",
    "/api/logs",
    "/api/images",
    "/api/attachments",
    "/api/employeeAttachment",
    "/api/towns",
    "/api/customers",
    "/api/password/email",
    "/api/password/reset",
  ];

  //TODO delete this if after test accesse delete functional
  // if(request.method === "delete") {
  //   console.log('request :>> ', request);
  //   return
  // }

  if (
    globalFilters !== null &&
    (request.method === "post" ||
      request.method === "patch" ||
      request.method === "put" ||
      request.method === "delete") &&
    !exceptedEndpoints.includes(request.url)
  ) {
    request.data = {
      ...request.data,
      customer_id: globalFilters.filter.customer_id,
    };
  }

  if (exceptedEndpoints.includes(request.url)) {
    return request;
  }

  if (globalFilters !== null && request.method === "get") {
    if (request.params !== undefined) {
      request.params = Object.assign(globalFilters.filter, request.params);
    } else {
      request.params = globalFilters.filter;
    }
  }

  request.paramsSerializer = (p) => qs.stringify(p, { encode: false });

  return request;
});

/**
 * This interceptor will refresh token if it has expired and
 * then it will call all requests that failed with 401 status
 */
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { config, response } = error;
    const originalRequest = config;
    // eslint-disable-next-line new-cap
    const vm = new Vue();

    if (response && response.status === 401) {
      // logout if we don't have a token

      // Vue.prototype.$auth.logout();
      // return Promise.reject(error);

      //Questo link per la reimpostazione della password scadrà tra 60 minuti.

      if (!Vue.prototype.$auth.check()) {
        Vue.prototype.$auth.logout();
        return Promise.reject(error);
      }

      if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true;

        Vue.prototype.$auth
          .refreshToken()
          .then((responseToken) => {
            isAlreadyFetchingAccessToken = false;
            onAccessTokenFetched(responseToken.data.data.access_token);
          })
          .catch(() => {
            isAlreadyFetchingAccessToken = false;
            subscribers = [];

            Vue.prototype.$auth.logoutWithErrorMessage();
          });
      }

      return new Promise((resolve) => {
        addSubscriber((accessToken) => {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          resolve(axios(originalRequest));
        });
      });
    }

    if (error.response.status === 422 && response.config.url !== "/api/login") {
      Object.values(error.response.data.errors).forEach((fieldErrors) => {
        fieldErrors.forEach((message) => {
          if (message.length > 40) {
            const str = [];
            str.push(message.slice(0, 20));
            str.push(message.slice(20, message.length));

            console.log(str.join("\n"));
            // vm.$bvToast.toast(str.join("\n"), {
            //   title: "Validation Fail!",
            //   autoHideDelay: 5000,
            //   variant: "danger",
            //   appendToast: false,
            // });
          } else {
            // vm.$bvToast.toast(message, {
            //   title: "Validation Fail!",
            //   autoHideDelay: 5000,
            //   variant: "danger",
            //   appendToast: false,
            // });
          }
        });
      });
    }

    if (
      ![422, 401, 404].includes(error.response.status) &&
      error.response.data.message
    ) {
      const str = [];
      str.push(error.response.data.message.slice(0, 40));
      str.push(
        error.response.data.message.slice(
          40,
          error.response.data.message.length
        )
      );

      vm.$bvToast.toast(str.join("\n"), {
        title: "Sorry.",
        autoHideDelay: 10000,
        variant: "danger",
        appendToast: false,
      });
    }

    return Promise.reject(error);
  }
);
