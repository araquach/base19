<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>DAISY.</span></h1>
        </div>
        <p class="is-size-5">I've always had a burning dream of being a <strong>hairstylist</strong>. I'll admit, I let other people's opinions sway me, so I ended up at college pursuing something I wasn't truly interested in. But you know what they say – the heart wants what it wants.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/daisy/daisy_1.jpg" alt="Daisy">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/daisy/daisy_2.jpg" alt="Daisy">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5">During lockdown, something inside me clicked, and I rediscovered my passion for <strong>hairdressing</strong>. So, I took the plunge, and here I am.</p>
        <p>I've always been a bit of an introvert, a tad shy, but that all changes around the right people and I'm the happiest version of myself whilst working at
          <strong>Base Hairdressing Training Academy</strong>.</p>
        <p>When it comes to my career, I'm all about making people fall in love with their hair. I find immense satisfaction in seeing the transformations I bring to life. </p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p>Nothing beats leisurely walks with my mum, sisters, and Franklin. <strong>My family means the world to me</strong>, and their unwavering support fuels my passion for this craft.</p>
        <p class="is-size-5">So, if you're looking for someone who's <strong>creative, kind, and trustworthy</strong>, that's me – Daisy.</p>
        <h3>My goal?</h3>
        <p class="is-size-5">To be the unique and skilled hairstylist who brings out the best in your hair and helps you rock your confidence.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/daisy/daisy_3.jpg" alt="Daisy">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/daisy/daisy_4.jpg" alt="Daisy">
        </figure>
      </div>
      <div class="column is-7">
        <p>More Copy Needed</p>
        <p>Lorum ipsum etc</p>
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
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'daisy' } }">Get a quote
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
