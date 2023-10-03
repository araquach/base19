<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-4-mobile has-text-white">Gifting you Autumn hair with 25% OFF</h2>
          <p class="is-size-5">Base Hairdressing is your partner in making a seamless shift into winter, by presenting all new clients with an enticing 25% discount on their first visit in October or November for a truly splendid transformation!</p>
          <br>
          <figure class="image">
            <img src="/dist/img/offers/autumn_wide.png" alt="Autumn Offer">
          </figure>
          <br>
          <div class="offer-team-links">
            <router-link :to="{ name: 'team' }" class="button is-primary">Browse our Stylists</router-link>
            <router-link :to="{ name: 'bookings' }" class="button is-primary">Book a FREE consultation</router-link>
          </div>
          <br>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - offer exclusively for clients new to Base Hairdressing - Quote offer code AUTUMN OFFER at time of booking to secure this discount</p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="title is-4">There are currently no offers.</h1>
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