<template>
    <section id="team" class="section team-info is-fullheight is-dark">
        <div class="columns is-multiline">
            <TeamIndComponent v-for="(tm, index) in teamMembers" key="index" :tm="tm"/>
        </div>
    </section>
</template>

<script>
    import TeamIndComponent from './TeamInd'

    export default {
        components: {
            TeamIndComponent: TeamIndComponent
        },

        data() {
            return {
                    teamMembers: [],
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