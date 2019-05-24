<template>
  <div class="site-top-icons">
    <ul>
      <li class="p-2 btn mr-1" @click="logout">
        <div v-if="username.length < 8">Hi, {{ username }}</div>
        <div v-if="username.length >= 8">Hi, {{ username.substring(0, 8) + ".." }}</div>
        <!-- <div>Hi, {{ username }}</div> -->
      </li>
      <li>
        <router-link to="/cart" class="site-cart">
          <span class="icon">
            <font-awesome-icon icon="shopping-cart"/>
          </span>
          <span class="count">{{ cartLength }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/transaction" class="site-cart">
          <span class="icon">
            <font-awesome-icon icon="credit-card"/>
          </span>
          <span class="count">{{ 1 }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HeaderRightStuff",
  computed: {
    ...mapGetters({
      items: "getCartItems",
      username: "getUserName"
    }),
    cartLength() {
      return this.items.reduce((length, item) => {
        return length + item.quantity;
      }, 0);
    }
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>

<style></style>
