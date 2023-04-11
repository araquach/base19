<template>
  <router-link :to="{ name: 'katie-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/katie_square.png" alt="Katie's offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">New Stylist Offer</h2>
          <p class="is-size-4">We're offering <strong>30% OFF</strong> to introduce our new graduate stylist Katie!</p>
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