<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
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
                selectedComponent: 'OfferFrontComponent'
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

