<template>
    <section id="offers" class="offers hero is-fullheight is-dark">
        <div class="hero-body show columns">
            <div class="section column is-4">
                <h1 class="title">Special Offers</h1>
                <h2 class="subtitle">Take advantage of these amazing December Offers</h2>
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