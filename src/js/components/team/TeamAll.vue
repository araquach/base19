<template>
    <section id="team" class="section team-info is-fullheight is-dark">

        <div class="columns is-multiline">
            <TeamIndComponent v-for="(tm, index) in teamMembers" key="tm.Id" :tm="tm" @emitTeamMember="teamMember"/>
            <TeamModalComponent :teamMember="teamMember" />
        </div>

        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <button class="button">Go Back</button>
                </div>
            </div>`
        </div>
    </section>
</template>

<script>
    import TeamIndComponent from './TeamInd'
    import TeamModalComponent from './TeamMember'

    export default {
        components: {
            TeamIndComponent,
            TeamModalComponent
        },

        data() {
            return {
                    teamMembers: [],
                    teamMember: ''
                }
        },

        methods: {
            showModal() {
                this.teamMember = teamMember
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