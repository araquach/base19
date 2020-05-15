<template>
    <div>
        <ReviewInd :review="currentReview()" />
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
            currentReview() {
                return this.randomReview[this.currentReviewIndex];
            }
        },

        computed: {
            randomReview() {
                return this.allReviews.sort(function(){return 0.5 - Math.random()});
            }
        },

        created() {
            let param = this.$route.params.slug
            if (this.$route.params.slug == null) {
                 param = "all"
            }

            axios.get('/api/reviews/' + param)
                .then(response => this.allReviews = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>