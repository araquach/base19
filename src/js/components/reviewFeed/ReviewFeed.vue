<template>
    <div>
        <ReviewInd :review="currentReview"/>
    </div>
</template>

<script>
    import ReviewInd from "./ReviewInd"
    import { clearInterval } from "timers"
    export default {
        components: {
            ReviewInd
        },
        data() {
            return {
                currentReviewIndex: 0,
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
            this.startTimer();
        },

        beforeDestroy() {
            this.stopTimer();
        },

        methods: {
            startTimer() {
                this.stopTimer();
                this.intervalId = setInterval(this.timerTick, 7000);
            },
            stopTimer() {
                if (this.intervalId) clearInterval(this.intervalId);
                this.intervalId = null;
            },
            timerTick() {
                this.currentReviewIndex = Math.round(
                    Math.random() * (this.allReviews.length - 1)
                )
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