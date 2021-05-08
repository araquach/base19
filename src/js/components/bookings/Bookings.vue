<template>
  <section class="section bookings-info hero is-fullheight is-dark">
    <div class="column is-6">
      <h1 class="title">Register for your appointment</h1>
      <p class="is-size-4">Our phone lines, online booking and App are now back to normal</p>
      <p class="is-size-5">Please call 01925 444449 or use the 'Book Now' button above to make an appointment</p>
      <p class="is-size-5">See you soon!</p>
    </div>
    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <a @click="$router.go(-1)" class="button">Back</a>
        </div>
      </div>
    </div>
  </section>
</template>
