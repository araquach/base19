<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>LAYLA.</span></h1>
        </div>
        <p class="is-size-5">I'm a fusion of creativity, compassion, and boundless energy. With over <strong>7 enriching years in the world of hairdressing</strong>, I'm not just a stylist; I'm a passionate advocate for self-expression. As the <strong>Manager and Head of Education at Base Hairdressing</strong>, I have the incredible privilege of mentoring aspiring stylists, sharing my expertise, and igniting their artistic flames.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/layla/layla_1.jpg" alt="Layla">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/layla/layla_2.jpg" alt="Layla">
        </figure>
      </div>
      <div class="column is-7">
        <p>My role at Base goes beyond shaping hairstyles; I also play a pivotal role in <strong>content creation</strong>. I participate in guiding and coaching all the apprentices, alongside the marketing and social media executive, on how to craft <strong>scroll-stopping content</strong> for both their personal online portfolios and the Base Hairdressing social accounts</p>
        <p>It's a dynamic and exciting part of my job, where I get to encourage and nurture the apprentices' creativity and teach them how to make a visual impact in the digital world.</p>
        <p>For me, hairdressing isn't just a job; it's a canvas where I bring visions to life. <strong>The thrill of crafting vivid colors and editorial masterpieces sets my heart racing</strong>. <strong>Balayage and color correction</strong>? Consider them my specialty – I relish the challenge of transforming a canvas into a stunning work of art.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p>My journey into hairdressing wasn't a typical one. In my teenage years, engineering seemed like my path, until I discovered the magic of a salon in Kent. It was there that <strong>my true calling unfolded</strong>. I moved north, found my way to Base Hairdressing, and the rest is history – a history filled with growth, learning, and most importantly, helping clients embrace their authenticity.</p>
        <p>As much as I adore crafting breathtaking hair, my world doesn't stop there. When I'm not wielding my shears, you might find me revving up on my motorbike or weaving intricate patterns through crochet. Oh, and did I mention I used to have a pet snake? Yes, <strong>my passions are as diverse as they come</strong>.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/layla/layla_3.jpg" alt="Layla">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/layla/layla_4.jpg" alt="Layla">
        </figure>
      </div>
      <div class="column is-7">
        <p>But it's not just about hair – it's about <strong>building connections</strong>. My clients aren't just appointments; they're stories waiting to be told. Through open conversations, I ensure every client feels heard and understood. <strong>A judgment-free zone, where authenticity reigns and self-confidence soars</strong>.</p>
        <p>What drives me? Beyond the vibrant colors and striking styles, it's <strong>my family and my fascination with spirituality and witchcraft</strong>. Outside the salon, you'll often find me lost in a world of editorial photoshoots, turning visions into reality one click at a time.</p>
        <p>Looking ahead, my aspirations are sky-high. I dream of <strong>sculpting Base Hairdressing into the most sought-after academy in the North West</strong>. And that's not all – I yearn to collaborate with Schwarzkopf, shaping hair collections and education. For me, hairdressing isn't just a career; it's a journey of growth, artistry, and inspiring others to find their own path of self-expression.</p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/vividmane_/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          vividmane_</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'layla' } }">Get a quote
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
