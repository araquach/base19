<template>
    <section id="offer" class="offer hero is-fullheight is-dark">
        <div class="hero-body show columns">
            <div class="section column is-4">
                <h1 class="title">{{title}}</h1>
                <h2 class="subtitle">{{subtitle}}</h2>
                <button @click="switchComponent" class="button">More info</button>
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