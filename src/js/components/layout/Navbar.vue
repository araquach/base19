<template>
    <b-navbar class="is-fixed-top is-spaced">
        <template slot="start">
            <b-navbar-item tag="router-link" to="/#home" v-scroll-to="'#home'">
                Home
            </b-navbar-item>
            <a href="" ></a>
            <b-navbar-item tag="router-link" to="/#about" v-scroll-to="'#about'">
                About
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/#team" v-scroll-to="'#team'">
                Team
            </b-navbar-item>
            <b-navbar-item tag="router-link" to="/#offers" v-scroll-to="'#offers'">
                Offers
            </b-navbar-item>
            <b-navbar-dropdown label="More">
                <b-navbar-item tag="router-link" to="/#joinus" v-scroll-to="'#joinus'">
                    Join Us
                </b-navbar-item>
                <hr class="navbar-divider">
                <b-navbar-item tag="router-link" to="/#models" v-scroll-to="'#models'">
                    Models
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a href="https://phorest.com/book/salons/basehairacademy" class="button is-primary">
                        <strong>Book Now</strong>
                    </a>
                    <b-navbar-item tag="router-link" class="button is-light" to="/#contact" v-scroll-to="'#contact'">
                        Contact Us
                    </b-navbar-item>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>