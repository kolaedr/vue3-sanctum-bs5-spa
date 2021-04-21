<template>
  <aside class="col-12 col-md-2" :class="[isOpen ? 'd-block' : 'd-none']">
    <ul
      class="list-unstyled bg-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <SiteBrand toggle />

      <!-- Divider -->
      <!-- <hr class="sidebar-divider my-0" /> -->
      <SelectCurrentSite class="d-block d-md-none px-2" />
      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <router-link :to="{ name: 'Dashboard' }" class="nav-link">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </router-link>
      </li>
      <SideBarItem
        v-for="navItem in navData"
        :key="navItem.url"
        :nav="navItem"
      />
      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />
    </ul>
    <!-- End of Sidebar -->
  </aside>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import SideBarItem from "./components/SideBarItem";
import SelectCurrentSite from "./components/SelectCurrentSite";
import SiteBrand from "./components/SiteBrand";

export default {
  name: "Sidebar",
  components: { SideBarItem, SelectCurrentSite, SiteBrand },
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
  width: 14rem;
  min-height: 100vh;

  // &.aside-visible {
  //   width: 14rem;

  //   @media screen and (max-width: 786px) {
  //     position: absolute;
  //     z-index: 9999;
  //     top: 5rem;
  //     bottom: 0;
  //     width: 100%;
  //   }
  // }
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
