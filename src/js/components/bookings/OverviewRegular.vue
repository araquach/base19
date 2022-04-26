<template>
  <div>
    <div v-if="!view">
      <h1 class="title is-4">Information for existing clients</h1>
      <p class="is-size-4">There are some recent changes to our online booking that we need to make you aware of before you proceed...</p>
      <p>Are you wanting to book a colour service or just cutting/styling?</p>
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