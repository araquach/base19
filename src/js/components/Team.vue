<template>
    <section id="team" class="hero is-fullheight is-dark">
        <lucy-component></lucy-component>
        <div v-show="!showInfo" class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Meet the Base Team</h1>
                <h2 class="subtitle">from Junior Stylists through to experienced graduates</h2>
                <button @click="showInfo = true" class="button">Find out more</button>
            </div>
        </div>
        <!--Post Click-->
        <transition name="fade">
        <div v-bind:class="{ showInfo: showInfo }"  v-show="showInfo" class="hero-body columns is-multiline">
            <div id="abi" class="section column is-4">
                <a href="#">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img src="/dist/img/team/abi.jpg" alt="Abi Clarke">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-white">Abi Clarke</p>
                                    <p class="subtitle has-text-white">Stylist</p>
                                </div>
                            </div>
                            <div class="content is-size-5-mobile has-text-white">
                                <p class="price">Average Cut &amp; Colour price &pound;90</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div id="david" class="section column is-4">
                <a href="#">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img src="/dist/img/team/david.jpg" alt="">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-white">David Randles</p>
                                    <p class="subtitle has-text-white">Stylist</p>
                                </div>
                            </div>
                            <div class="content is-size-5-mobile has-text-white">
                                <p class="price">Average Cut &amp; Colour price &pound;90</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div id="lauren_t" class="section column is-4">
                <a href="#">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img src="/dist/img/team/lauren_t.jpg" alt="">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-white">Lauren Thompson</p>
                                    <p class="subtitle has-text-white">Stylist</p>
                                </div>
                            </div>
                            <div class="content is-size-5-mobile has-text-white">
                                <p class="price">Average Cut &amp; Colour price &pound;90</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div id="lauren_w" class="section column is-4">
                <a href="#">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img src="/dist/img/team/lauren_w.jpg" alt="Lauren Watson">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-white">Lauren Watson</p>
                                    <p class="subtitle has-text-white">Graduate Stylist</p>
                                </div>
                            </div>
                            <div class="content is-size-5-mobile has-text-white">
                                <p class="price">Average Cut &amp; Colour price &pound;30</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div id="lucy" class="section column is-4">
                    <div @click="lucy = true" class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img src="/dist/img/team/lucy.jpg" alt="Lucy Watson">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-white">Lucy Watson</p>
                                    <p class="subtitle has-text-white">Graduate Stylist</p>
                                </div>
                            </div>
                            <div class="content is-size-5-mobile has-text-white">
                                <p class="price">Average Cut &amp; Colour price &pound;30</p>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
        </transition>
    </section>
</template>

<script>
    export default {

        data() {
            return {
                showInfo: false,
                lucy: false
            }
        }
    }
</script>