<template>
    <div>
    <!--Pre Click-->
    <section id="team" v-if="!showInfo" class="team hero is-fullheight is-dark">
        <div class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Meet the Base Team</h1>
                <h2 class="subtitle">from Junior Stylists through to experienced graduates</h2>
                <button @click="showInfo = true" class="button">Find out more</button>
            </div>
        </div>
    </section>
    <!--Post Click-->
    <transition name="fade">
    <section id="team" v-if="showInfo" class="section team-info hero is-fullheight is-dark">
        <div class="columns is-multiline">
            <!--Abi-->
            <div id="abi" class="section column is-4">
                <div @click="showAbi = true" class="card">
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
            </div>
            <div class="modal" v-bind:class="{ 'is-active': showAbi }">
                <div class="modal-background" v-on:click="showAbi"></div>
                <div class="modal-content">
                    <figure class="image">
                        <img src="/dist/img/team/abi.jpg" alt="Abi Clarke">
                    </figure>
                    This is Abi's Modal
                </div>
                <button class="modal-close is-large" aria-label="close" v-on:click="showAbi = false"></button>
            </div>
            <!--David-->
            <div id="david" class="section column is-4">
                <div @click="showDavid = true" class="card">
                    <div class="card-image">
                        <figure class="image">
                            <img src="/dist/img/team/david.jpg" alt="David Randles">
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
            </div>
            <div class="modal" v-bind:class="{ 'is-active': showDavid }">
                <div class="modal-background" v-on:click="showDavid = false"></div>
                <div class="modal-content">
                    <figure class="image">
                        <img src="/dist/img/team/david.jpg" alt="David Randles">
                    </figure>
                    This is David's Modal
                </div>
                <button class="modal-close is-large" aria-label="close" v-on:click="showDavid = false"></button>
            </div>
            <!--Lauren T-->
            <div id="lauren_t" class="section column is-4">
                <div @click="showLaurenT = true" class="card">
                    <div class="card-image">
                        <figure class="image">
                            <img src="/dist/img/team/lauren_t.jpg" alt="Lauren Thompson">
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
            </div>
            <div class="modal" v-bind:class="{ 'is-active': showLaurenT }">
                <div class="modal-background" v-on:click="showLaurenT = false"></div>
                <div class="modal-content">
                    <figure class="image">
                        <img src="/dist/img/team/lauren_t.jpg" alt="Lauren Thompson">
                    </figure>
                    This is Lauren T's Modal
                </div>
                <button class="modal-close is-large" aria-label="close" v-on:click="showLaurenT = false"></button>
            </div>
            <!--Lauren W-->
            <div id="lauren_w" class="section column is-4">
                <div @click="showLaurenW = true" class="card">
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
            </div>
            <div class="modal" v-bind:class="{ 'is-active': showLaurenW }">
                <div class="modal-background" v-on:click="showLaurenW = false"></div>
                <div class="modal-content">
                    <figure class="image">
                        <img src="/dist/img/team/lauren_w.jpg" alt="Lauren Watson">
                    </figure>
                    This is Lauren W's Modal
                </div>
                <button class="modal-close is-large" aria-label="close" v-on:click="showLaurenW = false"></button>
            </div>
            <!--Lucy-->
            <div id="lucy" class="section column is-4">
                <div @click="showLucy = true" class="card">
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
            <div class="modal" v-bind:class="{ 'is-active': showLucy }">
                <div class="modal-background" v-on:click="showLucy = false"></div>
                <div class="modal-content">
                    <figure class="image">
                        <img src="/dist/img/team/lucy.jpg" alt="Lucy Watson">
                    </figure>
                    This is Lucy's Modal
                </div>
                <button class="modal-close is-large" aria-label="close" v-on:click="showLucy = false"></button>
            </div>
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <button @click="showInfo = false" class="button">Show Less</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </transition>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                teamMembers: [],
                showInfo: false,
                showAbi: false,
                showDavid: false,
                showLaurenT: false,
                showLaurenW: false,
                showLucy: false
            }
        },

        mounted() {
            axios.get('/api/team').then(response => this.TeamMembers = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>