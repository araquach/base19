<template>
    <section class="section offers-info hero is-fullheight is-dark">
        <div class="columns is-vcentered">
            <div class="column is-8-desktop">
                <h1 class="title">Special Offers</h1>
                <h2 class="subtitle">For a limited time only</h2>
                <p class="is-size-5">Ruby, Sophie & Beth are all fast progressing Junior Stylists, each of them producing outstanding work. If you're looking for a great new look at a fraction of the cost then book in with one of them for a consultation to see what they can do for you!</p>
                <p>Lucy & Lauren are two outstanding Graduate Stylists looking to take on new clients. They both love colouring, cutting & styling hair - their work is outstanding.</p>
                <p class="is-size-5"><strong>If you're wanting a new look take advantage of these great special offers for a limited time!</strong></p>
            </div>
        </div>
        <div class="columns">
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-square">
                    <img src="/dist/img/offers/js_offer.jpg" alt="Junior Stylist Offer">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <h1 class="subtitle has-text-white">Special Offer with Ruby, Sophie & Beth for new clients</h1>
                      <p class="has-text-white">Colour & Cut for just £35</p>
                    </div>
                  </div>
                  <div class="content is-size-6-mobile has-text-white">
                    <p class="is-size-7">Skin test required 48 hours before any colour service. Offer Ends 30/11/20</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-square">
                    <img src="/dist/img/offers/gs_offer.jpg" alt="Graduate Stylist Offer">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <h1 class="subtitle has-text-white">Special Offer with Lucy & Lauren for new clients to Base</h1>
                      <p class="has-text-white">Colour & Cut for just £50</p>
                    </div>
                  </div>
                  <div class="content is-size-6-mobile has-text-white">
                    <p class="is-size-7">Skin test required 48 hours before any colour service. Offer Ends 30/11/20</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      <div>
        <p class="is-size-4">Call <strong>01925 444449</strong> to book a consultation with your chosen stylist</p>
        <router-link :to="{ name: 'team' }" class="is-size-4 has-text-warning">Find out more about the team members here ></router-link>
        <br><br>
      </div>
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <a @click="$router.go(-1)" class="button">back</a>
                </div>
            </div>
        </div>
    </section>
</template>