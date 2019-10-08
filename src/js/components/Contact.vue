<template>
    <div>
        <!--Pre Click-->
        <section id="contact" v-if="!showInfo" class="contact hero is-fullheight is-dark">
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
        <section id="contact" v-if="showInfo" class="section contact-info hero is-fullheight is-dark">
            <div class="columns">
                <div class="section column">
                    <h1 class="title">Contact Us</h1>
                    <h2 class="subtitle">Find out where we are and how to get in touch</h2>
                    <p>More info cnksjdbvbsdmnv ksjdfhkjhfkjhsd kfjsdhfkhskdfh fjhksdhkfs</p>
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