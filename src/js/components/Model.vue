<template>
    <div>
        <!--Pre Click-->
        <section id="models" v-if="!showInfo" class="models hero is-fullheight is-dark">
            <div class="hero-body show columns">
                <div class="section column is-5">
                    <h1 class="title">Sign Up to be a model</h1>
                    <h2 class="subtitle">Get your hair done for practically FREE on one of our training days</h2>
                    <button @click="showInfo = true" class="button">More info</button>
                </div>
            </div>
        </section>
            <!--Post Click-->
        <transition name="fade">
        <section id="models" v-show="showInfo" class="section models-info hero is-fullheight is-dark">
            <div class="columns">
                <div class="section column">
                    <h1 class="title">Sign Up to be a model</h1>
                    <h2 class="subtitle">Get your hair done for practically FREE on one of our training days</h2>
                </div>
            </div>
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <button @click="showInfo = false" class="button">Show Less</button>
                    </div>
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