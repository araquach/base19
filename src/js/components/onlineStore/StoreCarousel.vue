<template>
  <b-carousel :indicator-inside="true">
    <b-carousel-item v-for="(item, i) in banners" :key="i">
      <a :href="item.url">
        <b-image class="image is-hidden-tablet" :src="`/dist/img/store/banners/mobile/${item.image}`"></b-image>
        <b-image class="image is-hidden-mobile" :src="`/dist/img/store/banners/desktop/${item.image}`"></b-image>
      </a>
    </b-carousel-item>
  </b-carousel>
</template>
<script>
export default {
  props: ['banners'],
}
</script>

<style>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
</style>