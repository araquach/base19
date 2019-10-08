<template>
    <div>
        <!--Pre Click-->
        <section id="joinus" v-if="!showInfo" class="joinus hero is-fullheight is-dark">
            <div class="hero-body show columns">
                <div class="section column is-4">
                    <h1 class="title">Join Base </h1>
                    <h2 class="subtitle">Could you be the next big thing in hairdressing</h2>
                    <p class="is-size-6">If you're just starting out in hairdressing or want to build on your existing skills then Base Hair Academy could be for you!</p>
                    <button @click="showInfo = true" class="button">Find out more</button>
                </div>
            </div>
        </section>
        <!--Post Click-->
        <transition name="fade">
        <section id="joinus" v-if="showInfo" class="section joinus-info hero is-fullheight is-dark">
            <div class="columns">
                <div class="section column is-6">
                    <h1 class="title">Join Base</h1>
                    <h2 class="subtitle">Could you be the next big thing in hairdressing</h2>
                    <p>Are you looking to take up hairdressing as a career? <strong>Base Hair Academy</strong> could be the perfect environment for you!</p>
                    <p>Base Hairdressing is strongly affiliated with <strong>Jakata</strong> and <strong>Paul Kemp Hairdressing</strong> with the goal of training up the next generation of hairdressers to the highest possible standard!</p>
                    <p>We're a training environment with a focus on you! A salon where you can develop your skills to become a super stylist!</p>
                    <p class="is-size-5">Check out the benefits of being a part of Base&hellip;</p>
                    <ul class="box">
                        <li>Ongoing training and assessments working towards NVQ level 2 & 3</li>
                        <li>The highest quality training and development from experienced stylists</li>
                        <li>A relaxed, friendly working environment designed to unleash your creative talent</li>
                        <li>A solid career ladder with clear goals to strive for</li>
                    </ul>
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