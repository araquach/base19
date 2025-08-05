<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>DAISY.</span></h1>
        </div>
        <p class="is-size-4">I've always had a <strong>burning dream</strong> of being a hairstylist. I'll admit, I let other people's
          opinions sway me, so I ended up at college pursuing something I wasn't truly interested in. But you know what
          they say, <strong>the heart wants what it wants</strong>. During lockdown, something inside me clicked, and I rediscovered my
          <strong>passion for hairdressing</strong>. So, I took the plunge, and here I am.</p>
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
        <p class="is-size-5">But here's something unique about me that not everyone knows, I’m a <strong>mirror twin</strong>. That's
          right, I have a twin sibling who's my mirror image, and it's always been an intriguing aspect of my life.
          Growing up, we shared an extraordinary bond, almost like two halves of the same whole. While we may look
          alike, our personalities couldn't be more different, yet complementary in a fascinating way.</p>
        <p class="is-size-5">I've always been a bit of an introvert, a tad shy, but that all changes around the right
          people, and I'm the happiest version of myself whilst working at <strong>Base Hairdressing Training Academy</strong>. When it
          comes to my career, I'm all about making people fall in love with their hair. I find immense satisfaction in
          seeing the transformations I bring to life.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p class="is-size-5">At <strong>Base Hairdressing Training Academy</strong>, I'm not just a hairstylist; I'm an apprentice
          learning from our team of experts. Immersing myself in this environment allows me to absorb knowledge, refine
          my techniques, and cultivate my passion for hairdressing. </p>
        <p class="is-size-5">Every day presents a new opportunity for growth and discovery as I work alongside seasoned
          professionals who generously share their expertise. Being part of this dynamic team fuels my determination to
          excel in the craft and contribute positively to the world of hairstyling.</p>
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
        <p class="is-size-5">Beyond my professional endeavours, I find solace in the company of my family and my
          adorable dog, Franklin. At heart, I'm a bookworm who can get lost in the world of literature, and I can't
          resist the allure of good music. Nothing beats leisurely walks with my mom, sisters, and Franklin. My family
          means the world to me, and their unwavering support fuels my passion for this craft.</p>
        <p class="is-size-4">So, if you're looking for someone who's <strong>creative, kind, and trustworthy</strong>, that's me, Daisy.
          My goal? To be the <strong>unique and skilled hairstylist</strong> who brings out the best in your hair and helps you rock your
          confidence.</p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/daisyheathhair/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          daisyheathhair</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'daisy' } }">Get a quote
        with me!
      </router-link>
      <br><br>
      <router-link class="button is-small is-white" :to="{ name: 'team', hash: '#daisy' }">
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
