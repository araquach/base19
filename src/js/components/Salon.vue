<template>
    <section id="salon" class="hero is-fullheight is-dark">
            <!--Pre Click-->
            <div v-show="!showInfo" class="hero-body show columns">
                <div class="section column is-5">
                    <h1 class="title">
                        The Salon
                    </h1>
                    <h2 class="subtitle">
                        A creative space to bring out the best in our stylists
                    </h2>
                    <button @click="showInfo = true" class="button">Find out more</button>
                </div>
            </div>
            <!--Post Click-->
            <div v-bind:class="{ showInfo: showInfo }" v-show="showInfo" class="hero-body columns">
                <div class="section column is-6">
                    <h1 class="title">
                        The Salon
                    </h1>
                    <h2 class="subtitle">
                        A creative space to bring out the best in our stylists
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