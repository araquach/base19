<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-4-mobile has-text-white">Special offer for new clients</h2>
          <p class="is-size-5"></p>
          <br>
          <figure class="image">
            <img src="/dist/img/offers/november.jpg" alt="November Offer">
          </figure>
          <br>
          <p class="is-size-5"><strong>Come in for a FREE consultation with any of our team and if you like the ideas they come up with book in to get 25% off your first visit with them!</strong></p>
          <p class="is-size-4"><strong>Call 01925 444449 to book</strong><br>
            or use our online booking (link at top of page)</p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends 30/11/22 - Skin Test required 48 hrs before any colour service - offer for new clients to Base Hairdressing)</p>
          <br>
          <div class="offer-team-links">
            <router-link :to="{ name: 'prices' }" class="button is-primary">Get a quote here</router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="title is-4">There are currently no offers</h1>
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