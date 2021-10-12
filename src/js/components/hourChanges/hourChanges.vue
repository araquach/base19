<template>
  <section class="section hour-changes hero is-fullheight is-dark">
    <div class="columns is-vcentered">
      <div class="column is-8-desktop">
        <h1 class="title">{{ name }}'s Hours are changing</h1>
        <p class="is-size-4">As a regular client of {{ name }} we wanted to let you know that his hairdressing hours are changing.</p>
        <p>With the increased workload from training the apprentices and running the 3 salons he is condensing his hairdressing time into 2 days - taking effect very soon!</p>
        <p><strong>His new hours will be:</strong></p>
        <p class="is-size-4">
          Thursday {{ hours }} to 8pm<br>
          Saturday 9am to 4.30pm
        </p>
        <p><em>He will no longer be doing any hairdressing on the other days.</em></p>
        <p>We understand that Thursday or Saturday may not be a convenient day for you, so don't forget we have a whole host of amazing stylists across our 3 sites who are available on those other days if that suits you better.
          {{ name }} would be happy to recommend one of them for you or you could check out:
          <a href="https://www.jakatasalon.co.uk/team" class="has-text-primary">www.jakatasalon.co.uk/team</a> or <a href="https://www.paulkemphairdressing.com/team" class="has-text-primary">www.paulkemphairdressing.com/team</a></p>
        <p>You could even try one of our amazing graduates at <a href="https://www.basehairdressing.com/team" class="has-text-primary">www.basehairdressing.com/team</a></p>
        <p>If you are already booked in for your next appointment - don't worry, it will remain the same and Jimmy will discuss the options for your following booking</p>
        <p>If you have any questions please call 01925 444449</p>
        <p class="is-size-3"><em>We look forward to seeing you in the salon soon!</em></p>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    computed: {
      name() {
        const lower = this.$route.params.name
        return  lower.charAt(0).toUpperCase() + lower.slice(1)
      },

      hours() {
        if (this.$route.params.name === "adam") {
          return "2pm"
        } else {
          return "4pm"
        }
      }
    }
  }
</script>