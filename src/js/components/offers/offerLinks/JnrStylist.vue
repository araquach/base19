<template>
  <router-link :to="{ name: 'jnr-stylist-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/jamie_sarah_square.png" alt="Jamie & Sarah">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">20% off with our Junior Stylists</h2>
          <p>If you're new to Base take advantage of this amazing offer with Jamie & Sarah</p>
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