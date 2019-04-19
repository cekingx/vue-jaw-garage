import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    cart
  }
});
