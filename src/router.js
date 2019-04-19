import Vue from "vue";
import Router from "vue-router";
import Home from "../src/components/Home/Home";
import Cart from "../src/components/Cart/Cart";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    }
  ]
});
