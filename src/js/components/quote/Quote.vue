<template>
  <div id="prices" class="price-calc section columns is-centered">
    <div class="section column is-8">
      <h1 class="title is-2">Your Selection</h1>
      <div class="columns is-mobile">
        <div class="column is-7">
          <p class="is-size-4">You've chosen the following services with {{ quote.stylist.first_name }} {{ quote.stylist.last_name }}</p>
<!--          <table class="table">-->
<!--            <tr v-if="selectedColour && selectedColour.price > 0">-->
<!--              <td>{{ selectedColour.service }}</td>-->
<!--              <td>{{ selectedColourPrice | toCurrency }}</td>-->
<!--            </tr>-->
<!--            <tr v-if="selectedColourAddOn && selectedColourAddOn.price > 0">-->
<!--              <td>{{ selectedColourAddOn.service }}</td>-->
<!--              <td>{{ selectedColourAddOnPrice | toCurrency }}</td>-->
<!--            </tr>-->
<!--            <tr v-if="selectedTreatment && selectedTreatment.price > 0">-->
<!--              <td>{{ selectedTreatment.service }}</td>-->
<!--              <td>{{ selectedTreatmentPrice | toCurrency }}</td>-->
<!--            </tr>-->
<!--            <tr v-if="selectedFinish && selectedFinish.price > 0">-->
<!--              <td>{{ selectedFinish.service }}</td>-->
<!--              <td>{{ selectedFinishPrice | toCurrency }}</td>-->
<!--            </tr>-->
<!--            <tr v-if="selectedFinishAddOn && selectedFinishAddOn.price > 0">-->
<!--              <td>{{ selectedFinishAddOn.service }}</td>-->
<!--              <td>{{ selectedFinishAddOnPrice | toCurrency }}</td>-->
<!--            </tr>-->
<!--            <tr v-if="selectedMensCut && selectedMensCut.price > 0">-->
<!--              <td>{{ selectedMensCut.service }}</td>-->
<!--              <td>{{ selectedMensCutPrice | toCurrency }}</td>-->
<!--            </tr>-->
<!--            <tr v-if="selectedMensColour && selectedMensColour.price > 0">-->
<!--              <td>{{ selectedMensColour.service }}</td>-->
<!--              <td>{{ selectedMensColourPrice | toCurrency }}</td>-->
<!--            </tr>-->
<!--          </table>-->

          <p class="is-size-4">The total estimated cost is: {{ quote.price | toCurrency }}</p>
        </div>
        <div class="column">
          <figure class="image">
            <img :src="quote.stylist.remote_image" :alt="quote.stylist.first_name + quote.stylist.last_name">
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
        .get('/api/get-quote-details/6')
        .then(r => r.data)
        .then(r => this.quote = r.quote)
  }
}
</script>