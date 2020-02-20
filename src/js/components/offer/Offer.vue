<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent"
                   :title="title"
                   :subtitle="subtitle"
                   @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import OfferFrontComponent from './OfferFront'
    import OfferInfoComponent from './OfferInfo'

    export default {
        components: {
            OfferFrontComponent,
            OfferInfoComponent
        },

        data() {
            return {
                selectedComponent: 'OfferFrontComponent',
                title: 'Special Offers',
                subtitle: 'For a limited time only'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'OfferInfoComponent') {
                    this.selectedComponent = 'OfferFrontComponent'
                } else {
                    this.selectedComponent = 'OfferInfoComponent'
                }
            }
        }
    }
</script>

<style lang="scss">
    .offer {
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.4)), url("/dist/img/bgrounds/offers.jpg") center top no-repeat;
        background-size: cover;
    }

    .offer-info {
        background: linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85)), url("/dist/img/bgrounds/offers.jpg") center top no-repeat;
        background-size: cover;
    }
</style>

