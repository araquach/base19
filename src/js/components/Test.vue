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
                showInfo: true,
                showAbi: false
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