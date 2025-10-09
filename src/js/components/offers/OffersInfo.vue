<template>
    <section id="offers" class="section offers-info hero is-fullheight is-dark">
      <div v-if="!hideOffers">
        <div class="columns is-vcentered">
          <div class="section column is-10">
            <h1 class="title">Autumn Offers</h1>
            <General v-if="showOffers.general" />
            <NewStarter v-if="showOffers.newStarter"/>
            <Apprentice v-if="showOffers.apprentice"/>
            <JnrStylist v-if="showOffers.jnrStylist"/>
            <Graduate v-if="showOffers.graduate"/>
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
import General from "./offerLinks/categories/GeneralLink"
import NewStarter from "./offerLinks/categories/NewStarterLink"
import Apprentice from "./offerLinks/categories/ApprenticeLink";
import JnrStylist from "./offerLinks/categories/JuniorStylistLink";
import Graduate from "./offerLinks/categories/GraduateLink"
import format from "date-fns/format";
import {tr} from "date-fns/locale";

export default {
  components: {General, NewStarter, Apprentice, JnrStylist, Graduate},
  data() {
    return {
      showOffers: {
        general: false,
        newStarter: false,
        apprentice: true,
        jnrStylist: true,
        graduate: false,
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