import Vue from "vue";
import Router from "vue-router";
import Home from "../src/components/Home/Home";
import Cart from "../src/components/Cart/Cart";
import Product from "../src/components/Product/Product";
import Checkout from "../src/components/Checkout/Checkout";
import Login from "../src/components/LoginRegister/Login";
import Register from "../src/components/LoginRegister/Register";
import ThankYou from "../src/components/ThankYou/ThankYou";
import VerifyEmail from "../src/components/VerifyEmail/VerifyEmail";
import Transaction from "./components/Transaction/Transaction";

import store from "./store/index";

Vue.use(Router);

const router = new Router({
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
      // meta: {
      //   requiresAuth: true
      // }
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
      // meta: {
      //   requiresAuth: true
      // }
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
    },
    {
      path: "/thankyou",
      name: "thankyou",
      component: ThankYou
    },
    {
      path: "/verifyemail",
      name: "verifyemail",
      component: VerifyEmail
    },
    {
      path: "/transaction",
      name: "transaction",
      component: Transaction
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.getIsEmailVerified == false) {
      next("/verifyemail"); // UBAH NE
      return;
    } else if (localStorage.getItem("token") != null) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
