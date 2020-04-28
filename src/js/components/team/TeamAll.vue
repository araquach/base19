<template>
    <section id="team" class="section team-info hero is-fullheight is-dark">
        <TeamIndComponent :TeamMembers="TeamMembers" @emitTM="showTM"/>

        <b-modal :active.sync="isComponentModalActive" scroll="keep">
            <TeamModalComponent :selectedTM="selectedTM"/>
        </b-modal>

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
    import TeamModalComponent from './TeamModal'

    export default {
        components: {TeamIndComponent, TeamModalComponent},

        data() {
            return {
                TeamMembers: [],
                selectedTM: '',
                    isComponentModalActive: false
                }
        },

        methods: {
            showTM(tm) {
                this.selectedTM = tm
                this.isComponentModalActive = true
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
