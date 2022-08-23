<template>
  <router-link :to="{ name: 'layla-offer' }">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img src="/dist/img/offers/layla_offer.jpg" alt="Layla's offer">
        </div>
        <section class="column is-8">
          <h2 class="title is-3 has-text-white">20% off first visit to Layla</h2>
          <p class="is-size-4">Layla made the move over to Base from Jakata to take on the role of team leader and head up the training.</p>
          <p class="is-size-4">She's eager to build up her own client base too - so if you haven't been to her before take advantage of this amazing offer!</p>
          <p>Find out more here ></p>
          <small class="is-size-7">For New Clients to Layla - not with any other offer<br>Skin test required 48hrs before any colour service<br>Offer ends {{ endDate }}</small>
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