<template>
    <section class="section offers-info hero is-fullheight is-dark">
      <div v-if="!hideOffers">
        <div class="columns is-vcentered">
          <div class="column is-8-desktop">
            <h1 class="title">Special Offers</h1>
            <h2 class="subtitle">For a limited time only</h2>
            <p class="is-size-4">Ruby, Sophie & Beth are all qualified hairdressers now, each of them producing outstanding work.</p>
            <p class="is-size-4">Becca & Eve are an even more affordable option! Their work is extremely advanced for their level meaning you get an amazing look at a fraction of the price!</p>
            <p class="is-size-5">If you're looking for a great new look then book in with one of them for a consultation to see what they can do for you!</p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="/dist/img/offers/ruby_sophie_beth.png" alt="Graduate Stylist Offer">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <h1 class="subtitle has-text-white">Special Offer with Ruby, Sophie & Beth for new clients</h1>
                    <p class="has-text-white is-size-3">25% off your first visit</p>
                  </div>
                </div>
                <div class="content is-size-6-mobile has-text-white">
                  <p class="is-size-7">Skin test required 48 hours before any colour service. Offer Ends {{ endDate }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="/dist/img/offers/becca_eve.png" alt="Junior Stylist Offer">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <h1 class="subtitle has-text-white">Special Offer with Becca & Eve for new clients</h1>
                    <p class="has-text-white is-size-3">25% off your first visit</p>
                  </div>
                </div>
                <div class="content is-size-6-mobile has-text-white">
                  <p class="is-size-7">Skin test required 48 hours before any colour service. Offer Ends {{ endDate }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="is-size-4">Call <strong>01925 444449</strong> to book a consultation with your chosen stylist</p>
          <router-link :to="{ name: 'team' }" class="is-size-4 has-text-warning">Find out more about the team members here ></router-link>
          <br><br>
        </div>
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <a @click="$router.go(-1)" class="button">back</a>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h1 class="title is-4">Check back soon for special offers!</h1>
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