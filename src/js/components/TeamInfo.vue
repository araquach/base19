<template>
    <section id="team" class="section team-info hero is-fullheight is-dark">
        <div class="columns is-multiline">
            <div id="abi" class="section column is-4">
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
            </div>
        </div>
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
            axios.get('/api/team').then(response => this.TeamMembers = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>