<template>
    <nav class="navbar is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a href="#home" class="navbar-item js-scroll-to-top">Home</a>
                <a href="#about" class="navbar-item js-scroll-to-about">About Us</a>
                <a href="#team" class="navbar-item js-scroll-to-team">Team</a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link is-hidden-mobile is-hidden-tablet">More</a>

                    <div class="navbar-dropdown">
                        <a href="#joinus" class="navbar-item js-scroll-to-joinus">Join Us</a>
                        <a href="#blog" class="navbar-item js-scroll-to-blog">Blog</a>
                        <hr class="navbar-divider">
                        <a href="#models" class="navbar-item js-scroll-to-models">Model Register</a>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a href="https://phorest.com/book/salons/basehairacademy"   class="button is-primary js-scroll-to-booking"><strong>Book Now</strong></a>
                        <a href="#contact" class="button is-light js-scroll-to-bottom">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>