<template>
  <li class="nav-item">
    <a
      class="nav-link collapsed"
      data-bs-toggle="collapse"
      href="#collapseExample"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
      ref="collapseExample"
    >
      <i class="fas fa-fw fa-cog"></i>

      <span class="d-flex justify-content-between"
        >{{ nav.title }} <font-awesome-icon :icon="['fas', 'chevron-down']"
      /></span>
    </a>
    <div
      id="collapseExample"
      class="collapse"
      data-parent="#accordionSidebar"
      v-if="!!nav.children.length"
    >
      <div class="bg-white p-3 collapse-inner rounded">
        <h6 class="collapse-header">Custom Components:</h6>
        <a
          v-for="child in nav.children"
          :key="child.url"
          class="collapse-item"
          :href="child.url"
          >{{ child.title }}</a
        >
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      default() {
        return { url: "#", children: [] };
      },
    },
  },
};
</script>

<style lang="scss">
.nav-link[aria-expanded="true"] span>svg {
  transform: rotate(-180deg);
}
.collapse {
  margin: 0 auto;

  &-item {
    display: block;
    font-size: 0.95rem;
    text-decoration: none;
    color: #41464b;
    padding: 0.25rem 0.5rem;
  }
  &-inner {
    padding: 0.5rem;
  }
  &-header {
    text-transform: uppercase;
    font-size: 0.67em;
    color: #adb5bd;
    font-weight: 600;
    text-align: left;
    padding: 0 0.5rem;
  }
}
</style>