import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sensor: {},
    timestamp: {}
  },
  mutations: {
    setSensor(state, data) {
      state.sensor = data;
      state.timestamp = new Date();
    }
  }
});
