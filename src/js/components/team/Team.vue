<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import TeamFrontComponent from './TeamFront'
    import TeamAllComponent from './TeamAll'

    export default {
        components: {
            TeamFrontComponent,
            TeamAllComponent
        },

        data() {
            return {
                selectedComponent: 'TeamFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'TeamAllComponent') {
                    this.selectedComponent = 'TeamFrontComponent'
                } else {
                    this.selectedComponent = 'TeamAllComponent'
                }
            }
        }
    }
</script>