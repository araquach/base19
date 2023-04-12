<template>
    <section id="offers" class="section offers-info hero is-fullheight is-dark">
      <div v-if="!hideOffers">
        <div class="columns is-vcentered">
          <div class="section column is-10">
            <h1 class="title">{{ showMonth }}'s Special Offers</h1>
            <Katie v-if="showOffers.katie"/>
            <General v-if="showOffers.general" />
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
import General from "./offerLinks/November"
import Graduate from "./offerLinks/Graduate"
import JnrStylist from "../../components/offers/offerLinks/JnrStylist"
import Apprentice from "../../components/offers/offerLinks/Apprentice"
import NewStarter from "../../components/offers/offerLinks/NewStarter"
import Layla from "../../components/offers/offerLinks/Layla"
import Katie from "../../components/offers/offerLinks/Katie"
import format from "date-fns/format"

export default {
  components: {Katie, General, Layla, Graduate, JnrStylist, Apprentice, NewStarter},
  data() {
    return {
      showOffers: {
        general: false,
        newStarter: false,
        apprentice: false,
        jnrStylist: false,
        graduate: false,
        layla: false,
        katie: true
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