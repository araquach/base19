<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import JoinusFrontComponent from './JoinusFront'
    import JoinusInfoComponent from './JoinusInfo'

    export default {
        components: {
            JoinusFrontComponent,
            JoinusInfoComponent
        },

        data() {
            return {
                selectedComponent: 'JoinusFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'JoinusInfoComponent') {
                    this.selectedComponent = 'JoinusFrontComponent'
                } else {
                    this.selectedComponent = 'JoinusInfoComponent'
                }
            }
        }
    }
</script>

<style lang="scss">
    .joinus {
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.4)), url("/dist/img/bgrounds/b2.jpg") center top no-repeat;
        background-size: cover;
    }

    .joinus-info {
        background: linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85)), url("/dist/img/bgrounds/b2.jpg") center top no-repeat;
        background-size: cover;
    }
</style>