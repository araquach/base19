<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-3-mobile has-text-white mb-4">New Client Offer!</h2>
          <p class="is-size-4 mb-6">Support Jaz, Lily and Kam as they go full time with our exclusive New Client 25% OFF offer.</p>
          <!-- Original image (hidden on mobile) -->
          <figure class="image is-hidden-mobile">
            <img src="/dist/img/offers/september25.png" alt="Jaz, Lily & Kam" class="mb-6">
          </figure>
          <!-- Square image (hidden on tablet and up) -->
          <figure class="image is-square is-hidden-tablet">
            <img src="/dist/img/offers/september25_square.png" alt="Jaz, Lily & Kam" class="mb-6">
          </figure>
          <br>
          <p class="is-size-5"><strong>Book a FREE consultation with Jaz, Lily or Kam and enjoy professional results at a fraction of the cost.</strong></p>
          <p class="is-size-5">Our team are now full-time in the salon and progressing towards the end of their apprenticeship journeys, every service is fully supported by our experienced educators, so you’re always in safe hands.</p>
          <p>Average Colour & Cut price for Jaz, Lily & Kam: £80 (including discount)</p>
          <div class="buttons">
            <router-link :to="{ name: 'team' }" class="button is-primary">Check out the full team</router-link>
            <a href="https://www.phorest.com/salon/basehairacademy/book/service-selection?showSpecialOffers=false" class="button is-primary">Book a Consultation</a>
          </div>
          <p class="is-size-4"><strong>Prefer to Book by Phone? Call Us on 01925 444449</strong></p>
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