<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import ModelsFrontComponent from './ModelsFront'
    import ModelsInfoComponent from './ModelsInfo'

    export default {
        components: {
            ModelsFrontComponent,
            ModelsInfoComponent
        },

        data() {
            return {
                selectedComponent: 'ModelsFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'ModelsInfoComponent') {
                    this.selectedComponent = 'ModelsFrontComponent'
                } else {
                    this.selectedComponent = 'ModelsInfoComponent'
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

