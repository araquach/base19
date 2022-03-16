<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-4-mobile has-text-white">Special offer with Beth & Sophie</h2>
          <p class="is-size-5">Both of these exceptional graduate stylists are looking to take on more new clients.</p>
          <p>For a short time only take advantage of this incredible offer with either of them!</p>
          <figure class="image">
            <img src="/dist/img/offer/individual/beth_sophie.png" alt="Beth & Sophie's Offer">
          </figure>
          <p class="is-size-5"><strong>Come in for a FREE consultation with one of them  and if you like the ideas they up with then book in to get 25% off your first visit with them!</strong></p>
          <p class="is-size-4"><strong>Call 01925 444449 to book</strong><br>
            or use our online booking (link at top of page)</p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - offer for new clients to Base Hairdressing)</p>
          <br>
          <div class="offer-team-links">
            <router-link :to="{ name: 'team-detail', params: { slug: 'beth' } }" class="button is-primary">Find out more about Beth</router-link>
            <router-link :to="{ name: 'team-detail', params: { slug: 'sophie' } }" class="button is-primary">Find out more about Sophie</router-link>
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