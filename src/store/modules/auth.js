import {
  SET_TOKEN,
  LOGIN_REQUEST,
  SET_USER,
  USER_REQUEST,
  LOG_OUT,
  GET_USER,
  GET_TOKEN,
} from "@/constants/storeConstants";
// import axios from "axios";
// import Axios from "@/plugins/http/Axios";

const auth = {
  namespace: true,

  state: {
    token: "",
    user: {
      name: "",
    },
    isAdmin: true,
  },
  getters: {
    [GET_USER]: (store) => store.user,
    [GET_TOKEN]: (store) => store.token,
    isAdmin: (store) => store.isAdmin,
  },
  mutations: {
    [SET_TOKEN]: (store, payload) => (store.token = payload),
    [SET_USER]: (store, payload) => (store.user = payload),
    [LOG_OUT]: (store) => {
      store.token = "";
      store.user = {};
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
