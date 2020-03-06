<template>
    <div class="review-feed">
        <p class="has-text-white is-size-5">"{{ value.review }}"</p>
        <p class="has-text-white is-size-7">Client: {{ value.client }}</p>
        <p class="has-text-white is-size-7">Stylist: {{ value.staff }}</p>
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

<style type="scss" scoped>
    p {
        margin-bottom: 0;
    }

    p:first-of-type {
        margin-bottom: 1.3rem;
    }

    .review-feed {
        position: absolute;
        bottom: 7rem;
        right: 7rem;
        width: 20rem;
        height: auto;
    }
</style>
