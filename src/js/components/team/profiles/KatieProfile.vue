<template>
  <div id="profile" class="section has-text-white">
    <div class="columns">
      <div class="column is-7">
        <div class="profile-title">
          <h1>HEY THERE, I'M<br><span>KATIE.</span></h1>
        </div>
        <p class="is-size-5">I'm a passionate graduate stylist <strong>on a mission to create hair magic</strong>. With a dash of Sagittarius determination, I'm all about crafting incredible transformations that leave my clients beaming. My true artistic flair shines in hair ups, where I get to let my creativity run wild. <strong>The spotlight shone on me when I clinched an avant-garde hair up award in 2022</strong> – a testament to my innovation and skill.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/katie/katie_1.jpg" alt="Katie">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/katie/katie_2.jpg" alt="Katie">
        </figure>
      </div>
      <div class="column is-7 is-size-5">
        <p>For me, this isn't just a job – <strong>it's a calling to bring joy and confidence</strong> to every chair I touch. Whether it's suggesting the perfect products or cheering up a client, <strong>I'm all in</strong>.</p>
        <p>My knack for motivating and connecting with others has made me a cherished team member. And if you're wondering, <strong>I'd still be here even if I wasn't getting paid</strong> – that's how much I adore making people happy.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-7 is-size-5">
        <p>Beyond the salon, I'm grooving to the rhythm of 80's music and soaking in live performances.</p>
        <p>My journey into hairdressing started amidst my media makeup course, but <strong>my heart swiftly swayed towards hair</strong>. Fast forward three years, and I've become an expert in delivering exceptional service and unforgettable experiences.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="/dist/img/team/profiles/katie/katie_3.jpg" alt="Katie">
        </figure>
      </div>
    </div>
    <div class="columns is-reversed-mobile">
      <div class="column">
        <figure class="image">
          <img src="/dist/img/team/profiles/katie/katie_4.jpg" alt="Katie">
        </figure>
      </div>
      <div class="column is-7 is-size-5">
        <p>As I journey forward, <strong>I've set my sights on teaching hair</strong>. But for now, <strong>I'm relishing in the world of hairdressing</strong>, where every day brings a new canvas to paint my creativity upon.</p>
      </div>
    </div>
    <div>
      <hr>
      <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
      <a href="https://www.instagram.com/hair_bykatelouise/">
        <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span>
          beautybykatelouise</p>
      </a>
      <br>
      <router-link class="button is-primary" :to="{ name: 'stylist-prices', params: { stylist: 'katie' } }">Get a quote
        with me!
      </router-link>
      <br><br>
      <router-link class="button is-small is-white" :to="{ name: 'team', hash: '#katie' }">
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
