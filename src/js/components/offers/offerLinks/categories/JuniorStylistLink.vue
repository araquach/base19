<template>
  <router-link :to="{ name: 'jnr-stylist-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/march26_js_square.jpg" alt="Jaz, Lily & Kam">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">A Colour & Cut Package for just £70</h2>
          <p>With our incredible Junior Stylists</p>
          <p>If you're new to Base take advantage of this amazing offer with Lily & Jasmine</p>
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