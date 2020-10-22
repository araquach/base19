<template>
    <div v-if="review" class="review-feed">
        <p class="has-text-white">"{{ review.review | textLimit(180) }}"</p>
        <p class="has-text-white">{{ review.client }}</p>
        <p class="has-text-white">{{ review.stylist }}</p>
    </div>
</template>

<script>
    export default {
        props: ['review']
    }
</script>
