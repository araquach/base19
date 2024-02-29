<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 has-text-white">Celebrate the start of Spring with a Fresh Look!</h2>
          <p class="is-size-3">We've Missed You and Can't Wait to Welcome You Back!</p>
          <p class="is-size-4">Bag yourself a FREE hair cut when you book in for a colour this March and April.</p>
          <br>
          <figure class="image">
            <img src="/dist/img/offers/spring_sms.png" alt="Spring Offer">
          </figure>
          <br>
          <p class="is-size-4">Book in for a FREE consultation with one of our Graduates, Juniors, Apprentices or New Starters to take advantage of our Spring offer.</p>
          <ul>
            <li>Graduate Stylist average cut & colour price £90</li>
            <li>Junior Stylist average cut & colour price £70</li>
            <li>Apprentice average cut & colour price £55</li>
            <li>New Starter average cut & colour price £35</li>
          </ul>
          <br>
          <div class="offer-team-links">
            <router-link :to="{ name: 'bookings' }" class="button is-primary">Book Your Welcome Back Consultation!</router-link>
          </div>
          <br>
          <p class="is-size-4">Prefer to Book by Phone? Call Us on 01925 444449</p>
          <br>
          <div class="box">
            <p class="is-size-4">Looking for Something Different? Our Senior Stylists at <strong>Jakata & Paul Kemp Hairdressing</strong> are Ready to Welcome You Too!</p>
            <div class="buttons">
              <a class="button is-primary" href="https://www.jakatasalon.co.uk/sms/spring">Jakata Offers</a>
              <a class="button is-primary" href="https://www.paulkemphairdressing.com/sms/spring">PK Offers</a>
            </div>
          </div>

          <p class="small is-size-7">FREE CUT when you book in for a colour in January or February with Katie/Sarah/Becky/Daisy/Jas/Lily/Kam (excludes education team) - Offer valid until
            {{ endDate }} - Cannot be used in conjunction with any other offer - Skin Test required 48 hrs before any colour service - Quote BASE SPRING OFFER at time of booking to secure this discount </p>
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