<template>
    <section id="team" class="section team-info hero is-fullheight is-dark">
        <div class="is-hidden">
            <h1 class="title">Meet the Team</h1>
            <p class="is-size-5">From Junior Stylists through to experienced graduates - the Base team are all talented, motivated individuals looking to build on their existing skills</p>
        </div>
        <TeamIndComponent :TeamMembers="TeamMembers" @emitTM="showTM"/>

        <b-modal :active.sync="isComponentModalActive" scroll="keep">
            <TeamModalComponent :selectedTM="selectedTM"/>
        </b-modal>

        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <a href="#team" @click="switchComponent" class="button">Go Back</a>
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

        props: ['TeamMembers'],

        data() {
            return {
                    selectedTM: '',
                    isComponentModalActive: false
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
