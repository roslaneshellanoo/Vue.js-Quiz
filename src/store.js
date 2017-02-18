

import  {array_methods, keywords} from './api/cheatsheet'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: "some string"
  }
});
