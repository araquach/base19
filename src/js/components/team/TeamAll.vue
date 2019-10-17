<template>
    <div>
        <TeamIndComponent
                v-for="(tm, index) in teamMembers"
                :firstName=tm.firstName
                :lastName=tm.lastName
                :key="index"
        />
    </div>
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