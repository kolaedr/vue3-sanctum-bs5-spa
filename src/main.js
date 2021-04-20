import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Axios from "@/plugins/http/Axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faBars);
library.add(faChevronDown);
library.add(faChevronUp);

const app = createApp(App);
app.config.productionTip = false;
app.config.devtools = true;
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.config.globalProperties.axios = Axios;
app.mount("#app");
