<template>
  <button
    id="sidebarToggleTop"
    class="btn btn-link"
    :class="`btn-outline-${color}`"
    @click.prevent="toggleSidebar"
  >
    <font-awesome-icon :icon="['fas', 'bars']" :class="`text-${color}`" />
  </button>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: {
    color: {
      type: String,
      default: "secondary",
      validator: function (value) {
        // The value must match one of these strings
        return (
          [
            "light",
            "success",
            "warning",
            "danger",
            "secondary",
            "primary",
          ].indexOf(value) !== -1
        );
      },
    },
  },
  setup(props) {
    const store = useStore();
    console.log("props :>> ", props);
    return {
      toggleSidebar: () => store.commit("sideBarToggle"),
    };
  },
};
</script>
