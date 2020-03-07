<template>
    <div id="review-feed">
        <p class="has-text-white is-size-5 is-size-6-mobile">"{{ value.review | textLimit(200) }}"</p>
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
