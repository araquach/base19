<template>
    <div class="section news-item">
        <p class="has-text-white is-size-4">{{ value.review }}</p>
        <p class="has-text-white is-size-6">{{ value.client }}</p>
        <p class="has-text-white is-size-6">Stylist: {{ value.staff }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>

</style>
