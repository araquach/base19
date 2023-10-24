<template>
  <b-carousel :indicator-inside="true">
    <b-carousel-item v-for="(item, i) in images" :key="i">
      <a href=""><b-image class="image" :src="item"></b-image></a>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/dist/img/store/tiles/bc.png',
        '/dist/img/store/tiles/fibre_clinix.png',
        '/dist/img/store/tiles/ghd.png',
        '/dist/img/store/tiles/k18.png'
      ]
    }
  }
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