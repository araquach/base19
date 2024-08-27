<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 has-text-white">Revamp Your Hair This Summer!</h2>
          <p class="is-size-4">Get incredible value with our skilled Apprentices, <strong>Jaz, Lily & Kam</strong>.</p>
          <p>Book now for unbeatable low prices, with all work overseen by our expert stylists and education team. Quality is never compromised!</p>
          <br>
          <figure class="image">
            <img src="/dist/img/offers/summer_app_wide.png" alt="Summer Offer">
          </figure>
          <br>
          <p class="is-size-4">Available Thursdays and Fridays only - limited slots, so don't miss out!</p>
          <p class="is-size-4">Offer Code: APPRENTICE25</p>
          <p class="is-size-3">Base Hairdressing - offering exceptional service at training prices!</p>
          <br>
          <div class="offer-team-links">
            <router-link :to="{ name: 'bookings' }" class="button is-primary">Book a FREE consultation</router-link>
          </div>
          <br>
          <p class="is-size-4">Prefer to Book by Phone? Call Us on 01925 444449</p>
          <br>
          <p class="small is-size-7">25% off when you book with  Jaz, Lily or Kam. - Offer valid until {{ endDate }} - Cannot be used in conjunction with any other offer - Skin Test required 48 hrs before any colour service - offer exclusively for new clients - Quote APPRENTICE25 at the time of booking to secure this discount </p>
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