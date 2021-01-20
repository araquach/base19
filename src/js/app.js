import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'
import Vuelidate from 'vuelidate'
import VueMoment from 'vue-moment'

Vue.use(Buefy)
Vue.use(PriceCalc)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(Vuelidate)
Vue.use(VueMoment)

window.axios = require('axios')

Vue.filter('textLimit', function (text, length) {
    return text.substring(0, length)
})

const router = new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
