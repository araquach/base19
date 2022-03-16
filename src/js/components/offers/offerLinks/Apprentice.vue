<template>
  <router-link :to="{ name: 'apprentice-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offer/individual/abbi.jpg" alt="Abbi Green">
        </div>
        <section class="column is-8">
          <h2 class="title is-2 has-text-white">20% off first visit to Sophie & Beth</h2>
          <p class="is-size-4">Our two talented Graduate stylists have this special offer for a limited time only</p>
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
      endDate: state => state.jakata.endDate
    })
  }
}
</script>