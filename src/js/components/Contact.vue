<template>
    <div>
        <!--Pre Click-->
        <section id="contact" v-if="!showInfo" class="hero is-fullheight is-dark">
            <div class="hero-body show columns">
                <div class="section column is-5">
                    <h1 class="title">Contact Us</h1>
                    <h2 class="subtitle">Find out where we are and how to get in touch</h2>
                    <button @click="showInfo = true" class="button">Info here</button>
                </div>
            </div>
        </section>
        <!--Post Click-->
        <transition name="fade">
        <section id="contact" v-if="showInfo" class="hero is-fullheight is-dark">
            <div class="hero-body columns showInfo">
                <div class="section column is-6">
                    <h1 class="title">Contact Us</h1>
                    <h2 class="subtitle">Find out where we are and how to get in touch</h2>
                    <p>More info cnksjdbvbsdmnv ksjdfhkjhfkjhsd kfjsdhfkhskdfh fjhksdhkfs</p>
                    <button @click="showInfo = false" class="button">Show Less</button>
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