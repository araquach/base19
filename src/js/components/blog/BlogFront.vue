<template>
    <section id="blog" class="blog hero is-fullheight is-dark">
        <div class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Blog</h1>
                <h2 class="subtitle">All the latest new from Base</h2>
                <button @click="switchComponent" class="button">Blog posts</button>
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