import store from "@/store";
import router from "@/router";
import axios from "axios";

export default function auth(Vue) {
  Vue.auth = {
    autoTokenRefreshTimeoutHandler: null,

    check() {
      const accessToken = this.getToken();

      return !!accessToken;
    },

    user() {
      return store.getters["user/get"];
    },

    roles() {
      return store.getters["user/roles"];
    },

    logout() {
      store.commit("auth/destroy");
      store.commit("user/remove");

      router.push("/sign-in");
    },

    logoutWithErrorMessage() {
      // showError('Please login again to start a new session', 'Failed to refresh token');

      this.logout();
    },

    getToken() {
      return store.getters["auth/getAccessToken"];
    },

    registerTokens() {
      if (!this.check()) return;

      this.setToken(store.getters["auth/getAccessToken"]);
    },

    refreshToken() {
      const vm = this;

      return new Promise((resolve, reject) => {
        axios
          .post("/api/refresh")
          .then((response) => {
            if (Object.prototype.hasOwnProperty.call(response.data, "error")) {
              this.logoutWithErrorMessage();
            } else if (response.data.data.access_token !== undefined) {
              vm.setToken(response.data.data.access_token);

              // eslint-disable-next-line
              console.info("Token refreshed");
            }

            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    setToken(accessToken) {
      store.commit("auth/set", {
        accessToken,
      });

      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    },
  };

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get() {
        return Vue.auth;
      },
    },
  });
}
