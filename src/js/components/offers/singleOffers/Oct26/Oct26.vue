<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-3-mobile has-text-white mb-3">New Client Offer!</h2>
          <p class="is-size-3 mb-3">Ready for a fresh new Autumn look?</p>
          <p class="is-size-4 mb-4">Enjoy <strong>25% OFF</strong> your first visit at Base Hairdressing.</p>
          <p>Our team deliver carefully executed salon services within our training academy environment. Every service is overseen by experienced educators to ensure high standards, attention to detail and a supportive salon experience.</p>
          <br>
          <figure class="image">
            <img src="/dist/img/offers/oct26.jpg" alt="25% OFF" class="mb-4">
          </figure>
          <h2 class="title is-4 mt-5 mb-3">Why book with us?</h2>
          <ul class="mb-4">
            <li>Complimentary in-depth consultation</li>
            <li>Quality hairdressing at exceptional value</li>
            <li>All services delivered under expert educator supervision</li>
            <li>Junior, Apprentice and New Starter options to suit every budget</li>
          </ul>
          <p class="is-size-5"><strong>Book a FREE consultation with any of our amazing team to experience professional results at a fraction of the cost!</strong></p>
          <p class="is-size-5">Every service is fully supported by our experienced educators, so you’re always in safe hands.</p>
          <p>Average Colour & Cut price for Brooke, Maisie & Molly: £60 (including discount)</p>
          <p class="mb-5">Average Colour & Cut price for Liv, Bonnie & Emily: £30 (including discount)</p>
          <div class="buttons">
            <router-link :to="{ name: 'team' }" class="button is-primary">Check out the full team</router-link>
            <a href="https://www.phorest.com/salon/basehairacademy/book/service-selection?showSpecialOffers=false" class="button is-primary">Book a Consultation</a>
          </div>
          <p class="is-size-4"><strong>Prefer to Book by Phone? Call Us on 01925 444449</strong></p>
          <br>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - offer for new clients to Base Hairdressing)</p>
          <p>Just mention the offer at the time of your visit</p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="title is-4">There are currently no offers with our Apprentices</h1>
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