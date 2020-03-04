<template>
    <div>
        <div class="section">
            <ul class="navigator">
                <li @click="prevSlide" class="lightgrey"> &laquo; </li>
                <li @click="changeSlide(1)" class="green">1</li>
                <li @click="changeSlide(2)" class="blue">2</li>
                <li @click="changeSlide(3)" class="grey">3</li>
                <li @click="changeSlide(4)" class="red">4</li>
                <li @click="nextSlide" class="lightgrey"> &raquo; </li>
            </ul>
            <div class="slider-container">
                <ul class="slider" :style="styleObject">
                    <li class="green slide">Slide 1</li>
                    <li class="blue slide">Slide 2</li>
                    <li class="grey slide">Slide 3</li>
                    <li class="red slide">Slide 4</li>
                </ul>
            </div>
        </div>
        <ReviewInd :reviews="reviews"/>
    </div>
</template>

<script>
    import ReviewInd from "./ReviewInd";

    export default {
        components: {
            ReviewInd
        },

        data() {
            return {
                activeSlide: 1,
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

        computed: {
            styleObject() {
                const width = 0 - ((this.activeSlide-1) * 700)
                return {
                    transform: 'translateX('+width+'px)'
                }
            }
        },

        methods: {
            changeSlide: function(num) {
                this.activeSlide = num
            },
            nextSlide: function() {
                if(this.activeSlide < 4) this.activeSlide++
            },
            prevSlide: function() {
                if(this.activeSlide > 1) this.activeSlide--
            }
        }
    }
</script>

<style type="scss">
    .slider-container {
    overflow: hidden;
    width: 700px; height: 200px;
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%)
    }
    .slider { width: 2800px; height: 200px; overflow: hidden; transition: all .32s ease; }
    .slide { float: left; width: 700px; height: 200px; font-size: 40px; color: #eee; padding-top: 70px; }
    .green { background: #1abc9c; }
    .blue { background: #3498db; }
    .grey { background: #34495e; }
    .red { background: #e74c3c; }
    .lightgrey { background: #95a5a6; }

    .navigator { text-align: center; display: inline-block; margin: 15px auto; overflow: hidden; padding-bottom: 10px; }
    .navigator li {
    float: left;
    color: #ecf0f1;
    border-radius: 50%;
    padding: 7px 11px;
    margin: 0 10px; cursor: pointer;
    box-shadow: 0 3px 17px rgba(0,0,0,.3);
    transition: all .32s ease;
    position: relative;
    &:hover {
    transform: translateY(-2px);
    }
    }
</style>