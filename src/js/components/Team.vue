<template>
    <section id="team" class="hero is-fullheight is-dark">
        <div v-show="!showInfo" class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Meet the Base Team</h1>
                <h2 class="subtitle">from Junior Stylists through to experienced graduates</h2>
                <button @click="showInfo = true" class="button">Find out more</button>
            </div>
        </div>
        <!--Post Click-->
        <transition name="fade">
        <div v-bind:class="{ showInfo: showInfo }" v-show="showInfo" class="hero-body columns">
            <div class="section column is-6">
                <h1 class="title">Meet the Base Team</h1>
                <h2 class="subtitle">from Junior Stylists through to experienced graduates</h2>
                <p>More info kjsdhf sldjfhsk kdsjhfkjsd ksjdfhksdh</p>
                <button @click="showInfo = false" class="button">Show less</button>
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

<style>

</style>