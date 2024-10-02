<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>MAISIE.</span></h1>
        </div>
        <p class="is-size-4"></p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/maisie/maisie_1.jpg" alt="Maisie">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/maisie/maisie_2.jpg" alt="Maisie">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5"></p>
        <p class="is-size-5"></p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p class="is-size-5"></p>
        <p class="is-size-5"></p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/maisie/maisie_3.jpg" alt="Maisie">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/maisie/maisie_4.jpg" alt="Maisie">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5"></p>
        <p class="is-size-4"></p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/becky.y.hair/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          becky.y.hair</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'maisie' } }">Get a quote
        with me!
      </router-link>
      <br><br>
      <router-link class="button is-small is-white" :to="{ name: 'team', hash: '#maisie' }">
        Back to the full team
      </router-link>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex"

export default {
  computed: {
    ...mapState({
      hideOffers: state => state.base.hideOffers
    })
  }
}
</script>
