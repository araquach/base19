import smoothscroll from 'smoothscroll-polyfill'
import Vue from "vue"
import Home from './js/components/Home.vue'
import About from './js/components/About.vue'
import Team from './js/components/Team.vue'
import Blog from './js/components/Blog.vue'
import Joinus from './js/components/Joinus.vue'
import Contact from './js/components/Contact.vue'
import Model from './js/components/Model.vue'
import Booking from './js/components/Booking.vue'
// test component
import Test from './js/components/Test.vue'

Vue.component('home-component', Home)
Vue.component('about-component', About)
Vue.component('team-component', Team)
Vue.component('blog-component', Blog)
Vue.component('joinus-component', Joinus)
Vue.component('contact-component', Contact)
Vue.component('model-component', Model)
Vue.component('booking-component', Booking)
// test component
Vue.component('test-component', Test)

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

    // scroll to booking
    document.querySelector('.js-scroll-to-booking').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#booking').scrollIntoView({ behavior: 'smooth' });
    });

    // scroll to contact
    document.querySelector('.js-scroll-to-contact').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
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