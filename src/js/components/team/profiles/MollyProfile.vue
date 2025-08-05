<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>MOLLY.</span></h1>
        </div>
        <p class="is-size-4">Hair, horses and a hint of wanderlust, that pretty much sums me up. I’ve loved hairdressing for as long as I can remember, from plaiting my friend's hair as a kid to now building my career as an Apprentice Stylist at Base.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/molly/molly_1.jpg" alt="Molly">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/molly/molly_2.jpg" alt="Molly">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5">For me, hairdressing is all about connection. I love making people feel confident and cared for and nothing beats the smile on a client’s face when they see their transformation.</p>
        <p class="is-size-5">I'm especially passionate about getting involved with blonding services, there’s something so satisfying about the detail and technique involved and I can't wait to keep building on that.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p class="is-size-5">When I’m not in the salon, I’m either off exploring the world, I’ve been lucky to tick off a few dream spots already such as Thailand, Bali and Mauritius, or spending time with my three horses,  Pip, Mishka and Nansi. Horses have been a huge part of my life and producing my own has been one of my proudest accomplishments.</p>
        <p class="is-size-5">Clients say my head massages are next level and I’m always up for a good chat. I believe the best salon experiences aren’t just about the hair, they’re about how you feel while you’re in the chair. </p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/molly/molly_3.jpg" alt="Molly">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/molly/molly_4.jpg" alt="Molly">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5">I want every appointment to feel relaxed, friendly and like you’re catching up with someone who really gets you.</p>
        <p class="is-size-4">As I grow in this industry, I’m dreaming big, not just about perfecting my craft, but about making a lasting impact in the lives of the people who sit in my chair.</p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/manebymolly/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          manebymolly</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'molly' } }">Get a quote
        with me!
      </router-link>
      <br><br>
      <router-link class="button is-small is-white" :to="{ name: 'team', hash: '#molly' }">
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
