<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import AboutFrontComponent from './AboutFront'
    import AboutInfoComponent from './AboutInfo'

    export default {
        components: {
            AboutFrontComponent,
            AboutInfoComponent
        },

        data() {
            return {
                selectedComponent: 'AboutFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'AboutInfoComponent') {
                    this.selectedComponent = 'AboutFrontComponent'
                } else {
                    this.selectedComponent = 'AboutInfoComponent'
                }
            }
        }
    }
</script>

<style lang="scss">
    .about {
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.4)), url("/dist/img/bgrounds/b1.jpg") center top no-repeat;
        background-size: cover;
    }

    .about-info {
        background: linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85)), url("/dist/img/bgrounds/b1.jpg") center top no-repeat;
        background-size: cover;
    }
</style>