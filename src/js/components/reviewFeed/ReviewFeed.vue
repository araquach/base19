<template>
    <div>
        <div class="ticker box">
            <article class="media">
                <div class="media-content">
                    <transition name="fade" tag="div" mode="out-in">
                        <div v-for="review in reviews" :key="review.id">
                            {{review.review}}
                        </div>
                    </transition>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tickerLocation: 0,
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
        },
        created: function() {
            setInterval(this.updateTicker, 5000);
        },
        methods: {
            updateTicker: function() {
                var removed = this.reviews.pop();
                this.reviews.unshift(removed);
            }
        }


    }
</script>

<style type="scss">
    .breaking-news {
        background-color: #33A3F1;
        color: #ffffff;
        border-radius: 10px 50px 50px 10px;
        padding: 5px;
    }

    .media-content {
        padding: 5px;
    }

    .time {
        color: #33A3F1;
    }

    .news {
        color: #666666;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>