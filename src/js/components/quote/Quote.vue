<template>
  <div id="prices" class="price-calc section columns is-centered">
    <div v-if="quote.salon" class="section column is-8">
      <img :src="quote.salon.image" :alt="quote.salon.name" width="200">
      <br><br>
      <h1 class="title is-4">Your Estimated Quote</h1>
      <div class="columns is-mobile">
        <div class="column is-7">
          <p class="is-size-4">Here are the services you have chosen with <strong>{{ quote.stylist.name }}</strong></p>
          <table class="table">
            <tr v-for="item in quote.services">
              <td>{{ item.service }}</td>
              <td>{{ item.price | toCurrency }}</td>
            </tr>
          </table>

          <p class="is-size-4">The total estimated cost of your services: {{ quote.total | toCurrency }}</p>
        </div>
        <div class="column">
          <figure class="image">
            <img :src="quote.stylist.image" :alt="quote.stylist.name">
          </figure>
        </div>
      </div>
      <p class="is-size-7">Please note: a full consultation is required to determine the exact price - a skin test is required 48hrs before any colour service</p>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: {}
    }
  },

  mounted() {
    axios
        .get(`/api/get-quote-details/${this.$route.params.link}`)
        .then(r => r.data.quote)
        .then(r => this.quote = r)
  }
}
</script>