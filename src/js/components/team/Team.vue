<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent" :TeamMembers="TeamMembers"/>
    </transition>
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
                selectedComponent: 'TeamFrontComponent',
                TeamMembers: []
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'TeamInfoComponent') {
                    this.selectedComponent = 'TeamFrontComponent'
                } else {
                    this.selectedComponent = 'TeamInfoComponent'
                }
            }
        }
    }
</script>

<style lang="scss">
    .team {
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.4)), url("/dist/img/bgrounds/base-team-bg.jpg") center center no-repeat;
        background-size: cover;
    }

    .team-info {
        background: linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85)), url("/dist/img/bgrounds/base-team-bg.jpg") center top no-repeat;
        background-size: cover;
    }
</style>