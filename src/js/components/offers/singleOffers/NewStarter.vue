<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-4-mobile has-text-white">Special offer with Jamie & Sarah</h2>
          <p class="is-size-5">Our most recent recruits are looking to take on new clients</p>
          <p class="is-size-5">If you're looking for an amazing style at a fraction of the cost, book in with one of these talented new starters</p>
          <br>
          <figure class="image">
            <img src="/dist/img/offers/jamie_sarah.png" alt="Jamie & Sarah's Offer">
          </figure>
          <br>
          <p class="is-size-5"><strong>Come in for a FREE consultation with one of them and if you like the ideas they up with then book in to get 25% off your first visit with them!</strong></p>
          <p><em>Please note: Jamie and Sarah are currently only carrying out basic cutting and colouring services. If
            you are looking for a more advanced stylist
            <router-link :to="{name: 'apprentice-offer'}">click here</router-link>
          </em></p>
          <p class="is-size-4"><strong>Call 01925 444449 to book</strong><br>
            or use our online booking (link at top of page)</p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - offer for new clients to Base Hairdressing)</p>
          <br>
          <div class="offer-team-links">
            <router-link :to="{ name: 'team-detail', params: { slug: 'jamie' } }" class="button is-primary">Find out more about Jamie</router-link>
            <router-link :to="{ name: 'team-detail', params: { slug: 'sarah' } }" class="button is-primary">Find out more about Sarah</router-link>
          </div>
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