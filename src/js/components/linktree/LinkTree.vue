<template>
  <div id="link-tree" class="section columns is-centered">
    <div class="column is-7 has-text-centered is-size-5 has-text-weight-bold">
      <img src="/dist/img/linktree/linktree.png" alt="Base Hairdressing" width="130">
      <p class="is-size-4 has-text-weight-bold has-text-white">@basehairdressing</p>
      <router-link :to="{ name: 'prices' }" class="box">
        Get a tailor made price with our quote generator
      </router-link>
      <router-link :to="{ name: 'about'}" class="box">
        Find out what Base is all about!
      </router-link>
      <router-link :to="{ name: 'team' }" class="box">
        Learn all about our amazing team members
      </router-link>
      <router-link :to="{ name: 'offers' }" class="box">
        Check out our latest offers
      </router-link>
      <router-link :to="{ name: 'models' }" class="box">
        Sign up to be a model on our training days
      </router-link>
      <router-link :to="{ name: 'joinus' }" class="box">
        Want to join our team? Apply here
      </router-link>
      <router-link v-for="newsItem in newsItems" :key="newsItem.id" :to="{ name: 'blog-post', params: {slug: newsItem.slug} }" class="box">
        {{ newsItem.title }}
      </router-link>
      <div class="columns social is-mobile">
        <div class="column is-2 is-offset-3">
          <figure class="image is-square">
            <a href="https://www.instagram.com/basehairdressing/">
              <img src="/dist/img/home/social/Insta2.svg" alt="Instagram">
            </a>
          </figure>
        </div>
        <div class="column is-2">
          <figure class="image is-square">
            <a href="https://www.facebook.com/basehairdressing/">
              <img src="/dist/img/home/social/fb.svg" alt="Facebook">
            </a>
          </figure>
        </div>
        <div class="column is-2">
          <figure class="image is-square">
            <a href="https://www.pinterest.co.uk/basehairdressing/">
              <img src="/dist/img/home/social/pinterest.svg" alt="Pinterest">
            </a>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      newsItems: state => state.base.newsItems
    }),
  }
}
</script>