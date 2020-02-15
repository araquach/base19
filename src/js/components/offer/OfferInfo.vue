<template>
    <section id="offers" class="section offer-info hero is-fullheight is-dark">
        <div class="columns is-vcentered">
            <div class="column is-8-desktop">
                <h1 class="title">{{title}}</h1>
                <h2 class="subtitle">{{subtitle}}</h2>
                <p class="is-size-5">Lucy &amp; Lauren are two outstanding Graduate Stylists looking to build their client bases. They both love colouring, cutting & styling hair - their work is outstanding.</p>
                <p>Beth, Ruby &amp; Sophie are all Junior stylists looking to build their skills. They're taking on basic colouring and cutting - all fully supervised by a Senior Stylist</p>
                <p class="is-size-5"><strong>If you're wanting a new look take advantage of these great New Year offers!</strong></p>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-square">
                            <img src="/dist/img/offer/ny_offer_1.jpg" alt="Graduate Stylist Offer">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="subtitle has-text-white">Graduate Stylist Offer for new clients to Base</p>
                            </div>
                        </div>
                        <div class="content is-size-5-mobile has-text-white">
                            <p>Skin test required 48 hours before any colour service. Offer Ends 31/03/20</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-square">
                            <img src="/dist/img/offer/ny_offer_2.jpg" alt="Junior Stylist Offer">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="subtitle has-text-white">Junior Stylist Offer - Basic Colouring & Cutting only - please book with a Graduate for more advanced Cutting/Colouring </p>
                            </div>
                        </div>
                        <div class="content is-size-5-mobile has-text-white">
                            <p>Skin test required 48 hours before any colour service. Offer Ends 31/03/20</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <a href="#offers" @click="switchComponent" class="button">Go Back</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['title', 'subtitle'],

        methods: {
            switchComponent() {
                this.$emit('switchComponent')
            }
        }
    }
</script>