<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-4-mobile has-text-white">Ready for a fresh new look?</h2>
          <p class="is-size-5">Take advantage of our exclusive 25% OFF new client offer with Brooke, Molly or Maisie before their next promotion!</p>
          <br>
          <!-- Original image (hidden on mobile) -->
          <figure class="image is-hidden-mobile">
            <img src="/dist/img/offers/brooke_maisie_molly_wide.png" alt="Brooke, Mollie & Maisie " class="mb-6">
          </figure>
          <!-- Square image (hidden on tablet and up) -->
          <figure class="image is-square is-hidden-tablet">
            <img src="/dist/img/offers/brooke_maisie_molly_square.png" alt="Jaz, Lily & Kam" class="mb-6">
          </figure>
          <br>
          <p class="is-size-5">Brooke, Molly and Maisie are now taking on new clients as their columns open up.</p>
          <p>Each Stylist is approaching promotion level, which means prices will soon increase, so now’s the perfect time to secure an appointment at today’s lower price.</p>
          <p class="is-size-5"><strong>Also enjoy a FREE consultation and experience quality hairdressing at a fraction of the cost, all under the guidance of our expert educators.</strong></p>
         <p>A typical Colour and Cut price with our apprentices is just £35! (including discount)</p>
          <p><em>Please note: all of our new starters are currently only carrying out basic cutting and colouring services. If
            you are looking for a more advanced stylist
            <router-link :to="{name: 'jnr-stylist-offer'}" class="has-text-primary"><strong>click here</strong></router-link>
          </em></p>
          <p class="is-size-4"><strong>Call 01925 444449 to book</strong><br>
            or use our online booking (link at top of page)</p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - offer for new clients to Base Hairdressing)</p>
          <br>
          <div class="buttons">
            <router-link :to="{ name: 'team' }" class="button is-primary">Check out the full team</router-link>
            <a href="https://www.phorest.com/salon/basehairacademy/book/service-selection?showSpecialOffers=false" class="button is-primary">Book a Consultation</a>
          </div>
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