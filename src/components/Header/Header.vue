<template>
  <header class="site-navbar" role="banner">
    <header-top/>
    <header-navigation/>
  </header>
</template>

<script>
import HeaderTop from "./Header__top";
import HeaderNavigation from "./Header__navigation";

export default {
  name: "Header",
  components: {
    "header-top": HeaderTop,
    "header-navigation": HeaderNavigation
  }
};
</script>

