<template>
  <router-link :to="{ name: 'jnr-stylist-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/junior_square_2.png" alt="Autumn offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">Elevate Your Style This Autumn!</h2>
          <p class="is-size-4">Discover amazing value with our talented Junior Stylists, Becky and Daisy.</p>
          <p class="is-size-5">Enjoy 25% off your appointment as a new client</p>
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