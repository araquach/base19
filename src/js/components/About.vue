<template>
    <div>
        <!--Pre Click-->
        <section id="about" v-if="!showInfo" class="hero is-fullheight is-dark">
            <div class="hero-body show columns">
                <div class="section column is-5">
                    <h1 class="title">It's All about the Base</h1>
                    <h2 class="subtitle">An amazing creative space for upcoming hair stylists</h2>
                    <button @click="showInfo = true" class="button">Find out more</button>
                </div>
            </div>
        </section>
            <!--Post Click-->
        <transition name="fade">
        <section id="about" v-if="showInfo"  class="hero is-fullheight is-dark">
            <div class="hero-body columns showInfo">
                <div class="section column is-6">
                    <h1 class="title">It's All about the Base</h1>
                    <h2 class="subtitle">An amazing creative space for upcoming hair stylists</h2>
                    <p>Training and developing our team to the highest possible standard has always been a major priority for us. Through <strong>Jakata & Paul Kemp Hairdressing</strong> we've produced some incredible talent from scratch and helped existing stylists push their skills to the next level.</p>
                    <p><strong>Base Hairdressing</strong> was created to centralise our training and offer the best training experience for anyone who wants to embark on a career in hairdressing, along with refining the skills of existing stylists.</p>
                    <p>The Base Team comprises of <strong>Apprentices, Junior Stylists and Graduates</strong> all offering cutting edge services at a fraction of the cost! All services are fully supervised by Senior Stylists and all of our usual high quality products are used.</p>
                    <p class="is-size-5">If you're looking for  a new look (without having to break the bank) then book into Base for a free consultation to see what our team can do for you!</p>
                    <button @click="showInfo = false" class="button">Show less</button>
                </div>
                <div class="section column">
                    <div class="columns">
                        <div class="column">
                            <figure class="image">
                                <img src="/dist/img/about/base-1.jpg" alt="The salon pic 1">
                            </figure>
                            <figure class="image">
                                <img src="/dist/img/about/base-2.jpg" alt="The Salon pic 2">
                            </figure>
                        </div>
                        <div class="column">
                            <figure class="image">
                                <img src="/dist/img/about/base-3.jpg" alt="The salon pic 3">
                            </figure>
                            <figure class="image">
                                <img src="/dist/img/about/base-4.jpg" alt="The salon pic 4">
                            </figure>
                        </div>
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