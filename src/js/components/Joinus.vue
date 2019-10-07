<template>
    <div>
        <!--Pre Click-->
        <section id="joinus" v-if="!showInfo" class="hero is-fullheight is-dark">
            <div class="hero-body show columns">
                <div class="section column is-5">
                    <h1 class="title">Join Base </h1>
                    <h2 class="subtitle">Could you be the next big thing in hairdressing</h2>
                    <button @click="showInfo = true" class="button">Find out more</button>
                </div>
            </div>
        </section>
        <!--Post Click-->
        <transition name="fade">
        <section id="joinus" v-if="showInfo" class="hero is-fullheight is-dark">
            <div class="hero-body showInfo">
                <div class="section column is-6">
                    <h1 class="title">Join Base</h1>
                    <h2 class="subtitle">Could you be the next big thing in hairdressing</h2>
                    <p>More info ajshdakjhdkja aksdjhdkjas akdsjhkjash</p>
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