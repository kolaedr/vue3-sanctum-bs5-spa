<template>
  <nav class="navbar sticky-top navbar-light bg-white topbar px-4 mb-4 shadow">
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link rounded-circle d-md-none mr-3"
      @click.prevent="toggleSidebar"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>

    <!-- Topbar Search -->
    <div class="mr-auto d-none d-md-block">
      <select class="form-select form-select" aria-label=".form-select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <!-- Topbar Navbar -->
    <div class="dropdown no-arrow">
      <div
        class="nav-link dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span class="mr-2 d-none d-lg-inline text-gray-600 small"
          >Douglas McGee</span
        >
        <img
          class="mx-2 img-profile rounded-circle"
          src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
        />
      </div>
      <!-- Dropdown - User Information -->
      <div
        class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
        aria-labelledby="dropdownMenuButton1"
      >
        <a class="dropdown-item" href="#">
          <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
          Profile
        </a>
        <a class="dropdown-item" href="#">
          <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
          Settings
        </a>
        <a class="dropdown-item" href="#">
          <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
          Activity Log
        </a>
        <div class="dropdown-divider"></div>
        <a
          class="dropdown-item"
          href="#"
          data-toggle="modal"
          data-target="#logoutModal"
        >
          <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
          Logout
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "Navbar",
  setup() {
    const store = useStore();
    console.log("store :>> ", store);

    return {
      toggleSidebar: () => store.commit("sideBarToggle"),
    };
  },
};
</script>

<style lang="scss">
.img-profile {
  height: 2rem;
  width: 2rem;
}
</style>