<template>
  <div class="mr-auto">
    <select
      v-model="currentSite"
      class="form-select form-select"
      aria-label=".form-select example"
    >
      <option selected disabled value="Select site">Select site</option>
      <option value="SiteOne">SiteOne</option>
      <option value="SiteTwo">SiteTwo</option>
    </select>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "SelectCurrentSite",
  setup() {
    const store = useStore();

    const currentSite = computed({
      get: () => store.state.auth.currentSite,
      set: (val) => store.commit("SET_CURRENT_SITE", val),
    });
    return {
      currentSite,
    };
  },
};
</script>

<style>
</style>