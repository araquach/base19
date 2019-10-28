import Vue from 'vue'
import App from './App.vue'
import Cookie from './components/Cookie'
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import About from './components/about/About'
import Team from './components/team/Team'
import Joinus from './components/joinus/Joinus'
import Blog from './components/blog/Blog'
import Model from './components/model/Model'
import Contact from './components/contact/Contact'

import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'

Vue.use(Buefy)
Vue.use(VueScrollTo)

Vue.component('navbar-component', Navbar)
Vue.component('cookie-component', Cookie)
Vue.component('home-component', Home)
Vue.component('about-component', About)
Vue.component('team-component', Team)
Vue.component('joinus-component', Joinus)
Vue.component('blog-component', Blog)
Vue.component('model-component', Model)
Vue.component('contact-component', Contact)
// test component
Vue.component('test-component', Test)

window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

new Vue({
    el: '#app',
    render: h => h(App)
});
