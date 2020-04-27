<template>
    <section id="model" class="model hero is-fullheight is-dark">
        <div class="hero-body show columns">
            <div class="section column is-4">
                <h1 class="title">Sign up to be a model</h1>
                <h2 class="subtitle">Get your hair done for practically FREE on one of our training days</h2>
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