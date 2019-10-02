<template>
    <section id="models" class="hero is-fullheight is-dark">
        <!--Pre Click-->
        <div v-show="!showInfo" class="hero-body show">
            <div class="container">
                <h1 class="title">
                    Sign Up to be a model
                </h1>
                <h2 class="subtitle">
                    Large subtitle
                </h2>
                <button @click="showInfo = true" class="button">Find out more</button>
            </div>
        </div>
        <!--Post Click-->
        <div v-bind:class="{ showInfo: showInfo }" v-show="showInfo" class="hero-body">
            <div class="container">
                <h1 class="title">
                    Sign Up to be a model
                </h1>
                <h2 class="subtitle">
                    Large subtitle
                </h2>
                <p>More info asjhdkjhakhsdka  aksjhfdkasjhfa kasjfhkasjhf kjahsfkjhs</p>
                <button @click="showInfo = false" class="button">Show less</button>
            </div>
        </div>
    </section>
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