<template>
  <div class="container d-flex">
    <div class="card col-12 col-md-6 mx-auto">
      <div class="card-header">Login</div>
      <div class="card-body">
        <form @submit.prevent="submit">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              v-model="fd.login"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              v-model="fd.password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="card-footer text-muted">2 days ago {{ user }}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, computed } from "vue";
import Axios from "@/plugins/http/Axios";
// import axios from "axios";
import { useStore } from "vuex";

export default {
  name: "Login",
  setup() {
    const store = useStore();
    const fd = reactive({
      login: "",
      password: "",
    });
    const submit = async () => {
      try {
        const { data } = await Axios.post("/login", fd);
        const { token, ...userData } = data.data;

        store.commit("SET_TOKEN", token);
        store.commit("SET_USER", userData);
      } catch (error) {
        console.log("error :>> ", error);
      }
    };
    return { fd, submit, user: computed(() => store.getters.GET_USER) };
  },
};
</script>
