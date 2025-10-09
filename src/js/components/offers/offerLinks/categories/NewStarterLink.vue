<template>
  <router-link :to="{ name: 'new-starter-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/jamie_sarah.png" alt="Jamie & Sarah's Special Offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">25% off with Bonnie, Emily and Liv</h2>
          <p class="is-size-4">All of these upcoming stylists are looking to build their skills</p>
          <p>A Colour & Cut from just £30</p>
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
      endDate: state => state.base.endDate
    })
  }
}
</script>