<template>
    <div>
        <transition name="fade" mode="out-in">
            <component :is="selectedComponent" @switchComponent="switchComponent"/>
        </transition>
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
                selectedComponent: 'TeamFrontComponent'
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