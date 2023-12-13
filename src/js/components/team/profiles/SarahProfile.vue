<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>SARAH.</span></h1>
        </div>
        <p class="is-size-5">Hey, I'm Sarah, your friendly hairstylist <strong>on a mission to spread good vibes and stylish hairdos</strong>. As a Capricorn, I've got that ambitious drive, but you'll find I'm totally easygoing and relaxed. I take pride in welcoming our new apprentices with open arms, making sure they feel right at home. If I had to sum myself up in three words, I'd go with <strong>welcoming, relaxed, and cool</strong> – just like your favourite playlist.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/sarah/sarah_1.jpg" alt="Sarah">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/sarah/sarah_2.jpg" alt="Sarah">
        </figure>
      </div>
      <div class="column is-7 is-size-5">
        <p>My role at Base? <strong>I'm the Junior Stylist</strong>, and let me tell you, there's nothing better than seeing my clients light up with happiness and confidence after they have been in my chair.</p>
        <p>I'm all about those <strong>natural balayages that give off that effortlessly chic vibe</strong>, and I'm not afraid to dive into some edgy and wild cuts.</p>
        <p>Fun fact: <strong>I can DJ</strong> – maybe not world-class, but I've got some skills! Beyond hair, you'll find me unleashing my creativity with a paintbrush or spending quality time with my four-legged pals.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7 is-size-5">
        <p>Despite being fairly new to the hairdressing scene with two years under my belt, <strong>my clients' reviews and their radiant smiles are proof that I'm nailing this hairstyling gig</strong>.</p>
        <p>I'm all about enhancing natural beauty and creating those <strong>oh-so-coveted natural looking colours</strong>.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/sarah/sarah_3.jpg" alt="Sarah">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/sarah/sarah_4.jpg" alt="Sarah">
        </figure>
      </div>
      <div class="column is-7 is-size-5">
        <p>When I'm not in the salon, you'll find me <strong>buried in a book, hiking through nature's beauty, or soaking up the music at festivals</strong>. The creative itch extends beyond hair – I aspire to dive into more fashion-linked projects and shoots in the future.</p>
        <p>So, whether you're up for some stylish hair magic, a friendly chat, or even some tunes, I'm your go-to gal. Can't wait to meet you!</p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/breathof.freshhair/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          breathof.freshhair</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'sarah' } }">Get a quote
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
