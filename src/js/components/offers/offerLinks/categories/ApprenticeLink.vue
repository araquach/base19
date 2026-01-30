<template>
  <router-link :to="{ name: 'apprentice-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/march26_apprentice_square.jpg" alt="Brooke, Maisie & Molly">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">Ready for a fresh new look?</h2>
          <p class="is-size-4">Special offer with Brooke, Molly and Maisie</p>
          <p>A Colour & Cut package for just £50 for new clients</p>
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