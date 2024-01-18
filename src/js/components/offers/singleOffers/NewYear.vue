<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 has-text-white">New Year Offer!</h2>
          <p class="is-size-4">Bag yourself a FREE hair cut when you book in as a new client for a colour this January and February.</p>
          <br>
          <figure class="image">
            <img src="/dist/img/offers/new_year_offer_24.png" alt="New Year Offer">
          </figure>
          <br>
          <p class="is-size-4">Book in for a FREE consultation with one of our Graduates, Juniors, Apprentices or New Starters to take advantage of our New Year offer.</p>
          <ul>
            <li>Graduate Stylist average cut & colour price £80</li>
            <li>Junior Stylist average cut & colour price £60</li>
            <li>Apprentice average cut & colour price £45</li>
            <li>New Starter average cut & colour price £30</li>
          </ul>
          <br>
          <div class="offer-team-links">
            <router-link :to="{ name: 'bookings' }" class="button is-primary">Book a FREE consultation</router-link>
          </div>
          <br>
          <p class="small is-size-7">FREE CUT when you book in as a new client for a colour in January or February with Katie/Sarah/Jamie/Becky/Daisy/Jas/Lily/Kam (excludes education team) - Offer valid until 29.02.2024 - Cannot be used in conjunction with any other offer - Skin Test required 48 hrs before any colour service - offer exclusively for clients new to Base Hairdressing - Quote BASE NEW YEAR at time of booking to secure this discount </p>
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