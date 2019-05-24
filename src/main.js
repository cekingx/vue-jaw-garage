import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueAxios from "vue-axios";
import axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faSearch,
  faShoppingCart,
  faBars,
  faMapMarkedAlt,
  faTruck,
  faUndo,
  faQuestionCircle,
  faCreditCard
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUser,
  faSearch,
  faShoppingCart,
  faBars,
  faMapMarkedAlt,
  faTruck,
  faUndo,
  faQuestionCircle,
  faCreditCard
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueAxios, axios);

Vue.filter("currency", value => {
  let val = (value / 1).toFixed(2).replace(".", ",");
  return "IDR " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
