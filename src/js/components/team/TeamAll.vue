<template>
    <section id="team" class="section team-info hero is-fullheight is-dark">
        <TeamIndComponent :TeamMembers="TeamMembers" />

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
    import TeamIndComponent from './TeamInd'
    import TeamModalComponent from './TeamMember'

    export default {
        components: {TeamIndComponent, TeamModalComponent},

        data() {
            return {
                TeamMembers: []
            }
        },

        created() {
            axios.get('/api/team').then(response => this.TeamMembers = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>
