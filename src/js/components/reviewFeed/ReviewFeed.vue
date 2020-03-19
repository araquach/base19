<template>
    <div>
        <ReviewInd :review="currentReview(staffMember)" />
    </div>
</template>

<script>
    import ReviewInd from "./ReviewInd"
    export default {
        components: {
            ReviewInd
        },

        props: ['staffMember'],

        data() {
            return {
                currentReviewIndex: 0,
                intervalId: null,
                allReviews: []
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
            },
            currentReview(staff) {
                const filteredReviews = this.allReviews.filter(review => review.staff.includes(staff))

                return filteredReviews[this.currentReviewIndex];
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