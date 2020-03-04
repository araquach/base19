<template>
    <div>
        <div v-for="review in reviews" class="has-text-white">
            <p class="is-size-3">"{{review.review}}"</p>
            <p class="is-size-6">Client: {{review.client}}</p>
            <p class="is-size-6">Stylist: {{review.staff}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['reviews']
    }
</script>