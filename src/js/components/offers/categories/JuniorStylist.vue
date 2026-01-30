<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-3-mobile has-text-white mb-1">Confident Colour, Beautifully Delivered</h2>
          <p class="is-size-5">A full colour, cut & blowdry for £70 — exceptional quality at an introductory price</p>
          <p>This offer is perfect for new clients looking for a balance of experience, quality and value on their first visit to Base Hairdressing.</p>
          <p>Our Junior Stylists <strong>Lily and Jaz</strong> are confident, developing professionals who deliver consistently strong results. As part of our training academy, all services are supported and overseen by experienced educators to ensure exceptional standards.</p>
          <br>
          <!-- Original image (hidden on mobile) -->
          <figure class="image is-hidden-mobile">
            <img src="/dist/img/offers/march26_js_wide.jpg" alt="Brooke, Mollie & Maisie" class="mb-6">
          </figure>
          <!-- Square image (hidden on tablet and up) -->
          <figure class="image is-square is-hidden-tablet">
            <img src="/dist/img/offers/march26_js_square.jpg" alt="Brooke, Mollie & Maisie" class="mb-6">
          </figure>
          <br>
          <p class="is-size-5">Book a full colour, cut and blowdry with one of our Junior Stylists at a special first visit price, available for a limited time for new clients. </p>
          <h2 class="title is-4 mb-1">Full Colour, Cut and Blowdry</h2>
          <p class="is-size-4">£70 with our Junior Stylists (usually £90)</p>
          <p class="is-size 5">You can check out their work here:</p>
          <a href="https://www.instagram.com/x.hairbylil.x" class="is-size-4 has-text-primary">Lily: @x.hairbylil.x</a>
          <br>
          <a href="https://www.instagram.com/jas_did.my.hair" class="is-size-4 has-text-primary">Jasmine @jas_did.my.hair</a>
          <br>
          <h2 class="title is-4 mt-5 mb-3">What’s included?</h2>
          <ul>
            <li>Full colour (excludes colour correction services)</li>
            <li>Cut & Blowdry</li>
            <li>Expert overusing from senior educators</li>
          </ul>
          <h2 class="title is-4 mt-5 mb-3">Why book this?</h2>
          <ul class="mb-4">
            <li>A step up in experience at a great introductory price</li>
            <li>High quality results with professional support</li>
            <li>Clear, transparent pricing for first time clients</li>
          </ul>
          <p class="mb-5"><em>If you're looking for a more affordable option <router-link :to="{name: 'apprentice-offer'}" class="has-text-primary"><strong>click here</strong></router-link></em></p>
          <div class="buttons">
            <a href="https://www.phorest.com/salon/basehairacademy/book/service-selection?showSpecialOffers=false" class="button is-primary">Book a Consultation</a>
          </div>
          <p class="is-size-4"><strong>Prefer to Book by Phone? Call Us on 01925 444449</strong></p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="is-size-5"><em>Ideal if you’re new to Base and want expertly supported results with excellent value on your first
            appointment.</em></p>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - offer for new clients to Base Hairdressing)</p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="title is-4">There are currently no offers with our Junior Stylists</h1>
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