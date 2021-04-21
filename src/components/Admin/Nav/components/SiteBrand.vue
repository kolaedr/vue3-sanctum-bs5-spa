<template>
  <div
    class="d-flex p-2 justify-content-between justify-content-md-center align-items-center"
  >
    <router-link
      :to="{ name: 'AdminDashboard' }"
      class="fs-3 text-decoration-none py-2 fw-bolder d-block"
      :class="`text-${color}`"
      >{{ brand }}</router-link
    >
    <ToggleSidebar v-if="toggle" class="d-md-none" color="light" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ToggleSidebar from "./ToggleSidebar";

export default {
  props: {
    toggle: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "white",
      validator: function (value) {
        return (
          [
            "white",
            "light",
            "success",
            "warning",
            "danger",
            "secondary",
            "primary",
          ].indexOf(value) !== -1
        );
      },
    }
  },
  components: { ToggleSidebar },
  setup() {
    const store = useStore();

    return {
      brand: computed(() => store.state.auth.currentSite),
    };
  },
};
</script>
