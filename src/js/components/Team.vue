<template>
    <div>
        <team-front-component v-if="!showTeamInfo"></team-front-component>
        <team-info-component v-if="showTeamInfo"></team-info-component>
    </div>
</template>

<script>
    import TeamFront from './TeamFront'
    import TeamInfo from './TeamInfo'

    export default {
        components: {
            teamFrontComponent: TeamFront,
            teamInfoComponent: TeamInfo
        },

        data() {
            return {
                showTeamInfo: true
            }
        }
    }
</script>