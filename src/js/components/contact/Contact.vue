<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import ContactFrontComponent from './ContactFront'
    import ContactInfoComponent from './ContactInfo'

    export default {
        components: {
            ContactFrontComponent,
            ContactInfoComponent
        },

        data() {
            return {
                selectedComponent: 'ContactFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'ContactInfoComponent') {
                    this.selectedComponent = 'ContactFrontComponent'
                } else {
                    this.selectedComponent = 'ContactInfoComponent'
                }
            }
        }
    }
</script>

<style lang="scss">
    .contact {
        background: url("/dist/img/bgrounds/b7.jpg") center top no-repeat;
        background-size: cover;
    }

    .contact-info {
        background: linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85)), url("/dist/img/bgrounds/b7.jpg") center top no-repeat;
        background-size: cover;
    }
</style>