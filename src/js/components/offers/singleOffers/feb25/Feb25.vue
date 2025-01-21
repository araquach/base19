<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-4-mobile has-text-white mb-1">Revamp Your Hair with 25% OFF!</h2>
          <h2 class="title is-4">for New Clients to Base</h2>
          <p class="is-size-5">Get incredible value with our skilled apprentices. Book now for unbeatable low prices, and choose from a range of apprentice levels based on your desired style and budget.</p>
          <h3 class="title is-4 mb-3 mt-5">Average price for...</h3>
          <p class="is-size-5"><strong>Jaz, Lily & Kam: £70 (£53 inc discount)</strong></p>
          <p class="is-size-5"><strong>Becky & Daisy: £80 (£60 inc discount)</strong></p>
          <br>
          <figure class="image">
            <img src="/dist/img/offers/feb25_wide.png" alt="New Client Offers">
          </figure>
          <br>
          <p class="is-size-5">All work is overseen by our expert stylists and education team, ensuring quality is never compromised!</p>
          <p class="is-size-5"><strong>Come in for a FREE consultation with one of them  and if you like the ideas they up with then book in to get 25% off your first visit with them!</strong></p>
          <p class="is-size-4"><strong>Call 01925 444449 to book</strong><br>
            or use our online booking (link at top of page)</p>
          <div class="offer-team-links">
            <router-link :to="{ name: 'team' }" class="button is-primary">Check out the full team</router-link>
          </div>
          <br>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - offer for new clients to Base Hairdressing)</p>
          <p>Just mention the offer at the time of your visit</p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="title is-4">There are currently no offers with our Apprentices</h1>
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