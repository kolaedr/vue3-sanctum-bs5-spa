import { createStore } from "vuex";
import auth from "./modules/auth";
import helper from "./modules/helper";

export default createStore({
  state: {
    count: 1
  },
  mutations: {},
  actions: {},
  modules: {
    auth: auth,
    helper: helper
  },
});
