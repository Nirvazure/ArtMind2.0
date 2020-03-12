import Vue from "vue";
import App from "./App.vue";
import router from "@/routers.js";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VueAwesomeSwiper from "vue-awesome-swiper";

import filter from "@/filters.js";
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]));

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
