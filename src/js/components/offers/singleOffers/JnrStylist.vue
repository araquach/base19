<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-4-mobile has-text-white">Special offer with our Junior Stylists</h2>
          <p class="is-size-4">Book in for a free consultation with either of our junior stylists Jamie or Sarah and receive
            <strong>20% OFF</strong> your first visit.</p>
          <p class="is-size-5">With over two years in salon experience and our expert education team on hand to consult at all times you
            are guaranteed five star hair services at a fraction of the cost.</p>
          <figure class="image">
            <img src="/dist/img/offers/jamie_sarah.png" alt="Jamie & Sarah's Offer">
          </figure>
          <br>
          <p class="is-size-5">Book in for a free consultation with either of our junior stylists Jamie or Sarah and receive
            <strong>20% OFF</strong> your first visit.</p>
          <div class="buttons">
            <a href="https://phorest.com/book/salons/basehairacademy#/service-category?id=0P2QrXkTppoqXslH0K5ttQ" class="button">Book Your Consultation</a>
          </div>
          <div class="offer-team-links">
            <p class="is-size-5">Get inspired by Sarah's love for natural locks on Instagram <a href="https://www.instagram.com/breathof.freshhair/" class="has-text-primary"> @breatheof.freshhair</a></p>
            <p class="is-size-5">Check out Jamie's grid <a href="https://www.instagram.com/jamiebanninghair/" class="has-text-primary">@jamiebanninghair</a> for even more creativity!</p>
          </div>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - offer for new clients to Base Hairdressing)</p>
          <br>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="title is-4">There are currently no offers with our Junior Stylists</h1>
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