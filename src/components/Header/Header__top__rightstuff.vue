<template>
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderRightStuff",
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

<style>
</style>
