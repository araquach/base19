<template>
    <section id="contact" class="hero is-fullheight is-dark">
        <!--Pre Click-->
        <div v-show="!showInfo" class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Contact Us</h1>
                <h2 class="subtitle">Large subtitle</h2>
                <button @click="showInfo = true" class="button">More info</button>
            </div>
        </div>

        <!--Post Click-->
        <transition name="fade">
        <div v-bind:class="{ showInfo: showInfo }" v-show="showInfo" class="hero-body columns">
            <div class="section column is-6">
                <h1 class="title">Contact Us</h1>
                <h2 class="subtitle">Large subtitle</h2>
                <p>More info cnksjdbvbsdmnv ksjdfhkjhfkjhsd kfjsdhfkhskdfh fjhksdhkfs</p>
                <button @click="showInfo = false" class="button">Show Less</button>
            </div>
        </div>
        </transition>
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