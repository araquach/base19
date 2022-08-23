<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-4-mobile has-text-white">Special offer with Layla</h2>
          <p class="is-size-5">Layla made the move over to Base from Jakata to take on the role of team leader and head up the training.</p>
          <p>She's eager to build up her own client base too - so if you haven't been to her before take advantage of this amazing offer!</p>
          <br>
          <figure class="image">
            <img src="/dist/img/offers/layla_offer.jpg" alt="Layla's Offer">
          </figure>
          <br>
          <p class="is-size-5"><strong>Come in for a FREE consultation with Layla and if you like the ideas she comes up with book in to get 20% off your first visit with her!</strong></p>
          <p class="is-size-4"><strong>Call 01925 444449 to book</strong><br>
            or use our online booking (link at top of page)</p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - offer for new clients to Base Hairdressing)</p>
          <br>
          <div class="offer-team-links">
            <router-link :to="{ name: 'team-detail', params: { slug: 'layla' } }" class="button is-primary">Find out more about Layla</router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="title is-4">There are currently no offers with Layla</h1>
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