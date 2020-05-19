import Vue from "vue";
import App from "./App.vue";
import router from "@/routers.js"; //引入全局路由
import store from "./store"; //引入vuex的全局状态管理
import vuetify from "./plugins/vuetify"; //引入UI框架
import VueAwesomeSwiper from "vue-awesome-swiper"; //引入第三方UI组件包提供动效展示
import VueDragAndDropList from "vue-drag-and-drop-list";
import filter from "@/filters.js"; //引入全局过滤器
Object.keys(filter).forEach((key) => Vue.filter(key, filter[key])); //注册全局过滤器

// require styles
import "swiper/dist/css/swiper.css";
import animate from "animate.css";

Vue.use(animate);
Vue.use(VueDragAndDropList);
Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
