<template>
  <div id="main-parent" class="">
    <router-link :to="{ name: 'product-list' }">
      <div id="banner" class="">
        <!-- <img src="/home-page/homepage-banner.png" alt="banner" /> -->
        <CarousalBanner />
      </div>
    </router-link>

    <div class="container">
      <div class="sm:py-9">
        <div class="py-5 text-xl"><h3>Shop By Category</h3></div>
        <router-link :to="{ name: 'product-list' }">
          <div
            id="category"
            class="flex space-x-3 overflow-hidden bg-primary-offBlack rounded-3xl"
          >
            <div class="relative bg-overlay">
              <img src="/home-page/category-img-1.png" alt="card-1" />
              <div class="absolute z-20 space-y-3 bottom-10 left-5">
                <h2 class="text-base text-white sm:text-5xl">Pants</h2>
                <p class="text-xs text-white sm:text-2xl">Shop Now</p>
              </div>
            </div>
            <div class="space-y-3">
              <div class="relative bg-overlay">
                <img src="/home-page/category-img-2.png" alt="card-2" />
                <div class="absolute z-20 space-y-3 bottom-10 left-5">
                  <h2 class="text-base text-white sm:text-5xl">Trouser</h2>
                  <p class="text-xs text-white sm:text-2xl">Shop Now</p>
                </div>
              </div>
              <div class="relative bg-overlay">
                <img src="/home-page/category-img-3.png" alt="card-3" />
                <div class="absolute z-20 space-y-3 bottom-10 left-5">
                  <h2 class="text-base text-white sm:text-5xl">T-shirts</h2>
                  <p class="text-xs text-white sm:text-2xl">Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="sm:pt-9">
        <div class="py-5 text-xl"><h3>Deal of the day</h3></div>
        <router-link :to="{ name: 'product-list' }">
          <div
            id="category"
            class="flex space-x-3 overflow-hidden bg-primary-offBlack rounded-3xl"
          >
            <div id="col-1" class="space-y-3">
              <div class="relative bg-overlay">
                <img src="/public/home-page/deals-img-1.png" alt="card-1" />
                <div class="absolute z-20 space-y-3 bottom-10 left-5">
                  <h2 class="text-base text-white sm:text-5xl">UPTO 40% OFF</h2>
                  <p class="text-xs text-white sm:text-2xl">Explore more</p>
                </div>
              </div>
              <div class="relative bg-overlay">
                <img src="/public/home-page/deals-img-2.png" alt="card-1" />
                <div class="absolute z-20 space-y-3 bottom-10 left-5">
                  <h2 class="text-base text-white sm:text-5xl">UPTO 40% OFF</h2>
                  <p class="text-xs text-white sm:text-2xl">Explore more</p>
                </div>
              </div>
            </div>
            <div id="col-2" class="pt-16 space-y-3">
              <div class="relative bg-overlay">
                <img src="/public/home-page/deals-img-3.png" alt="card-2" />
                <div class="absolute z-20 space-y-3 bottom-10 left-5">
                  <h2 class="text-base text-white sm:text-5xl">UPTO 40% OFF</h2>
                  <p class="text-xs text-white sm:text-2xl">Explore more</p>
                </div>
              </div>
              <div class="relative bg-overlay">
                <img src="/public/home-page/deals-img-4.png" alt="card-3" />
                <div class="absolute z-20 space-y-3 bottom-10 left-5">
                  <h2 class="text-base text-white sm:text-5xl">UPTO 40% OFF</h2>
                  <p class="text-xs text-white sm:text-2xl">Explore more</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="pt-14">
        <div class="py-5 text-xl">New Arrivals</div>
        <div id="parent-card">
          <div
            class="grid grid-cols-2 grid-rows-4 gap-5 md:gap-8 md:grid-cols-4 md:grid-rows-2"
          >
            <ProductCard
              v-for="(product, index) in productData"
              :key="index"
              :product="product"
            />
          </div>
        </div>
      </div>

      <div class="pt-14">
        <div class="py-2 text-xl"><h2>Highlights</h2></div>
        <div
          class="flex flex-col items-center justify-between space-x-5 sm:flex-row bg-gray-50"
        >
          <div class="w-full sm:order-2">
            <img src="/public/home-page/highlights-img-1.png" alt="" />
          </div>
          <div class="pt-3 text-xs md:text-lg">
            <p class="px-3">
              Lorem ipsum dolor sit amet consectetur. Elementum senectus ante
              orci at eget gravida fringilla sed. Mi lectus imperdiet auctor ut
              faucibus sem odio. Arcu fermentum faucibus donec et lorem nunc
              morbi. Vulputate blandit quam est vitae aliquet eget blandit.
            </p>
            <div class="flex px-2 py-3">
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/black-star.svg" alt="black-star" />
            </div>
          </div>
        </div>
      </div>

      <div class="sm:pt-14">
        <!-- <CarousalReview /> -->

        <!-- <div class="py-2 text-xl"><h2>Customer Reviews</h2></div>
        <div class="flex items-center justify-center space-x-3">
          <div
            class="flex flex-col items-center justify-center px-4 py-12 border sm:max-w-md card-2 sm:max-h-52 max-w-40"
          >
            <img src="/public/home-page/semi-colon.svg" alt="" />
            <p class="text-xs sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Leo volutpat elit quam
              egestas placerat adipiscing faucibus sodales.
            </p>
            <div class="flex px-2 py-3">
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/black-star.svg" alt="black-star" />
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center px-4 py-12 border sm:max-w-md card-2 sm:max-h-52 max-w-40"
          >
            <img src="/public/home-page/semi-colon.svg" alt="" />
            <p class="text-xs sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Leo volutpat elit quam
              egestas placerat adipiscing faucibus sodales.
            </p>
            <div class="flex px-2 py-3">
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/black-star.svg" alt="black-star" />
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center px-4 py-12 border sm:max-w-md card-3 sm:max-h-52 max-w-40"
          >
            <img src="/public/home-page/semi-colon.svg" alt="" />
            <p class="text-xs sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Leo volutpat elit quam
              egestas placerat adipiscing faucibus sodales.
            </p>
            <div class="flex px-2 py-3">
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/yellow-star.svg" alt="yellow-star" />
              <img src="/public/stars/black-star.svg" alt="black-star" />
            </div>
          </div>
        </div> -->
      </div>

      <div class="py-14">
        <div class="py-2 text-xl"><h2>Check us out on Instagram</h2></div>
        <div class="flex items-center justify-between space-x-3">
          <div><img src="/public/home-page/instagram-img-1.png" alt="" /></div>
          <div><img src="/public/home-page/instagram-img-2.png" alt="" /></div>
          <div><img src="/public/home-page/instagram-img-3.png" alt="" /></div>
          <div><img src="/public/home-page/instagram-img-4.png" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarousalBanner from "@/components/home-page/carousal-banner.vue";
import CarousalReview from "@/components/home-page/carousal-review.vue";
import axios from "axios";
import ProductCard from "../../../components/card/product-card.vue";

export default {
  data() {
    return {
      productData: [],
    };
  },
  components: {
    CarousalBanner,
    ProductCard,
    CarousalReview,
  },
  mounted() {
    axios
      .get("https://api.8orbit.shop/api/v1/product")
      .then((response) => {
        console.log("Products fetched successfully:", response);
        this.productData = response.data.product;
        this.productData.splice(0, 4);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  },
};
</script>
