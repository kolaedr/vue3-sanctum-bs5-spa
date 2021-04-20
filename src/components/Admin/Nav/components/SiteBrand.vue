<template>
  <div
    class="d-flex p-2 justify-content-between justify-content-md-center align-items-center"
  >
    <router-link
      :to="{ name: 'AdminDashboard' }"
      class="fs-3 text-decoration-none text-white py-2 fw-bolder d-block"
      >{{ brand }}</router-link
    >
    <ToggleSidebar class="d-md-none" color="light" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ToggleSidebar from "./ToggleSidebar";

export default {
  components: { ToggleSidebar },
  setup() {
    const store = useStore();

    return {
      brand: computed(() => store.state.auth.currentSite),
    };
  },
};
</script>
