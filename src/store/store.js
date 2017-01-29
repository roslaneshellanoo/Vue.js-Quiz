

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        open: true,
        docked: true,
        currentRoute: window.location.pathname
    },
    mutations: {

        openChange(state) {
            return state.open = !state.open
        }
    }
});
