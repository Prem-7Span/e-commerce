<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <div
          class="flex flex-col items-center justify-center px-4 py-12 border sm:max-w-md card-3 sm:max-h-52 max-w-40"
        >
          <img src="/home-page/semi-colon.svg" alt="" />
          <p class="text-xs sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Leo volutpat elit quam
            egestas placerat adipiscing faucibus sodales.
          </p>
          <div class="flex px-2 py-3">
            <img src="/stars/yellow-star.svg" alt="yellow-star" />
            <img src="/stars/yellow-star.svg" alt="yellow-star" />
            <img src="/stars/yellow-star.svg" alt="yellow-star" />
            <img src="/stars/yellow-star.svg" alt="yellow-star" />
            <img src="/stars/black-star.svg" alt="black-star" />
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
});
</script>
