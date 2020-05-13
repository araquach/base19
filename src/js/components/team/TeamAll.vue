<template>
    <section id="team" class="section team-info hero is-fullheight is-dark">
        <h1>The Base Team</h1>

        <div class="columns is-multiline">
            <div v-for="(tm, id) in teamMembers" class="section column is-4">
                <router-link :to="{ name: 'team-detail', params: { slug: tm.slug } }">
                    <div class="card has-background-black">
                        <div class="card-image">
                            <figure class="image is-4by5">
                                <img :src="tm.image" :alt="tm.first_name">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4 has-text-white">{{tm.first_name}} {{tm.last_name}}</p>
                                    <p class="subtitle has-text-white">{{tm.level}}</p>
                                </div>
                            </div>
                            <div class="content is-size-5-mobile has-text-white">
                                <p class="price">Average Cut &amp; Colour price &pound;{{tm.price}}</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <a @click="$router.go(-1)" class="button">back</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        mounted() {
            this.$store.dispatch('loadTeamMembers')
        },

        computed: {
            ...mapGetters([
                'teamMembers'
            ])
        }
    }
</script>
