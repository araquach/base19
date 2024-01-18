<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-4-mobile has-text-white">New Year Offer!</h2>
          <p class="is-size-3">We've missed you!</p>
          <p class="is-size-4">Bag yourself a FREE hair cut when you book in for a colour this January and February.</p>
          <br>
          <figure class="image">
            <img src="/dist/img/offers/new_year_sms_24.png" alt="New Year Offer">
          </figure>
          <br>
          <p class="is-size-4">Book in for a FREE consultation with one of our Graduates, Juniors, Apprentices or New Starters to take advantage of our New Year offer.</p>
          <ul>
            <li>Graduate Stylist average cut & colour price £80</li>
            <li>Junior Stylist average cut & colour price £60</li>
            <li>Apprentice average cut & colour price £45</li>
            <li>New Starter average cut & colour price £30</li>
          </ul>
          <br>
          <div class="offer-team-links">
            <router-link :to="{ name: 'bookings' }" class="button is-primary">Book a FREE consultation</router-link>
          </div>
          <br>
          <p class="is-size-4">Or call 01925 444449 to book</p>
          <br>
          <div class="box">
            <p class="is-size-4">If you're looking for a more senior stylist then check out our offers at our other salons -
              <strong>Jakata & Paul Kemp Hairdressing</strong></p>
            <div class="buttons">
              <a class="button is-primary" href="https://www.jakatasalon.co.uk/sms/newyear">Jakata Offers</a>
              <a class="button is-primary" href="https://www.paulkemphairdressing.com/sms/newyear">PK Offers</a>
            </div>
          </div>

          <p class="small is-size-7">FREE CUT when you book in for a colour in January or February with Katie/Sarah/Becky/Daisy/Jas/Lily/Kam (excludes education team) - Offer valid until 29.02.2024 - Cannot be used in conjunction with any other offer - Skin Test required 48 hrs before any colour service - Quote BASE NEW YEAR at time of booking to secure this discount </p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="title is-4">There are currently no offers.</h1>
      <p>Check back soon!</p>
    </div>
  </section>
</template>
<script>
import {mapState} from "vuex"
export default {
  computed: {
    ...mapState({
      hideOffers: state => state.base.hideOffers,
      endDate: state => state.base.endDate
    })
  }
}
</script>