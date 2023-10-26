<template>
  <div id="shop">
    <section class="hero is-small">
      <div class="hero-body">
        <br><br>
        <h2 class="title-new-sub is-3 has-text-white">
          THE BASE SHOP
        </h2>
      </div>
    </section>
    <StoreCarousel :banners="storeData.banners"/>
    <br>
    <div class="columns is-multiline">
      <div v-for="image in storeData.tiles" class="column is-4">
        <div class="box is-flex is-flex-direction-column is-justify-content-space-between ">
          <img :src="`/dist/img/store/tiles/${image.image}`" alt="">
          <div class="container p-3">
            <h3 class="new-title is-size-4">{{ image.brand }}</h3>
            <p class="is-size-6">{{ image.description }}</p>
          </div>
          <div class="has-text-centered mb-3">
            <a :href="image.url" class="button is-small is-dark">SHOP {{ image.title }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section store-info has-text-white">
      <p>Welcome to <strong>The Base Shop</strong>, where excellence meets your everyday haircare needs. We take pride in offering a curated selection of only the finest professional haircare brands, including trusted names like
        <strong>GHD</strong>, <strong>Schwarzkopf</strong>, <strong>Olaplex</strong>, and <strong>Kevin Murphy</strong>.</p>
      <p>At <strong>Base Hairdressing</strong>, we believe that your hair deserves the very best. That's why we exclusively stock brands that we use in the salon and are known for their exceptional performance and results. Step into our online shop and experience a world of premium haircare, carefully selected to help you achieve the vibrant, healthy locks you deserve!</p>
      <p>Plus, for your convenience, we offer both <strong>at-home delivery</strong> and a convenient <strong>click-and-collect</strong> service to ensure you can get your favourite products in the way that suits you best.</p>
      <br>
      <a href="https://shop.phorest.com/businesses/l4Fu5XgHuhR9SEX-1sCrhQ/branches/AONcuPZxFAaslwcLxL_3fw" class="button is-primary">SHOP NOW</a>
    </div>
  </div>
</template>
<script>
import StoreCarousel from "../components/onlineStore/StoreCarousel.vue";

export default {
  components: {StoreCarousel},

  data() {
    return {
      storeData: {}
    }
  },
  mounted() {
    axios.get("/api/store-data").then(response => this.storeData = response.data)
        .catch(error => {
          console.log(error)
        })
  }
}
</script>
<style scoped>
#shop {
  background-color: #16181c;
}

.box {
  padding: 0 0 0.7rem;
}

.column .box {
  height: 100%;
}

.store-info {
  padding-top: 0;
}
</style>
