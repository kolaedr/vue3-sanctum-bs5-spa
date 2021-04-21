<template>
  <div class="dropdown no-arrow ms-auto">
    <div
      class="nav-link dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{
        name
      }}</span>
      <img
        class="mx-2 img-profile rounded-circle"
        src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
      />
    </div>
    <!-- Dropdown - User Information -->
    <div
      class="dropdown-menu dropdown-menu-end shadow animated--grow-in"
      aria-labelledby="dropdownMenuButton1"
    >
      <a class="dropdown-item" href="#">
        <font-awesome-icon
          :icon="['fas', 'user']"
          class="fa-sm fa-fw mr-2 text-gray-400"
        />
        Profile
      </a>
      <a class="dropdown-item" href="#">
        <font-awesome-icon
          :icon="['fas', 'cogs']"
          class="fa-sm fa-fw mr-2 text-gray-400"
        />
        Settings
      </a>
      <a class="dropdown-item" href="#">
        <font-awesome-icon
          :icon="['fas', 'list']"
          class="fa-sm fa-fw mr-2 text-gray-400"
        />
        Activity Log
      </a>
      <div class="dropdown-divider"></div>
      <a
        class="dropdown-item"
        href="#"
        @click.prevent="logout()"
        data-toggle="modal"
        data-target="#logoutModal"
      >
        <font-awesome-icon
          :icon="['fas', 'sign-out-alt']"
          class="fa-sm fa-fw mr-2 text-gray-400"
        />
        Logout
      </a>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const logout = async () => {
      await new Promise((resolve) => {
        store.commit("LOG_OUT");
        resolve();
      });
    };
    return {
      name: computed(() => store.getters.userFullName),
      logout,
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