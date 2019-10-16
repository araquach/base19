<template>
    <div>
        <transition name="fade" mode="out-in">
            <component :is="selectedComponent" @switchComponent="switchComponent"/>
        </transition>
    </div>
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