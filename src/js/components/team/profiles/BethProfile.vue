<template>
  <div id="profile" class="section has-text-white">
    <div class="section columns">
      <div class="column is-7">
        <h1 class="title is-2 has-text-white">Beth Brown</h1>
        <p class="is-size-5">Hiya, I’m Beth.  I've been hairdressing for almost 2 years now and have been working in the hair industry for nearly 3 years.
          Originally I didn’t consider becoming a hair stylist, that was until I got a Saturday job in a hair salon and since that day there’s nothing I’ve wanted to do more!</p>
        <p>There is so much more to hairdressing than meets the eye and I find it really intriguing. I feel like I’m constantly learning and I love how creative it can be.</p>
        <p>So I started my apprenticeship at another salon and then I heard about <strong>Base</strong> being a training academy that focused on helping apprentices like myself to become an outstanding stylist.
          <em>This is what made me want to go with Base for my training because not only am I learning the trade but I’m
            learning it to a high professional standard.</em></p>
        <p>When it comes to hairdressing itself, one of the things I enjoy the most is achieving what a client wants and making them feel good about themselves.
          I think it’s really important for people to feel good about themselves...so getting your hair done and having that time in the salon to chill out and relax is all part of the clients experience when in with me.</p>
      </div>
      <div class="column">
        <div class="tile is-ancestor">
          <div class="tile section is-10">
            <figure class="image">
              <img src="/dist/img/team/profiles/beth/p1.jpg" alt="Beth">
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="section columns">
      <div class="column">
        <div class="tile is-ancestor is-flex">
          <div class="tile is-parent is-vertical">
            <div class="tile is-child">
              <figure class="image">
                <img src="/dist/img/team/profiles/beth/hp1.jpg">
              </figure>
            </div>
            <div class="tile is-child">
              <figure class="image">
                <img src="/dist/img/team/profiles/beth/hp2.jpg">
              </figure>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <div class="tile is-child">
              <figure class="image">
                <img src="/dist/img/team/profiles/beth/hp3.jpg">
              </figure>
            </div>
            <div class="tile is-child">
              <figure class="image">
                <img src="/dist/img/team/profiles/beth/hp4.jpg">
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-7">
        <p class="is-size-5">One of my favourite things so far in hairdressing is <strong>working with colour</strong>, especially colours that stand out.
          I love how creative it can be and love coming up with different looks for each client.</p>
        <p>On the other hand I’m really enjoying learning about all the different <strong>cuts and cutting techniques.</strong>
          Some cuts can be more complex than they look, so when I learn them I really enjoying finding out how they are done.</p>
        <p>When it comes to products there are so many that I love but I’d say my two favourite would be the <strong>Schwarzkopf
          Liquid Shine</strong> because of it being nourishing, tames frizz and helps hold the colour at the same time, I use this myself and it’s perfect for keeping my red hair looking shiny and bright!</p>
        <p>The next product I love is the <strong>Schwarzkopf Keratin Smooth treatment</strong>, this I couldn’t recommend more, I used this on my hair when it was really messy and frizzy and it left it in such better condition feeling soft shiny and fresh.</p>
        <p>Moving on, one of my main influencers in the hair industry is <strong>Guy Tang</strong>, <em>I absolutely am
          in love with the work he creates on a humans head!</em>
          I follow him on social media and often watch the different styles and looks he comes out with.
          Someone else I came across a long time ago was <strong>Kim Kimble</strong>, she’s more of a celebrity hair stylist who’s work is also amazing, her motto is
          <em>“beautifying the world, one head at a time.”</em> Which I think couldn’t be more true.</p>
      </div>
    </div>
    <div class="section columns">
      <div class="column is-7">
        <p class="is-size-5">Over the next few years I see myself becoming one of <strong>the best hairstylist in my
          company</strong> and then to continue growing from there to hopefully one of the best in Warrington and on and on from there.</p>
        <p>Finishing off, I have a few personal interests outside of work, I really enjoy working out so I go to the gym and train there often, I also use my gym to chill out sometimes too because it has a swimming pool there and a spa which is needed after a long day of learning :).</p>
          <p>Not only this but also I do boxing, I've been boxing since being in high school, it’s something I really love and have a passion for just like hairdressing.
          I also recently started yoga which I’m loving too! I also love having a drink with my friends outside of work, like on the weekends anywhere with good music and we’re there!
          That’s something else I absolutely love, music... especially live music, sometimes I’ll even get up and have a sing myself lol.
            <em>But the thing I love more than anything is doing stuff that makes me and who ever I’m out with happy</em>, my friends would say I’m the entertainer of the group constantly doing stuff to ensure everyone is feeling good:).</p>
        <hr>
        <p class="title is-4 has-text-white">To see more of my work check out my Instagram page</p>
        <p class="subtitle is-size-6 has-text-white">and dont forget to like and follow!</p>
        <a href="https://www.instagram.com/hairbabe.b/">
          <p class="is-size-5 has-text-white"><span class="icon"><i class="fab fa-instagram-square"></i></span> hairbabe.b</p>
        </a>
      </div>
      <div class="column">
        <div class="tile is-ancestor is-flex">
          <div class="tile is-parent is-vertical">
            <div class="tile is-child">
              <figure class="image">
                <img src="/dist/img/team/profiles/beth/p2.jpg">
              </figure>
            </div>
            <div class="tile is-child">
              <figure class="image">
                <img src="/dist/img/team/profiles/beth/hp6.jpg">
              </figure>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <div class="tile is-child">
              <figure class="image">
                <img src="/dist/img/team/profiles/beth/hp7.jpg">
              </figure>
            </div>
            <div class="tile is-child">
              <figure class="image">
                <img src="/dist/img/team/profiles/beth/hp8.jpg">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showOffer" class="section">
      <h2 class="title is-3 has-text-white">Special Offer with me!</h2>
      <p>To help me develop my skills and build my client base I'm offering a Colour & Cut at a special price for new clients.</p>
      <router-link class="has-text-white is-size-4" :to="{ name: 'offers' }">Click here to find out more ></router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showOffer: true
      }
    }
  }
</script>