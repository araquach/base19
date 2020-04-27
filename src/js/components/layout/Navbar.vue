<template>
    <b-navbar class="is-fixed-top is-spaced">
        <template slot="start">
            <router-link class="navbar-item" to="/" v-scroll-to="'#home'">
                Home
            </router-link>
            <router-link class="navbar-item" to="/#about" v-scroll-to="'#about'">
                About
            </router-link>
            <router-link class="navbar-item" to="/#team" v-scroll-to="'#team'">
                Team
            </router-link>
            <router-link class="navbar-item" to="/#offer" v-scroll-to="'#offer'">
                Offers
            </router-link>
            <b-navbar-dropdown label="More">
                <router-link class="navbar-item" to="/#joinus" v-scroll-to="'#joinus'">
                    Join Us
                </router-link>
<!--                <b-navbar-item href="#blog" v-scroll-to="'#blog'">-->
<!--                    Blog-->
<!--                </b-navbar-item>-->
                <hr class="navbar-divider">
                <router-link class="navbar-item" to="/#model" v-scroll-to="'#model'">
                    Model Register
                </router-link>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a href="https://phorest.com/book/salons/basehairacademy" class="button is-primary">
                        <strong>Book Now</strong>
                    </a>
                    <router-link class="button is-light" to="/#contact" v-scroll-to="'#contact'">
                        Contact Us
                    </router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>

</template>