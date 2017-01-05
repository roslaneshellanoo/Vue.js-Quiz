// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './style.scss'

Vue.use(Vuex);
Vue.use(MuseUI);

/* eslint-disable no-new */

const app = new Vue({
  el: '#app',
  components: {
    // all components already registered
  },
  router,
  render: h => h(App)
});
