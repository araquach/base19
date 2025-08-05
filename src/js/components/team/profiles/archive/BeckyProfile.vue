<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>BECKY.</span></h1>
        </div>
        <p class="is-size-4">I'm a 21-year-old apprentice at <strong>Base Hairdressing</strong>. It's been about a year since
          I joined this amazing team. When I'm not in the salon, I'm hanging out with my two incredible horses, <strong>Tali and
            Sunni</strong> – they're like family to me. Socialising with friends is another favourite pastime of mine.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/becky/becky_1.jpg" alt="Becky">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/becky/becky_2.jpg" alt="Becky">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5">Before I embarked on this hairdressing journey, I tried my hand at forensic science for a year at John Moores
          University. But during lockdown, <strong>I discovered my true calling – hairdressing</strong>. I've always been a chatterbox,
          and my friends would probably add "funny" to the list too</p>
        <p class="is-size-5">Seeing transformations happen right before my eyes is pure magic. And guess what? I'm not just good with
          scissors and colour, <strong>I'm a bit of a horse whisperer too</strong>. My passion extends beyond the salon, and my two
          horses, Tali and Sunni, are living proof of that. My proudest moment? <strong>Schooling my own horse</strong> – it's been a
          true accomplishment.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <h3>My specialities...</h3>
        <p class="is-size-5"><strong>Short cuts are my specialty</strong>, and I absolutely love helping clients style their hair at home with confidence.
          When clients come back weeks later with their hair still looking amazing, it's like the biggest stamp of
          approval.</p>
        <p class="is-size-5">I've got quite the fan club for my work on <strong>vivid, blondes, and balayage</strong>. But whether you're a bold
          risk-taker or looking for something more subtle, I'm here to make you feel amazing.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/becky/becky_3.jpg" alt="Becky">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/becky/becky_4.jpg" alt="Becky">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5">Beyond creating <strong>stunning hair transformations</strong>, the <strong>Base Hairdressing
          team</strong>, including myself, dives into the exciting world of content creation for our own social media hair accounts and the
          <strong>Base Hairdressing social pages</strong>. It's not just about hair; we're learning additional skills that support our future growth
          and add a fun dimension to our careers.</p>

        <h3 class="title is-5 has-text-white">So, what's on my horizon?</h3>
        <p class="is-size-4">Well, my dream is to combine my <strong>love for hairdressing</strong> with travel, exploring the
          world while making people look and feel incredible. And hey, who wouldn't want a hairstylist who's chatty,
          skilled with short cuts, and a true horse enthusiast?</p>
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
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'becky' } }">Get a quote
        with me!
      </router-link>
      <br><br>
      <router-link class="button is-small is-white" :to="{ name: 'team', hash: '#becky' }">
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
