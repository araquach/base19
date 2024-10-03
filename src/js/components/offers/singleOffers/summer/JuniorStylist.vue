<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 has-text-white">Elevate Your Style This Autumn!</h2>
          <p class="is-size-4">Discover amazing value with our talented Junior Stylists,<strong> Becky and Daisy</strong>.</p>
          <p class="is-size-5">Book now and enjoy 25% off your appointment, quality hairdressing at a price you'll love.</p>
          <p class="is-size-5"><em>Limited slots available, so don't miss out!</em></p>
          <br>
          <figure class="image">
            <img src="/dist/img/offers/junior_wide_2.png" alt="Autumn Offer">
          </figure>
          <br>
          <p class="is-size-4">Top notch service without the premium price tag. Full availability Tuesday through to Saturday.</p>
          <p class="is-size-5">Book in for a FREE consultation with Becky or Daisy to take advantage of our Special Offer.</p>
          <p class="is-size-4">Offer Code: JUNIOR25</p>
          <br>
          <div class="offer-team-links">
            <router-link :to="{ name: 'bookings' }" class="button is-primary">Book a FREE consultation</router-link>
          </div>
          <br>
          <p class="is-size-4">Prefer to Book by Phone? Call Us on 01925 444449</p>
          <br>
          <p class="small is-size-7">25% off when you book with Becky or Daisy - Offer valid until {{ endDate }} - Cannot be used in conjunction with any other offer - Skin Test required 48 hrs before any colour service - offer exclusively for new clients - Quote JUNIOR25 at the time of booking to secure this discount</p>
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