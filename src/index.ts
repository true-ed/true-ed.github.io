import Vue from "vue";

import App from "./App.vue";

import VueRellax from 'vue-rellax'

Vue.use(VueRellax)

new Vue({
  render: h => h(App)
}).$mount("#app");
