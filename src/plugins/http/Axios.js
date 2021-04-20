import axios from "axios";
import qs from "qs";
import store from "../../store";

// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

const Axios = axios.create({
  baseURL: "https://testroom3.academweb.tech/api/",
});

Axios.interceptors.request.use((request) => {
  const token = store.getters.GET_TOKEN;
  if (token) {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  }
  // URLs unto whom don't need to add customer_id to request data
  const exceptedEndpoints = ["/api/"];

  //TODO delete this if after test accesse delete functional
  // if(request.method === "delete") {
  //   console.log('request :>> ', request);
  //   return
  // }

  if (
    (request.method === "post" ||
      request.method === "patch" ||
      request.method === "put" ||
      request.method === "delete") &&
    !exceptedEndpoints.includes(request.url)
  ) {
    request.data = {
      ...request.data,
      customer_id: 777,
    };
  }

  if (exceptedEndpoints.includes(request.url)) {
    return request;
  }

  if (request.method === "get") {
    // if (request.params !== undefined) {
    //   console.log('333 :>> ', 333);
    // }
    request.params = {
      ...request.params,
      test: 111,
    };
  }

  request.paramsSerializer = (p) => qs.stringify(p, { encode: false });

  return request;
});

export default Axios;
