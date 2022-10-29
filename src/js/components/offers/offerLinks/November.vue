<template>
  <router-link :to="{ name: 'general-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/november2.jpg" alt="November offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">25% off your first visit to Base Hairdressing!</h2>
          <p class="is-size-4">Never been to Base and thinking of giving us a go?</p>
          <p class="is-size-4">Take advantage of this amazing offer...</p>
          <p>Find out more here ></p>
          <small class="is-size-7">For New Clients to Base - not with any other offer<br>Skin test required 48hrs before any colour service<br>Offer ends 30/11/22</small>
        </section>
      </div>
    </div>
  </router-link>
</template>
<script>
import {mapState} from "vuex"
export default {
  computed: {
    ...mapState({
      endDate: state => state.base.endDate
    })
  }
}
</script>