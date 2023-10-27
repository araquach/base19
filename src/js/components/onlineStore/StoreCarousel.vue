<template>
  <b-carousel :indicator="false" :pause-info="false">
    <b-carousel-item v-for="(item, i) in banners" :key="i">
      <div class="image-container">
        <!-- Mobile image -->
        <b-image class="image is-hidden-tablet" :src="`/dist/img/store/banners/mobile/${item.image}`"></b-image>
        <!-- Clickable Area for Mobile: Adjust positioning as needed -->
        <a :href="item.url" class="clickable-region is-hidden-tablet"></a>
        <!-- Desktop/Tablet image -->
        <a :href="item.url">
          <b-image class="image is-hidden-mobile" :src="`/dist/img/store/banners/desktop/${item.image}`"></b-image>
        </a>
      </div>
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

.image-container {
  position: relative;
}

.clickable-region {
  position: absolute;
  bottom: 5%;  /* Adjust these values to position */
  left: 5%; /* the clickable region correctly on mobile */
  width: 200px;  /* Set the size of the clickable area */
  height: 120px; /* Set the size of the clickable area */
  cursor: pointer;
  z-index: 1; /* To ensure it's above the image */
}
</style>