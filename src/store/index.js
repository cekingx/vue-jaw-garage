import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import cart from "./modules/cart";
import product from "./modules/product";
import auth from "./modules/auth";
import checkout from "./modules/checkout";
import transaction from "./modules/transaction";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todos,
    cart,
    product,
    auth,
    checkout,
    transaction
  }
});

export default store;
