<template>
    <section id="team" class="hero is-fullheight is-dark">
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
                <div v-for="tm in TeamMembers" :id="tm.FirstName" class="section column is-4">
                    <div @click="showModal = true" class="card">
                        <div class="card-image">
                            <figure class="image">
                                <img :src="tm.Image" :alt="tm.FirsName">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-white">{{tm.FirstName}} {{tm.LastName}}</p>
                                    <p class="subtitle has-text-white">{{tm.Level}}</p>
                                </div>
                            </div>
                            <div class="content is-size-5-mobile has-text-white">
                                <p class="price">Average Cut &amp; Colour price &pound;{{tm.Price}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal" v-bind:class="{ 'is-active': showModal }">
                    <div class="modal-background" v-on:click="showModal"></div>
                    <div class="modal-content">
                        <figure class="image">
                            <img :src="tm.Image" :alt="tm.FirstName">
                        </figure>
                    </div>
                    <button class="modal-close is-large" aria-label="close" @click="showModal = false"></button>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
    export default {

        data() {
            return {
                TeamMembers: [],
                showInfo: true,
                showModal: false,
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