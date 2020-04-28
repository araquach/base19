<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent" :TeamMembers="TeamMembers"/>
    </transition>
</template>

<script>
    import TeamInfoComponent from './TeamInfo'
    import TeamAllComponent from './TeamAll'

    export default {
        components: {
            TeamInfoComponent,
            TeamAllComponent
        },

        data() {
            return {
                selectedComponent: 'TeamInfoComponent',
                TeamMembers: []
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'TeamAllComponent') {
                    this.selectedComponent = 'TeamInfoComponent'
                } else {
                    this.selectedComponent = 'TeamAllComponent'
                }
            }
        }
    }
</script>