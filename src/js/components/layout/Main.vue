<template>
  <div>
    <Home id="home"/>
    <About id="about"/>
    <Team id="team"/>
    <Prices id="price"/>
    <Blog id="blog"/>
    <Offers v-if="!hideOffers" id="offers"/>
    <Joinus id="joinus"/>
    <Models id="models"/>
    <Contact id="contact"/>
  </div>
</template>
<script>
import {mapState} from "vuex"
import Home from '../home/HomeInfo'
import About from '../about/About'
import Team from '../team/TeamInfo'
import Prices from '../prices/Prices'
import Blog from '../blog/Blog'
import Joinus from '../joinus/Joinus'
import Models from '../models/Models'
import Contact from '../contact/Contact'
import Offers from '../offers/Offers'

export default {
  components: {
    Home,
    About,
    Team,
    Prices,
    Blog,
    Joinus,
    Models,
    Contact,
    Offers,
  },

  computed: {
    ...mapState({
      hideOffers: state => state.base.hideOffers
    })
  }

}
</script>