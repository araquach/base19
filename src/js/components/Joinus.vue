<template>
    <section id="joinus" class="hero is-fullheight is-dark">
        <!--Pre Click-->
        <div v-show="!showInfo" class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Join Base </h1>
                <h2 class="subtitle">Could you be the next big thing in hairdressing</h2>
                <button @click="showInfo = true" class="button">Find out more</button>
            </div>
        </div>
        <!--Post Click-->
        <div v-bind:class="{ showInfo: showInfo }" v-show="showInfo" class="hero-body">
            <div class="section column is-6">
                <h1 class="title">Join Base</h1>
                <h2 class="subtitle">Could you be the next big thing in hairdressing</h2>
                <p>More info ajshdakjhdkja aksdjhdkjas akdsjhkjash</p>
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