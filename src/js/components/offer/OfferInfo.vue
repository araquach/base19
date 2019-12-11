<template>
    <section id="offer" class="section offer-info hero is-fullheight is-dark">
        <div class="columns is-vcentered">
            <div class="column is-5-desktop">
                <h1 class="title">Special Offers</h1>
                <h2 class="subtitle">Take advantage of these amazing Christmas Offers</h2>
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
                                <p class="title is-4 has-text-white">Offer 1 Text</p>
                                <p class="subtitle has-text-white">More Text</p>
                            </div>
                        </div>
                        <div class="content is-size-5-mobile has-text-white">
                            <p>Yada Yada</p>
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
                                <p class="title is-4 has-text-white">Offer 2 Text</p>
                                <p class="subtitle has-text-white">More Text</p>
                            </div>
                        </div>
                        <div class="content is-size-5-mobile has-text-white">
                            <p>Other Text</p>
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