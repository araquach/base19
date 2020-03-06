<template>
    <div>
        <transition-group name=”fade”>
            <div v-for="(review) in reviews" :key="review.id" class="has-text-white">
                <div v-show="activeReview">
                    <p class="is-size-3">"{{review.review}}"</p>
                    <p class="is-size-6">Client: {{review.client}}</p>
                    <p class="is-size-6">Stylist: {{review.staff}}</p>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeReview: 1,
                reviews: [
                    {
                        id: 1,
                        review: 'Excellent Service. Will be returning',
                        client: 'Mary Lane',
                        staff: 'Peter Rabbit'
                    },
                    {
                        id: 2,
                        review: 'Lovely Cut, lovely colour. Cyril was great',
                        client: 'Helen Parker',
                        staff: 'Cyril Snere'
                    },
                    {
                        id: 3,
                        review: 'Not totally convinced but i\'ll give you another go sometime',
                        client: 'Graham Nash',
                        staff: 'Bugs Bunny'
                    },
                    {
                        id: 4,
                        review: 'What a colour! Unbelievable',
                        client: 'Les Doolerton',
                        staff: 'Roscoe Peco'
                    }
                ]
            }
        }


    }
</script>

<style type="scss">
    .fade-enter-active, .fade-leave-active {
        transition: all .2s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active {
        transition-delay: .2s;
    }
</style>