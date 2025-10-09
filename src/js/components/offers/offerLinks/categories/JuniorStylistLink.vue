<template>
  <router-link :to="{ name: 'jnr-stylist-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/september25_square.png" alt="Jaz, Lily & Kam">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">25% off with our incredible Junior Stylists</h2>
          <p>If you're new to Base take advantage of this amazing offer with Lily, Kam & Jasmine</p>
          <p>A Colour & Cut from just £70 for new clients</p>
          <p class="is-size-4">Find out more here ></p>
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