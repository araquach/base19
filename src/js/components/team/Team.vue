<template>
    <div>
        <team-front-component v-if="!showTeamInfo"></team-front-component>
        <team-info-component v-if="showTeamInfo"></team-info-component>
    </div>
</template>

<script>
    import TeamFrontComponent from './TeamFront'
    import TeamInfoComponent from './TeamInfo'

    export default {
        components: {
            TeamFrontComponent,
            TeamInfoComponent
        },

        data() {
            return {
                showTeamInfo: false
            }
        }
    }
</script>