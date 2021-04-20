<template>
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
          <label for="exampleInputPassword1" class="form-label">Password</label>
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
    <div class="card-footer text-muted">2 days ago</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive } from "vue";
// import Axios from '@/plugins/http/Axios';
import axios from 'axios';
import { useStore } from 'vuex'

export default {
  name: "Login",
  setup() {
    const store = useStore()
    console.log('Login store :>> ', store);
    const fd = reactive({
      login: "",
      password: "",
    });
    const submit = async () => {
      const {data} = await axios.post("https://testroom3.academweb.tech/api/login", fd);
      console.log('data :>> ', data);
    };
    return { fd, submit };
  },
};
</script>
