
<template>
  <section class="section offers-info hero is-fullheight is-dark mb-0">
    <div v-if="!hideOffers">
      <div class="columns">
        <div class="column is-9-desktop">

          <div class="top section">
            <h2 class="title is-2 is-size-3-mobile has-text-white mb-3">
              We'd Love to Welcome You Back!
            </h2>

            <h2 class="title is-3 is-size-4-mobile has-text-white mb-4">
              Ready for a fresh start this Autumn?
            </h2>

            <p class="is-size-4">
              It's been a little while since your last visit to Base
              Hairdressing, and we'd love to see you again!
            </p>

            <p class="is-size-4">
              To welcome you back, we're treating you to
              <strong>25% off</strong> your next appointment this November.
            </p>

            <p>
              Whether you're looking for a complete colour transformation,
              a fresh new cut or simply a little hair refresh, our
              talented team are here to help you look and feel your best.
            </p>

            <figure class="image">
              <img
                  src="/dist/img/offers/oct26.jpg"
                  alt="25% off your next visit to Base Hairdressing"
                  class="mb-4"
              >
            </figure>
          </div>

          <div class="section pt-0">
            <h2 class="title is-4 mb-3">
              Why come back to Base?
            </h2>

            <ul class="mb-5">
              <li>Complimentary, personalised consultations</li>
              <li>Quality hairdressing at exceptional value</li>
              <li>All services supported by experienced educators</li>
              <li>Junior, Apprentice and New Starter options to suit every budget</li>
            </ul>

            <h2 class="title is-4">
              Looking to book a Cut and Style or Blowdry only?
            </h2>

            <p>
              Ready for a refresh? You can book your appointment
              directly with our team.
            </p>

            <div class="buttons">
              <a
                  href="https://www.phorest.com/salon/basehairacademy/book/service-selection?showSpecialOffers=false"
                  class="button is-primary"
              >
                Book Your Cut or Blowdry
              </a>
            </div>

            <h2 class="title is-4">
              Planning a colour appointment?
            </h2>

            <p class="is-size-5">
              We'd love to discuss your colour goals and help you find
              the perfect look. Book your complimentary consultation,
              where we can also update your skin test and arrange your
              next appointment.
            </p>

            <div class="buttons">
              <a
                  href="https://phorest.com/book/salons/basehairacademy#/service-category?id=0P2QrXkTppoqXslH0K5ttQ"
                  class="button is-primary"
              >
                Book Your FREE Colour Consultation
              </a>
            </div>

            <h2 class="title is-4 mt-5 mb-3">
              Beautiful Hair. Exceptional Value.
            </h2>

            <p>
              Our academy offers professional hairdressing at prices
              you'll love, with every service supported by our
              experienced educators.
            </p>

            <p>
              Average Colour & Cut with Brooke:
              <strong>£60 including discount</strong>
            </p>

            <p class="mb-4">
              Average Colour & Cut with Liv, Bonnie & Emily:
              <strong>£40 including discount</strong>
            </p>

            <div class="buttons">
              <router-link
                  :to="{ name: 'team' }"
                  class="button is-primary"
              >
                Meet Our Team
              </router-link>
            </div>

            <p class="is-size-4">
              <strong>
                Prefer to Book by Phone? Call Us on 01925 444449
              </strong>
            </p>

            <p>
              Your 25% discount will be applied at checkout.
              Simply show your invitation text when you visit.
            </p>

            <p class="small">
              Offer valid until {{ endDate }} – Cannot be used in
              conjunction with any other offer – Skin test required
              48 hours before any colour service.
            </p>

          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <h1 class="title is-4">
        There are currently no offers
      </h1>
      <p>Check back soon!</p>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState({
      hideOffers: state => state.base.hideOffers,
      endDate: state => state.base.endDate
    })
  }
}
</script>
