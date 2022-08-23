<template>
    <section id="offers" class="section offers-info hero is-fullheight is-dark">
      <div v-if="!hideOffers">
        <div class="columns is-vcentered">
          <div class="column is-10">
            <h1 class="title">{{ showMonth }}'s Special Offers</h1>
            <NewStarter v-if="showOffers.newStarter"/>
            <Apprentice v-if="showOffers.apprentice"/>
            <JnrStylist v-if="showOffers.jnrStylist"/>
            <Graduate v-if="showOffers.graduate"/>
            <Layla v-if="showOffers.layla"/>
          </div>
        </div>
      </div>
      <div v-else>
        <h1 class="title is-4">Check back soon for special offers!</h1>
      </div>
    </section>
</template>
<script>
import {mapState} from "vuex"
import Graduate from "../../components/offers/offerLinks/Graduate"
import JnrStylist from "../../components/offers/offerLinks/JnrStylist"
import Apprentice from "../../components/offers/offerLinks/Apprentice"
import NewStarter from "../../components/offers/offerLinks/NewStarter"
import Layla from "../../components/offers/offerLinks/Layla"
import format from "date-fns/format"

export default {
  components: {Layla, Graduate, JnrStylist, Apprentice, NewStarter},
  data() {
    return {
      showOffers: {
        newStarter: false,
        apprentice: true,
        jnrStylist: false,
        graduate: false,
        layla: true
      }
    }
  },

  computed: {
    ...mapState({
      hideOffers: state => state.base.hideOffers
    }),

    showMonth() {
      return format(new Date(), "MMMM")
    }
  }
}
</script>