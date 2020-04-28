<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent"
                   :title="title"
                   :subtitle="subtitle"
                   @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import OffersFrontComponent from './OffersFront'
    import OffersInfoComponent from './OffersInfo'

    export default {
        components: {
            OffersFrontComponent,
            OffersInfoComponent
        },

        data() {
            return {
                selectedComponent: 'OffersFrontComponent',
                title: 'Special Offers',
                subtitle: 'For a limited time only'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'OffersInfoComponent') {
                    this.selectedComponent = 'OffersFrontComponent'
                } else {
                    this.selectedComponent = 'OffersInfoComponent'
                }
            }
        }
    }
</script>

