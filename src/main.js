// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueMqtt from "vue-mqtt";

Vue.use(VueMqtt, "m11.cloudmqtt.com", {
  username: "miidvfuj",
  password: "emujcuPw9MFs",
  wsOptions: {
    port: 12063
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
