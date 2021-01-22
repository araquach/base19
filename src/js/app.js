import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'
import Vuelidate from 'vuelidate'
import VueMoment from 'vue-moment'

Vue.use(Buefy)
Vue.use(VueScrollTo)
Vue.use(Vuelidate)
Vue.use(VueMoment)

window.axios = require('axios')

Vue.filter('textLimit', function (text, length) {
    return text.substring(0, length)
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
