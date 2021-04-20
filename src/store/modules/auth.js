import {
  SET_TOKEN,
  LOGIN_REQUEST,
  SET_USER,
  USER_REQUEST,
  LOG_OUT,
  GET_USER,
  GET_TOKEN,
  SET_CURRENT_SITE,
} from "@/constants/storeConstants";
// import axios from "axios";
// import Axios from "@/plugins/http/Axios";

const auth = {
  namespace: true,

  state: {
    token: "",
    user: {
      first_name: "Name",
      last_name: "Last",
    },
    isAdmin: true,
    currentSite: "ADMIN",
  },
  getters: {
    [GET_USER]: (store) => store.user,
    [GET_TOKEN]: (store) => store.token,
    isAdmin: (store) => store.isAdmin,
    userFullName: (store) => `${store.user.first_name} ${store.user.last_name}`,
  },
  mutations: {
    [SET_TOKEN]: (store, payload) => (store.token = payload),
    [SET_USER]: (store, payload) => (store.user = payload),
    [SET_CURRENT_SITE]: (store, payload) => (store.currentSite = payload),
    [LOG_OUT]: (store) => {
      store.token = "";
      store.user = {
        first_name: "",
        last_name: "",
      };
    },
  },
  actions: {
    [LOGIN_REQUEST]({ commit }, payload) {
      return new Promise((resolve, reject) => {
        this.Axios.post("/api/login", payload)
          .then(({ data }) => {
            commit(SET_TOKEN, data);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    [USER_REQUEST]({ commit }, payload) {
      return new Promise((resolve, reject) => {
        this.Axios.post("/api/user", payload)
          .then(({ data }) => {
            commit(SET_USER, data);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  modules: {},
};

export default auth;
