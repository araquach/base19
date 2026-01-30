<template>
  <section class="section offers-info hero is-fullheight is-dark">
    <div v-if="!hideOffers">
      <div class="section columns">
        <div class="column is-9-desktop">
          <h2 class="title is-2 is-size-3-mobile has-text-white mb-1">Beautiful Results, Expertly Overseen</h2>
          <p class="is-size-5">Your first visit made easy: full colour, cut & blowdry for £55 with our apprentice team</p>
          <p>This offer is ideal for new clients who want great value without compromising on quality on their first visit to Base Hairdressing.</p>
          <p>Our Apprentice Stylists <strong>Brooke, Molly and Maisie</strong> deliver carefully executed salon services within our training academy environment. All work is costly overseen by our experienced educators to ensure high standards and a supportive, progressional salon experience.</p>
          <br>
          <!-- Original image (hidden on mobile) -->
          <figure class="image is-hidden-mobile">
            <img src="/dist/img/offers/march26_apprentice_wide.jpg" alt="Brooke, Mollie & Maisie" class="mb-6">
          </figure>
          <!-- Square image (hidden on tablet and up) -->
          <figure class="image is-square is-hidden-tablet">
            <img src="/dist/img/offers/march26_apprentice_square.jpg" alt="Brooke, Mollie & Maisie" class="mb-6">
          </figure>
          <br>
          <p class="is-size-5">Book in with one of our Apprentice Stylists at a special first visit price, available for a limited time. </p>
          <h2 class="title is-4 mb-1">Full Colour, Cut and Blowdry</h2>
          <p class="is-size-4">£55 with our Apprentices (usually £70)</p>
          <p class="is-size 5">You can check out their work here:</p>
          <a href="https://www.instagram.com/bb.hair_" class="is-size-4 has-text-primary">Brooke: @bb.hair_</a>
          <br>
          <a href="https://www.instagram.com/manebymolly" class="is-size-4 has-text-primary">Molly: @manebymolly</a>
          <br>
          <a href="https://www.instagram.com/hairbymaisie_xx" class="is-size-4 has-text-primary">Maisie: @hairbymaisie_xx</a>
          <br>
          <h2 class="title is-4 mt-5 mb-3">What’s included?</h2>
          <ul>
            <li>Full colour (excludes colour correction services)</li>
            <li>Cut & Blowdry</li>
            <li>All work expertly overseen by senior educators</li>
          </ul>
          <h2 class="title is-4 mt-5 mb-3">Why book this?</h2>
          <ul class="mb-4">
            <li>Excellent value with professional guidance throughout</li>
            <li>A supportive, carefully monitored salon experience</li>
            <li>Perfect for new clients looking for quality hair at a lower price point</li>
          </ul>
          <p class="mb-5"><em>If you're looking for a more advanced stylist <router-link :to="{name: 'jnr-stylist-offer'}" class="has-text-primary"><strong>click here</strong></router-link></em></p>
          <div class="buttons">
            <a href="https://www.phorest.com/salon/basehairacademy/book/service-selection?showSpecialOffers=false" class="button is-primary">Book a Consultation</a>
          </div>
          <p class="is-size-4"><strong>Prefer to Book by Phone? Call Us on 01925 444449</strong></p>
          <p>Just mention the offer at the time of your visit</p>
          <p class="is-size-5"><em>Beautiful, well executed results with reassurance from experienced educators</em></p>
          <p class="small">(Offer ends {{ endDate }} - Skin Test required 48 hrs before any colour service - offer for new clients to Base Hairdressing)</p>
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