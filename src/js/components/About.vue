<template>
    <section id="about" class="about hero is-fullheight is-dark">
        <about-front-component v-if="!showAboutInfo"></about-front-component>
        <about-info-component v-if="showAboutInfo"></about-info-component>
    </section>
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