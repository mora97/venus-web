import Vue from "vue"
import Vuex from "vuex"
import Auth from "./modules/Auth"
import Profile from "./modules/Profile"
import CheckOut from "./modules/Check-out"
import Products from "./modules/Products"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        activeLoadbar: true
    },
    getters: {
        getActiveLoadbar: (state) => {
            return state.activeLoadbar
        }
    },
    mutations: {
        setActiveLoadbar: (state, active) => {
            state.activeLoadbar = active
        }
    },
    modules: {
        Profile,
        CheckOut,
        Auth,
        Products
    }
})