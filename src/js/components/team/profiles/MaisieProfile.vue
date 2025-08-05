<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>MAISIE.</span></h1>
        </div>
        <p class="is-size-4">You’ll probably know me as Mais, I'm a warm hearted Cancer with a big smile and an even bigger love for hairdressing. Becoming a stylist has been a dream of mine for as long as I can remember. I got my first taste of the industry doing a hairdressing course where I learned everything from head massages to tool handling. That was it for me, I was hooked.</p>
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
        <p class="is-size-5">When I found out I had an interview at Base, I knew it was the next step in my journey and I was ready to give it everything. Now, as an apprentice, I’m loving every second of learning new skills, meeting amazing clients and helping them feel their absolute best.</p>
        <p class="is-size-5">My clients often tell me my head massages are next level, it’s a compliment I never get tired of hearing! But beyond that, I’m passionate about helping people feel confident, cared for and excited about their hair. That feeling when someone sees their dream hair has become a reality? I live for it.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p class="is-size-5">Off the salon floor, I’m all about travelling, discovering hidden gems and spending quality time with my friends and family. I find inspiration everywhere, in new places, meaningful conversations and the little moments that make life feel special.</p>
        <p class="is-size-5">What sets me apart? I’m super talkative, trustworthy and always up for a good laugh. I want every client I meet to feel totally at ease, like they’re hanging out with a friend who just happens to love creating beautiful hair.</p>
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
        <p class="is-size-5">One day, I hope to continue growing into a confident stylist with a loyal clientele, someone known not just for her skills, but for the energy and kindness I bring into every appointment.</p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/hairbymaisie_xx/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          hairbymaisie_xx</p>
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
