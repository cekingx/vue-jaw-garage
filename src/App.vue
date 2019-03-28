<template>
  <div class="site-wrap">
    <app-header/>
  </div>
</template>

<script>
import Header from "./components/Header/Header";

export default {
  name: "App",
  components: {
    "app-header": Header
  }
};
</script>

<style lang="scss">
@import "./assets/scss/style";
</style>

