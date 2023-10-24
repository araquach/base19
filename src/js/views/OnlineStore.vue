<template>
  <div>
    <StoreCarousel/>
    <div class="section columns is-multiline">
      <div v-for="image in images" class="column is-4">
        <img :src="image" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import StoreCarousel from "../components/onlineStore/StoreCarousel.vue";
export default {
  components: { StoreCarousel },

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