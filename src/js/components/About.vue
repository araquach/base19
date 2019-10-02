<template>
    <section id="about" class="hero is-fullheight is-dark">

        <!--Pre Click-->
        <div v-show="!showInfo" class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">It's All about the Base</h1>
                <h2 class="subtitle">An amazing creative space for upcoming hair stylists</h2>
                <button @click="showInfo = true" class="button">Find out more</button>
            </div>
        </div>

        <!--Post Click-->
        <div v-bind:class="{ showInfo: showInfo }" v-show="showInfo" class="hero-body columns">
            <div class="section column is-6">
                <h1 class="title">It's All about the Base</h1>
                <h2 class="subtitle">An amazing creative space for upcoming hair stylists</h2>
                <p>Training and developing our team to the highest possible standard has always been a major priority for us.
                    Through <strong>Jakata & Paul Kemp Hairdressing</strong> we've produced some incredible talent from scratch and helped existing stylists push their skills to the next level.</p>
                <p>We decided to centralise our training and put all of our apprentices and graduate stylists under one roof in our brand new Base Hair Academy!</p>
                <p>We gave our old Jakata premises a major facelift and created an amazing training environment and working space that both our staff and clients can appreciate</p>
                <p>All of our <strong>apprentices</strong> and <strong>graduate stylists</strong> are now located at Base where we can offer our full selection of hair services at a fraction of the cost.
                    All services are fully supervised by Senior Stylists and all our usual high quality products are used.</p>
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