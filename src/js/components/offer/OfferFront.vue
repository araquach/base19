<template>
    <section id="offers" class="offer hero is-fullheight is-dark">
        <div class="hero-body show columns">
            <div class="section column is-4">
                <h1 class="title">New Year Offers</h1>
                <h2 class="subtitle">Go for a new look for 2020</h2>
                <button @click="switchComponent" class="button">More info</button>
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