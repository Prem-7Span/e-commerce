<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <img src="/home-page/home-banner-1.png" alt="" />
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <img src="/home-page/home-banner-2.png" alt="" />
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <img src="/home-page/home-banner-3.png" alt="" />
      </div>
    </Slide>
    <Slide v-for="slide in 1" :key="slide">
      <div class="carousel__item">
        <img src="/home-page/home-banner-4.png" alt="" />
      </div>
    </Slide>
  </Carousel>
</template>
<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>
