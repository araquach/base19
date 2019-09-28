import smoothscroll from 'smoothscroll-polyfill';

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

    // scroll to contact
    document.querySelector('.js-scroll-to-contact').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });

    // scroll to models
    document.querySelector('.js-scroll-to-models').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#models').scrollIntoView({ behavior: 'smooth' });
    });
});