<template>
  <router-link :to="{ name: 'apprentice-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/summer_app_square.png" alt="Summer offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">Revamp Your Hair This Summer!</h2>
          <p class="is-size-4">Get incredible value with our skilled Apprentices, Jaz, Lily & Kam.</p>
          <p class="is-size-5">25% Off for a limited time for new clients</p>
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