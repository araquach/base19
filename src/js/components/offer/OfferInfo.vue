<template>
    <section id="offer" class="section offer-info hero is-fullheight is-dark">
        <div class="columns is-vcentered">
            <div class="column is-5-desktop">
                <h1 class="title">Special Offers</h1>
                <h2 class="subtitle">Take advantage of these amazing December Offers</h2>

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