<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>BROOKE.</span></h1>
        </div>
        <p class="is-size-4">From a young age, I knew hairdressing was where I was meant to be. I was the kid who wouldn’t let anyone else near my hair, not even my mum! I’ve always had a deep love for all things hair and self expression. Now, I’m turning that passion into a career as an Apprentice Stylist here at Base.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/brooke/brooke_1.jpg" alt="Brooke">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/brooke/brooke_2.jpg" alt="Brooke">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5">The best part of my job? Definitely learning. I thrive in practical environments where I can be hands on and I'm especially loving learning foiling techniques. I find the complexity of colour work so exciting and I love seeing the transformations come to life through the process.</p>
        <p class="is-size-5">I started my journey early, working Saturdays at our sister salons PK & Jakata at just 14. That experience confirmed that the salon energy, the creativity and the constant learning were exactly what I needed. I’m not one to sit still at all, I need to be moving, doing, talking and hairdressing fits me perfectly.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p class="is-size-5">Outside of the salon, I’m either on the netball court, catching up with friends, or enjoying time with my family. I’m a big believer in living life with joy, staying true to yourself and spreading positive energy wherever you go.</p>
        <p class="is-size-5">My clients can expect more than just a service, they can expect a vibe. I’m talkative, upbeat and genuinely love making people feel great about themselves. Whether it’s through a killer blow dry or just a great chat, I aim to help people walk out feeling confident and cared for.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/brooke/brooke_3.jpg" alt="Brooke">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/brooke/brooke_4.jpg" alt="Brooke">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5">Looking ahead, I dream of one day running my own salon, creating a space that’s as vibrant and welcoming as I aim to be every day. But for now, I’m soaking up every moment of this incredible opportunity at Base and giving it my all!</p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/bb.hair_/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          bb.hair_</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'brooke' } }">Get a quote
        with me!
      </router-link>
      <br><br>
      <router-link class="button is-small is-white" :to="{ name: 'team', hash: '#brooke' }">
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
