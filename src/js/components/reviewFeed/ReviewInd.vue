<template>
    <div class="review-feed">
        <p class="has-text-white">"{{ review.review | textLimit(150) }}"</p>
        <p class="has-text-white">{{ review.client }}</p>
        <p class="has-text-white">{{ review.staff }}</p>
    </div>
</template>

<script>
    export default {
        props: ['review']
    }
</script>
