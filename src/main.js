import Vue from "vue";
import AV from "leancloud-storage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";
AV.init({
  appId: "kTRNKbNjCEvilqo4mbqlxt1A-MdYXbMMI",
  appKey: "VJTywpA0iLUwmNateg1nvd4E"
});
library.add(faBars, faEnvelopeSquare, faLinkedin);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
