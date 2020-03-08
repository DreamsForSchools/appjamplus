import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    navOn: false
  },
  mutations: {
    closeNav(state) {
      state.navOn = false;
    },
    toggleNav(state) {
      state.navOn = !state.navOn;
    }
  }
});
