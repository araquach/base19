import Vue from 'vue'
import Buefy from 'buefy'
import smoothscroll from 'smoothscroll-polyfill'
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
// test component
import Test from './components/Test'

Vue.use(Buefy)

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
})

// kick off the polyfill!
smoothscroll.polyfill();


// add event listener on load
window.addEventListener('load', function() {

    // scroll to bottom
    document.querySelector('.js-scroll-to-bottom').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: document.body.clientHeight - window.innerHeight, left: 0, behavior: 'smooth' });
    });

    // scroll to home
    document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    });

    // scroll to about
    document.querySelector('.js-scroll-to-about').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });

    // scroll to blog
    document.querySelector('.js-scroll-to-blog').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#blog').scrollIntoView({ behavior: 'smooth' });
    });

    // scroll to team
    document.querySelector('.js-scroll-to-team').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#team').scrollIntoView({ behavior: 'smooth' });
    });

    // scroll to joinus
    document.querySelector('.js-scroll-to-joinus').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#joinus').scrollIntoView({ behavior: 'smooth' });
    });

    // scroll to models
    document.querySelector('.js-scroll-to-models').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#models').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});
