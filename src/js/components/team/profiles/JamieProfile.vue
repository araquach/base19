<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>JAMIE.</span></h1>
        </div>
        <p class="is-size-5">Hey guy's, I'm Jamie, your friendly junior hair stylist with a heart full of passion for this craft. Hairdressing has always been my jam – even before I officially joined the industry, I was the go-to friend for pre-night-out hair transformations. Lockdown pushed me to take a college course in hairdressing, and that's when I knew I'd found my true calling!</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/jamie/jamie_1.jpg" alt="Jamie">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/jamie/jamie_2.jpg" alt="Jamie">
        </figure>
      </div>
      <div class="column is-7">
        <p>If I had to sum myself up in two words, I'd go with weird and funny – a unique combo that keeps things interesting. As an apprentice at Base, I'm all about giving clients the hair they've always dreamed of. Balayage and big transformations are my jam – there's something magical about creating a whole new look.</p>
        <p>In my personal life, I wear another hat – or should I say wig? I'm no stranger to drag, and when the spotlight's on, you can call me Jamie Lipz. And hey, my love for music goes beyond hair and drag – I'm a singing, piano-playing, guitar-strumming maestro.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p>I take pride in solving hair problems for my clients, from dryness to breakage, and introducing them to the products that'll bring back their hair's healthy glow. You'll often hear compliments about my hair coloring skills – I guess you could say it's my artistic flair shining through.</p>
        <p>What's the biggest proof that I'm good at hair? Well, snagging a distinction speaks volumes about my dedication to the craft. With almost two years of hairdressing experience under my belt, my journey has been a whirlwind, and it's only getting more exciting from here.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/jamie/jamie_3.jpg" alt="Jamie">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/jamie/jamie_4.jpg" alt="Jamie">
        </figure>
      </div>
      <div class="column is-7">
        <p>When I'm not in the salon, you'll find me belting out tunes, tickling the ivories, or rocking some fierce drag makeup. Music and nights out with friends are my ultimate fun zones.</p>
        <p>So, whether you're looking for a bold hair transformation, a good laugh, or some impressive musical talent, I'm your guy. Let's create hair magic together!</p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/jamiebanninghair/">
        <p class="is-size-4 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          jamiebanninghair</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'jamie' } }">Get a quote
        with me!
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