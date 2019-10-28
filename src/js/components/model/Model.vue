<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import ModelFrontComponent from './ModelFront'
    import ModelInfoComponent from './ModelInfo'

    export default {
        components: {
            ModelFrontComponent,
            ModelInfoComponent
        },

        data() {
            return {
                selectedComponent: 'ModelFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'ModelInfoComponent') {
                    this.selectedComponent = 'ModelFrontComponent'
                } else {
                    this.selectedComponent = 'ModelInfoComponent'
                }
            }
        }
    }
</script>

