<template>
  <nav class="navbar sticky-top navbar-light bg-white topbar px-4 mb-4 shadow">
    <!-- Sidebar Toggle (Topbar) -->
    <ToggleSidebar class="me-3" />
    <!-- Topbar Search -->
    <SelectCurrentSite class="d-none d-md-block col-3" />
    <SiteBrand color="dark" class="d-block d-md-none col-3" />
    <!-- Topbar Navbar -->
    <UserProfile />
  </nav>
</template>

<script>
import ToggleSidebar from "./components/ToggleSidebar";
import SelectCurrentSite from "./components/SelectCurrentSite";
import UserProfile from "./components/UserProfile";
import SiteBrand from "./components/SiteBrand";
export default {
  name: "Navbar",
  components: { SelectCurrentSite, ToggleSidebar, UserProfile, SiteBrand },
};
</script>
