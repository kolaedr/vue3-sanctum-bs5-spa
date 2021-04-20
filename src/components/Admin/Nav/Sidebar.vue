<template>
  <aside class="" :class="{ 'aside-visible col-12': isOpen }">
    <ul
      class="list-unstyled bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <a class="nav-link" href="index.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a
        >
      </li>
      <SideBarItem
        v-for="navItem in navData"
        :key="navItem.url"
        :nav="navItem"
      />
      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      <!-- Sidebar Message -->
    </ul>
    <!-- End of Sidebar -->
  </aside>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import SideBarItem from "./components/SideBarItem";
export default {
  name: "Sidebar",
  components: { SideBarItem },
  setup() {
    const store = useStore();
    const navData = ref([
      {
        title: "sfgsgs",
        url: "sdfsfd",
        children: [],
      },
      {
        title: "etertert",
        url: "sgsg",
        children: [
          {
            title: "wrtrtwt",
            url: "rktt",
          },
          {
            title: "wrtrtwt",
            url: "rktt",
          },
        ],
      },
      {
        title: "ertertet",
        url: "fhfhfgh",
        children: [],
      },
    ]);

    return {
      navData,
      isOpen: computed(() => store.state.helper.sidebarIsOpen),
    };
  },
};
</script>

<style lang="scss">
aside {
  width: 0;
  min-height: 100vh;

  &.aside-visible {
    width: 14rem;

    @media screen and (max-width: 786px) {
      position: absolute;
      z-index: 9999;
      top: 5rem;
      bottom: 0;
      width: 100%;
    }
  }
}
.sidebar {
  height: 100%;

  &-nav {
    display: flex;
    flex-direction: column;
    padding: auto;
    // padding-left: 0;
    // margin-bottom: 0;
    list-style: none;
  }
  &-heading {
    text-align: left;
    padding: 0 1rem;
    font-weight: 800;
    font-size: 0.65rem;
    text-transform: uppercase !important;
    color: rgba(255, 255, 255, 0.4);
  }
  .nav-item,
  .nav-link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.5rem 1rem;
    & > span {
      font-size: 0.85rem;
      display: inline;
    }
  }
}

.sidebar-dark .nav-item .nav-link {
  color: rgba(255, 255, 255, 0.8);
}
</style>
