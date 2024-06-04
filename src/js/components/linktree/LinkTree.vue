<template>
  <div id="link-tree" class="has-text-centered">
    <div class="section pt-5">
      <router-link :to="{name: 'home'}">
        <img src="/dist/img/linktree/linktree.png" alt="Base Hairdressing" width="230">
      </router-link>
      <h1 class="title-new is-3 lt-title">THE BASE HAIRDRESSING<br>TRAINING ACADEMY</h1>
    </div>
    <div class="section columns is-centered is-mobile">
      <div class="column is-9 has-text-centered is-size-5">
        <a v-if="$route.path === '/links'" href="https://www.salonhub.uk/skintest-renew/3" class="box lt-blog">
          <span class="title-new-mid has-text-white">SKIN TEST UPDATE</span>
        </a>
        <router-link :to="{ name: 'referrals' }" class="box lt-refer">
          <span class="title-new-mid has-text-white">REFER A FRIEND</span>
        </router-link>
        <router-link :to="{ name: 'bookings' }" class="box lt-bookings">
          <span class="title-new-mid">BOOK ONLINE</span>
        </router-link>
        <router-link :to="{ name: 'prices' }" class="box lt-quote">
          <span class="title-new-mid has-text-white">ONLINE QUOTE</span>
        </router-link>
        <router-link :to="{ name: 'joinus'}" class="box lt-join-us">
          <span class="title-new-mid has-text-white">JOIN THE TEAM</span>
        </router-link>
        <router-link :to="{ name: 'models' }" class="box lt-models">
          <span class="title-new-mid has-text-white">MODEL SIGNUP</span>
        </router-link>
        <router-link :to="{ name: 'online-shop' }" class="box lt-shop">
          <span class="title-new-mid has-text-white">THE BASE SHOP</span>
        </router-link>
        <router-link :to="{ name: 'blog-info' }" class="box lt-blog">
          <span class="title-new-mid has-text-white">THE BASE BLOG</span>
        </router-link>

        <div class="columns social is-mobile is-centered">
          <div class="column is-2 is-1-mobile">
            <figure class="image is-square">
              <a href="https://www.instagram.com/basehairdressing/">
                <img src="/dist/img/linktree/instagram.svg" alt="Instagram">
              </a>
            </figure>
          </div>
          <div class="column is-2">
            <figure class="image is-square">
              <a href="https://www.facebook.com/basehairdressing/">
                <img src="/dist/img/linktree/facebook.svg" alt="Facebook">
              </a>
            </figure>
          </div>
          <div class="column is-2">
            <figure class="image is-square">
              <a href="https://www.pinterest.co.uk/basehairdressing/">
                <img src="/dist/img/linktree/pinterest.svg" alt="Pinterest">
              </a>
            </figure>
          </div>
          <div class="column is-2">
            <figure class="image is-square">
              <a href="https://www.tiktok.com/@basehairdressing">
                <img src="/dist/img/linktree/tiktok.svg" alt="TikTok">
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>