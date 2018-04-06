// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
// import VueMqtt from "vue-mqtt";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import "element-ui/lib/theme-chalk/index.css";
// import { Client } from "paho-mqtt";

let username = "miidvfuj";
let password = "emujcuPw9MFs";
let client = new Paho.MQTT.Client(
  "m11.cloudmqtt.com",
  32063,
  "web_hacklab_" + parseInt(Math.random() * 100, 10)
);
let options = {
  useSSL: true,
  userName: username,
  password: password,
  onSuccess: () => {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    client.subscribe("/cloudmqtt");
    let message = new Paho.MQTT.Message("Hello CloudMQTT");
    message.destinationName = "/cloudmqtt";
    client.send(message);
  },
  onFailure: doFail
};
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect(options);
Vue.use(ElementUI, { locale });

/* Vue.use(VueMqtt, "miidvfuj:emujcuPw9MFs@m11.cloudmqtt.com/ws", {
  username: "miidvfuj",
  password: "emujcuPw9MFs",
  port: 32063,
  keepalive: 60,
  reconnectPeriod: 1000,
  encoding: "utf8"
}); */

Vue.config.productionTip = false;

function doFail(e) {
  console.log(e);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:" + message.payloadString);
}

Vue.prototype.$mqtt = client;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  mqtt: client
});

// called when the client connects
