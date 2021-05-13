<template>
  <div id="prices" class="price-calc section columns is-centered">
    <div v-if="info.quote" class="section column is-8">
      <img src="/dist/img/logos/base.png" alt="Base Hairdressing" width="200">
      <br><br>
      <h1 class="title is-3">Estimated Quote for {{ info.name }}</h1>
      <div class="columns is-mobile">
        <div class="column is-7">
          <p class="is-size-4">Here are the services you have chosen with <strong>{{ info.quote.stylist.name }}</strong></p>
          <br>
          <table class="table">
            <tr v-for="item in info.quote.services">
              <td>{{ item.service }}</td>
              <td>{{ item.price | toCurrency }}</td>
            </tr>
          </table>
        </div>
        <div class="column">
          <figure class="image">
            <img :src="info.quote.stylist.image" :alt="info.quote.stylist.name">
          </figure>
        </div>
      </div>
      <p class="is-size-4">The total estimated cost of your services: {{ info.quote.total | toCurrency }}</p>
      <br>
      <div v-if="!info.quote.regular" class="box">
        <h2 class="title is-4">Special Offer</h2>
        <p>As it's your first time to us we're offering you</p>
        <p class="is-size-2 is-marginless has-text-warning">20% off</p>
        <p class="is-size-5 has-text-warning">your first visit!</p>
        <p class="is-size-4">Bringing the cost of your services to just {{ info.quote.total * .8 | toCurrency}}</p>
        <p class="is-size-3">Offer Code: QG20</p>
        <p>Offer Expires: {{ expireDate }}</p>
      </div>
      <p>Book in far a FREE consultation with {{ info.quote.stylist.name }} and show her this message.</p>
      <p class="is-size-7">Please note: a full consultation is required to determine the exact price - a skin test is required 48hrs before any colour service</p>
    </div>
  </div>
</template>

<script>
import {format, addWeeks} from "date-fns"
export default {
  data() {
    return {
      info: {}
    }
  },

  computed: {
    expireDate() {
      const exp = addWeeks(new Date(this.info.created_at), 4)

      return  format(exp, 'do MMMM yyyy')
    }
  },

  mounted() {
    axios
        .get(`/api/get-quote-details/${this.$route.params.link}`)
        .then(r => r.data)
        .then(r => this.info = r)
  }
}
</script>