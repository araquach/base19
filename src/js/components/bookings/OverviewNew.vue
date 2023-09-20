<template>
  <div>
    <div v-if="!view">
      <h1 class="title is-4">New Client Info</h1>
      <p class="is-size-4">Thanks for choosing to book an appointment at Base Hairdressing. We know you'll love what we have to offer and can't wait to introduce you to the team!</p>
      <p>Before we take you to our online booking page we want to let you know about a few things...</p>
      <p>If you're looking to price up our services it's best to use our quote generator first to help you determine the best stylist for your needs then come back to make your booking.</p>
      <router-link :to="{ name: 'prices' }" class="has-text-warning">Click her to use our Quote Generator</router-link>
      <br><br>
      <p>Are you wanting to book a colour service or just cutting/styling?</p>
      <button @click="view = 'colour'" class="button">Colour Services</button>
      <button @click="view = 'cutStyle'" class="button">Cutting & Styling only</button>
    </div>
    <NewCutStyle v-if="view === 'cutStyle'"/>
    <NewColour v-if="view === 'colour'" />
  </div>
</template>
<script>
import NewColour from "./NewColour"
import NewCutStyle from "./NewCutStyle"
export default {
  components: {NewColour, NewCutStyle},

  data() {
    return {
      view: null
    }
  }
}
</script>