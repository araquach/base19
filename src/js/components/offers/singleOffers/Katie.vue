<template>
    <section class="section offers-info hero is-fullheight is-dark">
        <div v-if="!hideOffers">
            <div class="section columns">
                <div class="column is-9-desktop">
                    <h2 class="title is-2 is-size-4-mobile has-text-white">Introducing our new Graduate Stylist
                        Katie</h2>
                    <p class="is-size-5">If you're looking for a hair stylist that will listen to your needs intently,
                        uplift your mood and give you
                        great hair in the salon and at home then our newest addition to the team <strong>Katie is the
                            stylist for
                            you!</strong></p>
                    <br>
                    <figure class="image">
                        <img src="/dist/img/offers/katie.png" alt="Katie's Offer">
                    </figure>
                    <br>
                    <p class="is-size-5">Book in for a free consultation with Katie and receive <strong>30% OFF</strong>
                        your first visit:</p>
                    <p class="is-size-5">Quote <strong>KATIE30</strong> during your visit</p>
                    <div class="buttons">
                        <a href="https://phorest.com/book/salons/basehairacademy#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
                           class="button">Book Your Consultation</a>
                    </div>
                    <p class="is-size-5">To find out more about Katie check out our <a class="has-text-primary"
                                                                                       href="https://www.basehairdressing.com/blog/introducing-katie">latest
                        blog post</a></p>
                    <p class="is-size-5">You can follow Katie on Instagram here <a class="has-text-primary"
                                                                                   href="https://www.instagram.com/beautybykatelouise/"
                                                                                   target="_blank">@beautybykatelouise</a>
                    </p>
                    <br>
                    <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour
                        service)</p>
                </div>
            </div>
        </div>
        <div v-else>
            <h1 class="title is-4">There are currently no offers with Katie</h1>
            <p>Check back soon!</p>
        </div>
    </section>
</template>
<script>
import {mapState} from "vuex"

export default {
    computed: {
        ...mapState({
            hideOffers: state => state.base.hideOffers,
            endDate: state => state.base.endDate
        })
    }
}
</script>