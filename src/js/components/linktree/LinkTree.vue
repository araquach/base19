<template>
  <div id="link-tree" class="section columns is-centered is-mobile">
    <div class="column is-7 has-text-centered is-size-5">
      <div>
        <img src="/dist/img/linktree/linktree.png" alt="Base Hairdressing" width="230">
      </div>
      <h1 class="title-new is-2 lt-title">THE BASE HAIRDRESSING<br>TRAINING ACADEMY</h1>
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
      <router-link :to="{ name: 'main' }" class="box lt-website">
        <span class="title-new-mid has-text-white">WEBSITE</span>
      </router-link>

      <div class="columns social is-mobile is-centered">
        <div class="column is-2">
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
</template>
<script setup>
</script>