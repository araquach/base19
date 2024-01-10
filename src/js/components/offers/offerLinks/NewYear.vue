<template>
  <router-link :to="{ name: 'new-year-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/new_year_offer_24_square.png" alt="New Year offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">New Year Offer</h2>
          <p class="is-size-4">New clients get a FREE cut at Base Hairdressing!</p>
          <p class="is-size-5">Treat yourself to a new look this new year and take advantage of our exclusive new client offer.</p>
          <p class="is-size-4">Find out more ></p>
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