<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>KAM.</span></h1>
        </div>
        <p class="is-size-5">I’m <strong>passionate and hardworking</strong> with a twist! If you asked my friends, they’d say I’m
          <strong>spontaneous, chatty, and outgoing</strong>, and I’d totally agree. Born in the chilly winter months but I’ve got that
          <strong>sunny, summer-loving vibe</strong> radiating through me. You’ll often find me flipping through festivals and creating
          <strong>unforgettable memories</strong>. I thrive on socializing and making every moment count. <strong>Laughter is my secret sauce</strong>,
          and I’m always up for brightening someone’s day with a good joke or two.
        </p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/kam/kam1.png" alt="Kam">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/kam/kam2.jpg" alt="Kam">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5">I’m currently on an <strong>exciting journey as an apprentice at Base</strong>, where I dive headfirst into
          meeting diverse personalities and tackling <strong>thrilling colour and cutting projects</strong>. But let me tell you, my
          <strong>passion for hairdressing</strong> started long before this chapter. As a kid, I fell in love with styling, my first
          hairdressing doll was my pride and joy, and I’d style hair every chance I got. Fast forward to primary school,
          and I was the go-to person for hairdos during golden time on Fridays.</p>
        <p class="is-size-5">
          One of my favourite services to offer? The <strong>iconic 90’s blowout</strong>, those voluminous, swooping styles with a touch
          of elegance. It’s all about finishing a service with that <strong>chic look</strong> that makes heads turn.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p class="is-size-5">While I may not have any hairdressing awards (yet!), my biggest achievement was a <strong>six-hour
          colour correction session</strong> on my best friend. It was a labor of love that ended with her feeling like a million
          bucks.</p>
        <p class="is-size-5">What drives me professionally? <strong>Going above and beyond</strong> to ensure my clients leave feeling ten times happier
          with their hair than when they walked in. I pride myself on <strong>quality over quantity</strong>, ensuring my clients’ hair
          is always in top-notch condition.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/kam/kam3.jpg" alt="Kam">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/kam/kam4.jpg" alt="Kam">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5">Outside the salon, I’m all about <strong>creating memories, traveling, hitting up festivals</strong>, and
          mixing up some killer cocktails. But truth be told, even if I wasn’t getting paid for it, I’d still be
          wielding those styling tools and perfecting my craft. <strong>Hairdressing isn’t just a job; it’s my passion, my love,
            my everything</strong>.</p>
        <p class="is-size-5">So, whether you’re someone with a unique flair or just looking for a friendly stylist who’s all about
          <strong>bringing out the best in your hair</strong>, I’m here, ready to make your hair dreams a reality. My goal? To someday
          make waves as a <strong>celebrity or runway stylist</strong>, but until then, I’ll keep perfecting those blowouts and spreading
          laughter wherever I go.</p>
        <p class="is-size-4"><strong>Catch me at Base, and let’s make some hair magic happen!</strong></p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/kamronharleyhair/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          kamronharleyhair</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'kam' } }">Get a quote
        with me!
      </router-link>
      <br><br>
      <router-link class="button is-small is-white" :to="{ name: 'team', hash: '#kam' }">
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
