import Vue from "vue"
import smoothscroll from 'smoothscroll-polyfill'
import Main from './components/Main'
import Cookie from './components/Cookie'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import AboutInfo from './components/AboutInfo'
import Team from './components/Team'
import TeamInfo from './components/TeamInfo'
import Joinus from './components/Joinus'
import JoinusInfo from './components/JoinusInfo'
import Blog from './components/Blog'
import BlogInfo from './components/BlogInfo'
import Model from './components/Model'
import ModelInfo from './components/ModelInfo'
import Contact from './components/Contact'
import ContactInfo from './components/ContactInfo'
// test component
import Test from './components/Test'

Vue.component('main-component', Main)
Vue.component('navbar-component', Navbar)
Vue.component('home-component', Home)
Vue.component('about-component', About)
Vue.component('about-info-component', AboutInfo)
Vue.component('team-component', Team)
Vue.component('team-info-component', TeamInfo)
Vue.component('joinus-component', Joinus)
Vue.component('joinus-info-component', JoinusInfo)
Vue.component('blog-component', Blog)
Vue.component('blog-info-component', BlogInfo)
Vue.component('model-component', Model)
Vue.component('model-info-component', ModelInfo)
Vue.component('contact-component', Contact)
Vue.component('contact-info-component', ContactInfo)
// test component
Vue.component('test-component', Test)

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = new Vue({
    el: '#app'
});

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

    var rootEl = document.documentElement;
    var $modals = getAll('.modal');
    var $modalButtons = getAll('.modal-button');
    var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

    if ($modalButtons.length > 0) {
        $modalButtons.forEach(function ($el) {
            $el.addEventListener('click', function () {
                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                rootEl.classList.add('is-clipped');
                $target.classList.add('is-active');
            });
        });
    }

    if ($modalCloses.length > 0) {
        $modalCloses.forEach(function ($el) {
            $el.addEventListener('click', function () {
                closeModals();
            });
        });
    }

    document.addEventListener('keydown', function (event) {
        var e = event || window.event;
        if (e.keyCode === 27) {
            closeModals();
        }
    });

    function closeModals() {
        rootEl.classList.remove('is-clipped');
        $modals.forEach(function ($el) {
            $el.classList.remove('is-active');
        });
    }

    // Functions

    function getAll(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }
});
