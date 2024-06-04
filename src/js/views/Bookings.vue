<template>
  <section class="section corona-info hero is-fullheight is-dark">
    <div class="columns">
      <div class="section column is-6">
        <h1 class="title is-3">Welcome to our online booking system</h1>
        <div v-if="!client">
          <p class="is-size-4">Are you a new client to the salon or an existing one?</p>
          <button @click="client = 'new'" class="button">New Client</button>
          <button @click="client = 'existing'" class="button">Existing Client</button>
        </div>
        <OverviewRegular v-if="client === 'existing'"/>
        <OverviewNew v-if="client === 'new'"/>
      </div>
    </div>
  </section>
</template>

<script>
import OverviewNew from "../components/bookings/OverviewNew"
import OverviewRegular from "../components/bookings/OverviewRegular"

export default {
  components: {OverviewNew, OverviewRegular},

  data() {
    return {
      client: null
    }
  }
}
</script>