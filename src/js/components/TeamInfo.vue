<template>
    <section id="team" class="section team-info hero is-fullheight is-dark">
        <div class="columns is-multiline">
            <div v-for="tm in teamMembers"  :id="tm.FirstName" class="section column is-4">
                <div class="card">
                    <div class="card-image">
                        <figure class="image">
                            <img :src="tm.Image" :alt="tm.FirstName">
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
        </div>
        <team-ind-component></team-ind-component>
    </section>
</template>

<script>
    import TeamInd from './TeamInd'

    export default {
        components: {
            teamFrontComponent: TeamInd
        },

        data() {
            return {
                    teamMembers: []
                }
        },

        mounted() {
            axios.get('/api/team').then(response => this.teamMembers = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>