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

