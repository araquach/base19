<template>
  <div>
    <div v-if="!view">
      <h1 class="title is-4">Information for existing clients</h1>
      <p class="is-size-4">We've recently revamped our online booking system to align with our broad selection of services.</p>
      <p class="is-size-5">If you have any issues selecting the right service please call the salon to get booked in and ask your stylist to show you how to book online for future visits.</p>
      <p class="is-size-4">Are you wanting to book a colour service or just cutting/styling?</p>
      <button @click="view = 'colour'" class="button">Colour Services</button>
      <button @click="view = 'cutStyle'" class="button">Cutting & Styling only</button>
    </div>
    <RegularColour v-if="view === 'colour'"/>
    <RegularCutStyle v-if="view === 'cutStyle'"/>
  </div>
</template>
<script>
import RegularColour from "./RegularColour"
import RegularCutStyle from "./RegularCutStyle"

export default {
  components: {RegularCutStyle, RegularColour},

  data() {
    return {
      view: null
    }
  }
}
</script>