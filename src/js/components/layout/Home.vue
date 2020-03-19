<template>
    <section id="home" class="hero is-fullheight">

        <div class="hero-body columns is-centered">
            <div class="column is-5 is-10-mobile">
                <h1 class="is-hidden">
                    Base Hairdressing
                </h1>
                <figure class="image">
                    <img src="dist/img/base_logo.svg" alt="Base Hairdressing">
                </figure>
                <h2 class="subtitle is-size-4 has-text-white has-text-centered">
                    A hair academy for the next generation of super skilled stylists
                </h2>

            </div>
        </div>
        <div class="has-text-right">
            <ReviewFeed :staffMember="staffMember"/>
        </div>

    </section>
</template>

<script>
    import ReviewFeed from '../reviewFeed/ReviewFeed'
    export default {
        components: { ReviewFeed },

        data() {
            return {
                staffMember: ''
            }
        }
    }
</script>

<style lang="scss">
    #home {
        background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("/dist/img/bgrounds/b6.jpg") center center no-repeat;
        background-size: cover;

        figure {
            margin-bottom: 3rem;
        }
    }
</style>