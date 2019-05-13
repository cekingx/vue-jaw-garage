<template>
  <div class="site-navbar-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
          <form action class="site-block-top-search">
            <span class="icon">
              <font-awesome-icon icon="search"/>
            </span>
            <input type="text" class="form-control border-0" placeholder="Search">
          </form>
        </div>

        <div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
          <div class="site-logo">
            <img :src="logo" alt="Jaw Garage">
          </div>
        </div>

        <div class="col-6 col-md-4 order-3 order-md-3 text-right" v-if="auth == true">
          <right-stuff></right-stuff>
        </div>
        <div class="col-6 col-md-4 order-3 order-md-3 text-right" v-else>login</div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./../../assets/image/logo.png";
import RightStuff from "./Header__top__rightstuff";
import { mapGetters } from "vuex";

export default {
  name: "HeaderTop",
  data: () => {
    return {
      logo: Logo
    };
  },
  computed: {
    ...mapGetters({
      auth: "getUserAuthStatus"
    })
  },
  components: {
    "right-stuff": RightStuff
  }
};
</script>

<style scoped>
img {
  max-width: 75%;
  max-height: 75%;
}
</style>
