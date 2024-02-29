<template>
  <router-link :to="{ name: 'spring-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/spring_square.png" alt="Spring offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">Spring Offer</h2>
          <p class="is-size-4">New clients get a FREE cut at Base Hairdressing!</p>
          <p class="is-size-5">Treat yourself to a new look this spring and take advantage of our exclusive new client offer.</p>
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