import Vue from 'vue'
import Vuex from 'vuex'
import * as calc from "araquach-price-calc/store/modules/calc"

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        calc
    }
})