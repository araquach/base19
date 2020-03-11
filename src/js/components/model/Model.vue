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

<style lang="scss">
    .models {
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.4)), url("/dist/img/bgrounds/b5.jpg") center top no-repeat;
        background-size: cover;
    }

    .models-info {
        background: linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85)), url("/dist/img/bgrounds/b5.jpg") center top no-repeat;
        background-size: cover;
    }
</style>

