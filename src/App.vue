<template>
  <div class="site-wrap">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

<style lang="scss">
@import "./assets/scss/style";
</style>

