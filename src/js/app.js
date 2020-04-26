import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'
import Vuelidate from 'vuelidate'

Vue.use(Buefy)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(Vuelidate)

<<<<<<< HEAD
window.axios = require('axios')
=======
Vue.component('navbar-component', Navbar)
Vue.component('navbar-seo-component', NavbarSeo)
Vue.component('cookie-component', Cookie)
Vue.component('home-component', Home)
Vue.component('about-component', About)
Vue.component('team-component', Team)
Vue.component('offer-component', Offer)
Vue.component('joinus-component', Joinus)
Vue.component('blog-component', Blog)
Vue.component('model-component', Model)
Vue.component('contact-component', Contact)

window.axios = require('axios');
>>>>>>> dev
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.filter('textLimit', function (text, length) {
    return text.substring(0, length);
})

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
