

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        open: true,
        docked: true,
    },
    mutations: {

        openChange(state) {
            return state.open = !state.open
        }
    }
});
