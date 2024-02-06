<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>LILY.</span></h1>
        </div>
        <p class="is-size-5">Hey, I'm Lily, and if there's one thing you should know about me, it's that <strong>I'm always up for a challenge</strong>. Working as a team to achieve something great is my thing, and I thrive on collaborating with different and new people. As an apprentice, I've found my calling and a platform to express <strong>my passion for hair</strong>.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/lily/lily_1.jpg" alt="Lily">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/lily/lily_2.jpg" alt="Lily">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5">In three words, I'd describe myself as <strong>confident, happy, and talkative</strong> – qualities that have always helped me connect with others. At work, what really gets me going is <strong>interacting with new people every single day</strong>. It's like a breath of fresh air, and I absolutely love it.</p>
        <p class="is-size-5">But there's more to me than just my hairstyling journey. I've been an <strong>equestrian enthusiast since I was seven years old</strong>. Horse riding is my escape and a bond that's close to my heart. It's also an interesting fact about me that often surprises people.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7">
        <p class="is-size-5" >While I don't have a specialisation just yet, I've got my eyes set on the future. I'm on a mission to <strong>help people fall in love with their hair</strong>. Professionally, that's what truly drives me – the ability to make someone's day by making their hair shine.</p>
        <p class="is-size-5" >Outside of work, you'll often find me in the company of animals. I'm deeply passionate about <strong>animals and their well-being</strong>. That compassion and care extend to my work as well, where I consistently solve challenges for my clients, helping them rediscover their confidence and beauty.</p>
        <p class="is-size-5" >So, whether it's shampooing or styling, <strong>I pour my heart into every task</strong>. If you're looking for a stylist who's not only enthusiastic but also caring, I'm your go-to. I'm Lily, and I'm here to make your hair dreams come true.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/lily/lily_3.jpg" alt="Lily">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/lily/lily_4.jpg" alt="Lily">
        </figure>
      </div>
      <div class="column is-7">
        <p class="is-size-5"></p>
        <p class="is-size-4"></p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/x.hairbylil.x/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          x.hairbylil.x</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'lily' } }">Get a quote
        with me!
      </router-link>
      <br><br>
      <router-link class="button is-small is-white" :to="{ name: 'team', hash: '#lily' }">
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
