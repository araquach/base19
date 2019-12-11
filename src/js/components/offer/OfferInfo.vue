<template>
    <section id="offer" class="section offer-info hero is-fullheight is-dark">
        <div class="columns is-vcentered">
            <div class="column is-5-desktop">
                <h1 class="title"> Offers</h1>
                <h2 class="subtitle">Take advantage of these amazing Christmas Offers</h2>
                <p>Lucy &amp; Lauren are two outstanding Graduate Stylists looking to build their client bases. They both love colouring, cutting & styling hair and their work is outstanding.</p>
                <p>If you're wanting a new look take advantage of Lucy & Lauren's special December offers!</p>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by5">
                            <img src="" alt="">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4 has-text-white">£40 Colour & Cut</p>
                                <p class="subtitle has-text-white">For new clients to Base</p>
                            </div>
                        </div>
                        <div class="content is-size-5-mobile has-text-white">
                            <p>Skin test required 48 hours before any colour service. Offer Ends 24/12/19</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by5">
                            <img src="" alt="">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4 has-text-white">£15 Blowdry or Hair Up</p>
                                <p class="subtitle has-text-white">Right up to Christmas Eve</p>
                            </div>
                        </div>
                        <div class="content is-size-5-mobile has-text-white">
                            <p>Offer Ends 24/12/19.<br> Mention offer when booking</p>
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
        methods: {
            switchComponent() {
                this.$emit('switchComponent')
            }
        }
    }
</script>