<template>
    <div>
        <about-front-component v-if="!showAboutInfo"></about-front-component>
        <about-info-component v-if="showAboutInfo"></about-info-component>
    </div>
</template>

<script>
    import AboutFront from './AboutFront'
    import AboutInfo from './AboutInfo'

    export default {
        components: {
            aboutFrontComponent: AboutFront,
            aboutInfoComponent: AboutInfo
        },

        data() {
            return {
                showAboutInfo: false
            }
        }
    }
</script>