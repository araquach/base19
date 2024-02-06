<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>JASMINE.</span></h1>
        </div>
        <p class="is-size-4">You can call me Jaz if you prefer! As an <strong>Aquarius, I'm all about bringing the positive vibes</strong> with my chatty, caring, and joyful personality. Right now, I'm proudly wearing the hat of an apprentice here at Base, and let me tell you, <strong>I'm absolutely loving every moment of it</strong>.
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
        <p class="is-size-5"><strong>What's the best part of my job?</strong> Well, it's definitely the chance to connect with an incredible array of people. From trendy haircuts to stunning colours, <strong>I get to explore my creative side</strong> and bring out the best in everyone who sits in my chair.</p>
        <p class="is-size-5">But it's not just about the hair – it's about stepping out of my comfort zone, gaining confidence, and watching as clients walk out that door with a newfound radiance.</p>
        <p class="is-size-5">While my shelves might not be lined with hairdressing awards just yet, <strong>I'm all about aesthetics</strong>. I find the artistry in creating beautiful, harmonious looks incredibly fascinating.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p class="is-size-5">Now here's a little secret about me: <strong>I might come across as a bit shy initially</strong>, but trust me, that's just the warm-up act. Once I open up, I'm a bundle of laughter and energy, ready to make any moment a memorable one.</p>
        <p class="is-size-5">So, how did I find my way into the world of hairdressing? Well, it all started with my mom. <strong>I used to watch her work her magic, transforming not just hair, but people's confidence</strong>. From a young age, I found myself drawn to the salon atmosphere, chatting up clients and lending a hand wherever I could – even if that meant getting underfoot more often than not.</p>
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
        <p class="is-size-5">Professionally, <strong>my heart beats fastest when I think about achieving my dream</strong> of becoming a skilled and versatile hairdresser. I want to soak up every bit of knowledge and experience, and then pay it forward by helping others step into this exciting world.</p>
        <p class="is-size-5">But wait, there's more to me than just the salon life. In my personal world, <strong>my friends and family hold a special place</strong>. They're my anchors, the ones who keep me grounded and inspired. And guess what? Even if I weren't getting paid, I'd still be here at Base, loving every minute of it. This place is like a second home, and the comfort and warmth I feel here are beyond words.</p>
        <p><strong>I've got this knack for making people feel right at home</strong> – a true gift for turning strangers into friends and I'm often the go-to helper for our super experience stylists. It's a pretty awesome feeling to know that my skills are valued.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p class="is-size-5">With about a year in the hairdressing world as a Saturday girl under my belt, <strong>I'm proud to say that my biggest accomplishment is landing this apprenticeship at Base</strong>. It's a testament to my dedication and passion for this craft.</p>
        <p class="is-size-5">When it comes to my clients, <strong>I'm all about solving problems and spreading good vibes</strong>. They often praise me for being friendly and approachable, making their time in the salon a breeze.</p>
        <p class="is-size-5">So, who's my ideal client, you ask? Well, it's someone who's up for a good chat and a friendly connection. <strong>If you're looking for a stylist who's not only skilled but also a great conversationalist, I'm your gal</strong>.</p>
        <p class="is-size-4">Looking ahead, I've got big dreams. First on the list: <strong>becoming a fully qualified hairdresser</strong>. But I'm not stopping there – I want to push boundaries, experiment with new techniques, and share my knowledge with aspiring hairstylists. Together, we'll create magic in every strand.</p>
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
      <br><br>
      <router-link class="button is-small is-white" :to="{ name: 'team', hash: '#jasmine' }">
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
