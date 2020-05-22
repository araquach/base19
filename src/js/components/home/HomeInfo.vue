<template>
    <section id="home" class="hero is-fullheight">
        <div class="hero-body columns is-centered">
            <div class="column is-5 is-10-mobile">
                <div class="is-hidden">
                    <h1 class="title">Academy for the next generation of super-skilled stylists</h1>
                    <h2 class="subtitle">An amazing creative space for upcoming hair stylists</h2>
                    <p class="is-size-5">The Base Team comprises of Apprentices, Junior Stylists and Graduates all offering cutting edge services at a fraction of the cost, in an amazing creative space.</p>
                </div>
                <figure class="image">
                    <img src="/dist/img/base_logo.svg" alt="Base Hairdressing">
                </figure>
                <h2 class="subtitle is-size-4 has-text-white has-text-centered">
                    A hair academy for the next generation of super skilled stylists
                </h2>
                <div class="columns social is-mobile">
                    <div class="column is-2 is-offset-3">
                        <figure class="image is-square">
                            <a href="https://www.instagram.com/basehairdressing/">
                                <img src="/dist/img/home/social/Insta2.svg" alt="Instagram">
                            </a>
                        </figure>
                    </div>
                    <div class="column is-2">
                        <figure class="image is-square">
                            <a href="https://www.facebook.com/basehairdressing/">
                                <img src="/dist/img/home/social/fb.svg" alt="Facebook">
                            </a>
                        </figure>
                    </div>
                    <div class="column is-2">
                        <figure class="image is-square">
                            <a href="https://www.pinterest.co.uk/basehairdressing/">
                                <img src="/dist/img/home/social/pinterest.svg" alt="Pinterest">
                            </a>
                        </figure>
                    </div>
                </div>
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