import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import cart from "./modules/cart";
import product from "./modules/product";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    cart,
    product,
    auth
  }
});
