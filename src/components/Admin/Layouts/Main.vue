<template>
  <main class="col wrapper-content">
    <Navbar />
    <section>
      <div class="card mx-4 ">
        <div class="card-header text-dark bg-light text-start">
          Featured
        </div>
        <div class="card-body">
          <router-view></router-view>
        </div>
      </div>
      
    </section>
    <Footer />
  </main>
</template>

<script>
import Navbar from "@/components/Admin/Nav/Navbar";
import Footer from "./Footer";

export default {
  name: "Main",
  components: { Footer, Navbar },
};
</script>

<style>
</style>