<template>
    <section class="section team-info hero is-fullheight is-dark">
        <h1 class="title is-3">The Base Team</h1>

        <div class="columns is-multiline">
            <div v-for="(tm, id) in teamMembers" class="section column is-4">
                <router-link :to="{ name: `${tm.slug}-profile` }">
                    <div class="card has-background-black">
                        <div class="card-image">
                            <figure class="image is-4by5">
                                <img :src="tm.image" :alt="tm.first_name">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <h2 class="title is-4 has-text-white">{{tm.first_name}} {{tm.last_name}}</h2>
                                    <p class="subtitle has-text-white">{{tm.level_name}}</p>
                                </div>
                            </div>
                          <div class="content is-size-7-mobile has-text-white">
                            <p>{{tm.para_1}}</p>
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
  export default {
        data() {
            return {
                teamMembers: []
            }
        },

        mounted() {
            axios
                .get('/api/team')
                .then(r => r.data)
                .then(r => this.teamMembers = r)
        }
    }
</script>
