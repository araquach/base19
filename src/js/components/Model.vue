<template>
    <div>
        <!--Pre Click-->
        <section id="models" v-if="!showInfo" class="hero is-fullheight is-dark">
            <div class="hero-body show columns">
                <div class="section column is-5">
                    <h1 class="title">Sign Up to be a model</h1>
                    <h2 class="subtitle">Large subtitle</h2>
                    <button @click="showInfo = true" class="button">Find out more</button>
                </div>
            </div>
        </section>
            <!--Post Click-->
        <transition name="fade">
        <section id="models" v-show="showInfo" class="hero is-fullheight is-dark">
            <div class="hero-body columns showInfo">
                <div class="section column is-6">
                    <h1 class="title">Sign Up to be a model</h1>
                    <h2 class="subtitle">Large subtitle</h2>
                    <p>More info asjhdkjhakhsdka  aksjhfdkasjhfa kasjfhkasjhf kjahsfkjhs</p>
                    <button @click="showInfo = false" class="button">Show less</button>
                </div>
            </div>
        </section>
        </transition>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                showInfo: false
            }
        }
    }
</script>