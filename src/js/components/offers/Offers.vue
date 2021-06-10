<template>
    <section class="offers hero is-fullheight is-dark">
        <div class="hero-body show columns">
            <div class="section column is-6">
                <h1 class="title">Special Offers</h1>
                <h2 class="subtitle">Take advantage of these great offers throughout {{thisMonth}}</h2>
                <router-link :to="{ name: 'offers' }" class="button">More info</router-link>
            </div>
        </div>
    </section>
</template>
<script>
import {format} from "date-fns"
export default {
  computed: {
    thisMonth() {
      const date = Date.now()
      return format(date, 'MMMM')
    }
  }
}
</script>
