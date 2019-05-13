import Vue from "vue";
import Router from "vue-router";
import Home from "../src/components/Home/Home";
import Cart from "../src/components/Cart/Cart";
import Product from "../src/components/Product/Product";
import Checkout from "../src/components/Checkout/Checkout";
import Login from "../src/components/LoginRegister/Login";
import Register from "../src/components/LoginRegister/Register";

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
    },
    {
      path: "/product",
      name: "product",
      component: Product
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
