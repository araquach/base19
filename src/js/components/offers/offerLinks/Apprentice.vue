<template>
  <router-link :to="{ name: 'apprentice-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/becca_eve.png" alt="Becca & Eve Apprentice Offers">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">25% off first visit to Becca & Eve</h2>
          <p class="is-size-4">Becca & Eve are an even more affordable option! Their work is extremely advanced for their level meaning you get an amazing look at a fraction of the price!</p>
          <p>A Colour & Cut from just £70</p>
          <p>Find out more here ></p>
          <small class="is-size-7">For New Clients - not with any other offer<br>Skin test required 48hrs before any colour service<br>Offer ends {{ endDate }}</small>
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