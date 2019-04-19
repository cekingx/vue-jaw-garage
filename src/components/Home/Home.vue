<template>
  <div class="site-wrap">
    <home-jumbotron/>
    <home-support/>
    <home-sale/>
  </div>
</template>

<script>
import HomeJumbotron from "./Home__jumbotron";
import HomeSupport from "./Home__support";
import HomeFeaturedProduct from "./Home__featuredProduct";
import HomeSale from "./Home__sale";

export default {
  name: "Home",
  components: {
    "home-jumbotron": HomeJumbotron,
    "home-support": HomeSupport,
    "home-featured-product": HomeFeaturedProduct,
    "home-sale": HomeSale
  }
};
</script>

