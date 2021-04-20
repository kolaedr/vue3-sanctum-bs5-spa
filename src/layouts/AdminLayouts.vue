<template>
  <section class="wrapper">
    <Sidebar />
    <Main>
      <slot></slot>
    </Main>
  </section>
</template>

<script>
import Sidebar from "@/components/Admin/Nav/Sidebar";
// import Footer from "@/components/Admin/Layouts/Footer";
import Main from "@/components/Admin/Layouts/Main";

export default {
  name: "Admin.Layouts",
  components: {
    Sidebar,
    // Footer,
    Main,
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-wrap: nowrap;
  min-height: 100vh;
  &-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    section{
      flex: 1;
    }
  }
}
.bg-gradient-primary {
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  background-size: cover;
}
</style>