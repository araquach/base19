<template>
    <div>
        <contact-front-component v-if="!showContactInfo"></contact-front-component>
        <contact-info-component v-if="showContactInfo"></contact-info-component>
    </div>
</template>

<script>
    import ContactFront from './ContactFront'
    import ContactInfo from './ContactInfo'

    export default {
        components: {
            contactFrontComponent: ContactFront,
            contactInfoComponent: ContactInfo
        },

        data() {
            return {
                showContactInfo: false
            }
        }
    }
</script>