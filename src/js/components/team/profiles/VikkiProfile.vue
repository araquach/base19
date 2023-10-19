<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>VIKKI.</span></h1>
        </div>
        <p class="is-size-5">I'm a spirited hairstylist and educator with a deep love for all things hair and a heart full of passion. My life revolves around two incredible forces: family and the vibrant world of hairstyling. And with a boy and a girl who keep me endlessly entertained and on my toes, my world is a symphony of laughter, growth, and love.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/vikki/vikki_1.jpg" alt="Vikki">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/vikki/vikki_2.jpg" alt="Vikki">
        </figure>
      </div>
      <div class="column is-7">
        <p>When I'm not busy crafting stunning hairstyles, I'm immersing myself in the enchanting world of movies and TV shows, finding solace in the pages of a captivating book, or soaking up the energy of live music performances.</p>
        <p>These moments of quiet reflection and shared experiences bring balance and inspiration to my life, fuelling my creativity and zest for the art of hairstyling.</p>
        <p>My journey in the hairstyling realm spans over two decades, an exhilarating 22 years that have been marked by growth, learning, and transformation. It's a journey that I'm excited to continue as I take on the rewarding role of Lead Trainer and advanced stylist at Base Hairdressing.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p class="is-size-5">Guiding and shaping the talents of the next generation of stylists is a responsibility I carry with pride and dedication. My personal style can be described as a harmonious blend of modern-vintage charm, with a touch of methodical precision. </p>
        <p>Beyond the salon, I channel my creativity into crafting intricate crochet garments, a testament to my eye for detail and knack for bringing ideas to life. And let's not forget my deep-rooted fascination with vintage fashion – a love affair that has spanned two decades.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/vikki/vikki_3.jpg" alt="Vikki">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/vikki/vikki_4.jpg" alt="Vikki">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5">As a child, I found my passion for hairstyling in the most unexpected of places: my beloved Barbie dolls. Little did I know that those playful experiments would pave the way for a fulfilling career.</p>
        <p>My journey took me through various salons, including a memorable stint at Haircuttery, where I honed my skills and evolved into a supervisor.</p>
        <p>My path eventually led me to our sister salon Jakata, where I spent a fulfilling 11 years before being entrusted with the position of Lead Trainer at Base.</p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/_.vintage_vikki._/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          _.vintage_vikki._</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'vikki' } }">Get a quote
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
