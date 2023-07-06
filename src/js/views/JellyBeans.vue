<template>
  <section class="section jellybeans hero is-fullheight is-dark">
    <div class="columns">
      <div class="column is-5-desktop">
        <img src="/dist/img/base_logo.svg" alt="Base Hairdressing" width="350">
        <br><br>
        <h1 class="title is-2">We've teamed up with</h1>
        <img src="/dist/img/jellybeans/jellybeans-logo.png" alt="Jellybeans" width="300">
        <p class="is-size-3">to bring you this incredible offer!</p>
        <div class="column is-8 has-text-centered is-paddingless">
          <div class="box">
            <p class="offer-head">25% <span>Off</span></p>
            <p class="offer-sub">your first visit</p>
            <p class="offer-terms">(for new clients to Base - not with any other offer)</p>
          </div>
        </div>
        <br>
        <p class="is-size-4">Base is located right in the centre of Warrington on Bridge Street.</p>
        <p class="is-size-4">The Base Team comprises Apprentices, Junior Stylists and Graduates all offering cutting edge services at a fraction of the cost!</p>
        <p class="is-size-5">All services are fully supervised by Senior Stylists and all of our usual high quality products are used.</p>
        <p class="is-size-5"><strong>To redeem the offer simply bring your Jellybeans loyalty card to your appointment!</strong></p>
        <br>
        <router-link :to="{name: 'prices'}" class="button">Get a quote here</router-link>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  img {
    padding: 0;
  }

  .box {
    background-color: rgba(61, 12, 79, 0.8);
    color: #FFFFFF;
    .offer-head {
      font-size: 4rem;
      margin-bottom: .5rem;
      font-weight: bolder;
      span {
        font-size: 3rem;
      }
    }
    .offer-sub {
      font-size: 2rem;
      font-family: itc-american-typewriter, serif;
    }
    .offer-terms {
      font-size: .7rem;
    }
  }
</style>