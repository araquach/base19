<template>
  <router-link :to="{ name: 'autumn-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/autumn.png" alt="Autumn offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">25% OFF Autumn Appointments at Base Hairdressing</h2>
          <p class="is-size-4">Helping <strong>new clients</strong> transition seamlessly into the winter months....</p>
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