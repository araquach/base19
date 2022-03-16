<template>
    <section class="section offers-info hero is-fullheight is-dark">
      <div v-if="!hideOffers">
        <div class="columns is-vcentered">
          <div class="column is-8-desktop">
            <h1 class="title">{{ showMonth }}'s Special Offers</h1>
            <LaurenLucy v-if="showOffers.laurenLucy"/>
            <LaylaAbbi v-if="showOffers.laylaAbbi"/>
            <Lucy v-if="showOffers.lucy"/>
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
import format from "date-fns/format"

export default {
  components: {Graduate, JnrStylist, Apprentice, NewStarter},
  data() {
    return {
      showOffers: {
        laurenLucy: true,
        laylaAbbi: true,
        abbi: false,
      }
    }
  },

  computed: {
    ...mapState({
      hideOffers: state => state.jakata.hideOffers
    }),

    showMonth() {
      return format(new Date(), "MMMM")
    }
  }
}
</script>