<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>JASMINE.</span></h1>
        </div>
        <p class="is-size-5">Hey everyone, I'm Jasmine, but you can call me Jaz if you prefer. As an Aquarius, I'm all about bringing the positive vibes with my chatty, caring, and joyful personality. Right now, I'm proudly wearing the hat of an apprentice here at Base, and let me tell you, I'm absolutely loving every moment of it.
        </p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/jasmine/jasmine_1.jpg" alt="Jasmine">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/jasmine/jasmine_2.jpg" alt="Jasmine">
        </figure>
      </div>
      <div class="column is-7">
        <p>What's the best part of my job? Well, it's definitely the chance to connect with an incredible array of people. From trendy haircuts to stunning colours, I get to explore my creative side and bring out the best in everyone who sits in my chair.</p>
        <p>But it's not just about the hair – it's about stepping out of my comfort zone, gaining confidence, and watching as clients walk out that door with a newfound radiance.</p>
        <p>While my shelves might not be lined with hairdressing awards just yet, I'm all about aesthetics. I find the artistry in creating beautiful, harmonious looks incredibly fascinating.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p>Now here's a little secret about me: I might come across as a bit shy initially, but trust me, that's just the warm-up act. Once I open up, I'm a bundle of laughter and energy, ready to make any moment a memorable one.</p>
        <p>So, how did I find my way into the world of hairdressing? Well, it all started with my mom. I used to watch her work her magic, transforming not just hair, but people's confidence. From a young age, I found myself drawn to the salon atmosphere, chatting up clients and lending a hand wherever I could – even if that meant getting underfoot more often than not.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/jasmine/jasmine_3.jpg" alt="Jasmine">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/jasmine/jasmine_4.jpg" alt="Jasmine">
        </figure>
      </div>
      <div class="column is-7">
        <p>Professionally, my heart beats fastest when I think about achieving my dream of becoming a skilled and versatile hairdresser. I want to soak up every bit of knowledge and experience, and then pay it forward by helping others step into this exciting world.</p>
        <p>But wait, there's more to me than just the salon life. In my personal world, my friends and family hold a special place. They're my anchors, the ones who keep me grounded and inspired. And guess what? Even if I weren't getting paid, I'd still be here at Base, loving every minute of it. This place is like a second home, and the comfort and warmth I feel here are beyond words.</p>
        <p>I've got this knack for making people feel right at home – a true gift for turning strangers into friends and I'm often the go-to helper for our super experience stylists. It's a pretty awesome feeling to know that my skills are valued.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p>With about a year in the hairdressing world as a Saturday girl under my belt, I'm proud to say that my biggest accomplishment is landing this apprenticeship at Base. It's a testament to my dedication and passion for this craft.</p>
        <p>When it comes to my clients, I'm all about solving problems and spreading good vibes. They often praise me for being friendly and approachable, making their time in the salon a breeze.</p>
        <p>So, who's my ideal client, you ask? Well, it's someone who's up for a good chat and a friendly connection. If you're looking for a stylist who's not only skilled but also a great conversationalist, I'm your gal.</p>
        <p>Looking ahead, I've got big dreams. First on the list: becoming a fully qualified hairdresser. But I'm not stopping there – I want to push boundaries, experiment with new techniques, and share my knowledge with aspiring hairstylists. Together, we'll create magic in every strand.</p>
      </div>
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/jasmine/jasmine_5.jpg" alt="Jasmine">
        </figure>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/hair_kiss_/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          hair_kiss_</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'jasmine' } }">Get a quote
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
