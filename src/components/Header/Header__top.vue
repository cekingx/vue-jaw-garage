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

        <div class="col-6 col-md-4 order-3 order-md-3 text-right">
          <div class="site-top-icons">
            <ul>
              <li>
                <a href="#">
                  <font-awesome-icon icon="user"/>
                </a>
              </li>
              <li>
                <router-link to="/cart" class="site-cart">
                  <span class="icon">
                    <font-awesome-icon icon="shopping-cart"/>
                  </span>
                  <span class="count">{{ cartLength }}</span>
                </router-link>
              </li>
              <li class="d-inline-block d-md-none ml-md-0">
                <a href="#" class="site-menu-toggle js-menu-toggle">
                  <span class="icon-menu">
                    <font-awesome-icon icon="bars"/>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./../../assets/image/logo.png";
import { mapGetters } from "vuex";

export default {
  name: "HeaderTop",
  data: () => {
    return {
      cartCount: 2,
      logo: Logo
    };
  },
  computed: {
    ...mapGetters({
      items: "getCartItems"
    }),
    cartLength() {
      return this.items.reduce((length, item) => {
        return length + item.quantity;
      }, 0);
    }
  }
};
</script>

<style scoped>
img {
  max-width: 75%;
  max-height: 75%;
}
</style>
