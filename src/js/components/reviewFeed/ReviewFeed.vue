<template>
    <div class="news-ticker">
        <div>
            <ReviewInd :key="currentReview.id" :value="currentReview"/>
        </div>
    </div>
</template>

<script>
    import ReviewInd from "./ReviewInd"
    import { clearInterval } from "timers"
    let id = 2
    export default {
        components: {
            ReviewInd
        },
        data() {
            return {
                currentReviewIndex: 1,
                intervalId: null,

                allReviews: []
            }
        },

        computed: {
            currentReview() {
                return this.allReviews[this.currentReviewIndex];
            }
        },

        mounted() {
            this.currentReviewIndex = Math.round(
                Math.random() * (this.allReviews.length - 1)
            );
            this.startTickerTimer();
        },
        beforeDestroy() {
            this.stopTickerTimer();
        },

        methods: {
            startTickerTimer() {
                this.stopTickerTimer();
                this.intervalId = setInterval(this.timerTick, 7000);
            },
            stopTickerTimer() {
                if (this.intervalId) clearInterval(this.intervalId);
                this.intervalId = null;
            },
            timerTick() {
                this.currentReviewIndex =
                    (this.currentReviewIndex + 1) % this.allReviews.length;
            }
        },

        created() {
            axios.get('/api/reviews').then(response => this.allReviews = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>

<style type="scss">

</style>