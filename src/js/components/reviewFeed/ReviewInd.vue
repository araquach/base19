<template>
    <div id="review-feed">
        <p class="has-text-white">"{{ value.review | textLimit(150) }}"</p>
        <p class="has-text-white">{{ value.client }}</p>
        <p class="has-text-white">{{ value.staff }}</p>
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
