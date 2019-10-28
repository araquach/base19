<template>
    <section id="team" class="section team-info hero is-dark">
        <TeamIndComponent :TeamMembers="TeamMembers" @emitTM="showTM"/>

        <b-modal :active.sync="isComponentModalActive">
            <TeamModalComponent :selectedTM="selectedTM"/>
        </b-modal>

        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <button @click="switchComponent" class="button">Go Back</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import TeamIndComponent from './TeamInd'
    import TeamModalComponent from './TeamModal'

    export default {
        components: {TeamIndComponent, TeamModalComponent},

        data() {
            return {
                    selectedTM: '',
                    isComponentModalActive: false,
                    TeamMembers: []
                }
        },

        methods: {
            showTM(tm) {
                this.selectedTM = tm
                this.isComponentModalActive = true
            },

            switchComponent() {
                this.$emit('switchComponent')
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
