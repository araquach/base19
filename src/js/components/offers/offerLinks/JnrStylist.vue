<template>
  <router-link :to="{ name: 'apprentice-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/individual/abbi.jpg" alt="Abbi Green">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">25% off first visit to Becca & Eve</h2>
          <p class="is-size-4">These fast progressing hairdressers are running a special offer for a limited time</p>
          <p>A Colour & Cut from just £60</p>
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