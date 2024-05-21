<template>

 <div class="bg-white flex rounded-lg justify-between shadow-md sm:flex-wrap">
  <div class="md:p-4  p-2 flex gap-2 md:gap-5">
    <img src="/img/image 3.svg" class="md:w-32 w-fit" alt="">
    <div>
      <div class="flex">
        <div>
          <h5 class="font-bold text-lg md:text-2xl md:mb-2 text-primary-300">Title</h5>
        </div>
      </div>
      <div class="md:flex grid grid-cols-2 grid-rows-1 md:items-center md:justify-between  md:gap-4 md:mb-2">
        <div class="flex gap-2">
          <div class="md:mr-2   text-sm text-primary-400">Size:</div>
          <div class="text-primary-300 text-sm font-semibold">M </div>
        </div>
        


        <div class="flex gap-2">
          <div class="md:mr-2  text-sm text-gray-700"> Color:</div>
          <div class="font-semibol text-primary-300  text-sm">Black</div>
        </div>
        
        <div class="flex ">
          <div class="md:mr-2 flex mt-1 md:mt-0 text-sm  text-primary-400 ">Qty:<div>
            <div class="px-2">
          <div class="flex items-center  w-16 border rounded-lg">
            <button
              @click="decrement"
              class="flex items-center justify-center w-5 h-5 text-gray-700 rounded-l-lg hover:bg-gray-200"
            >
              -
            </button>
            <span class="w-8 text-center">{{ quantity }}</span>
            <button
              @click="increment"
              class="flex items-center justify-center w-5 h-5 text-gray-700 rounded-r-lg hover:bg-gray-200"
            >
              +
            </button>
          </div>

        </div>
        </div>
          
        </div></div>
      </div>
      <div class="flex gap-6 md:mt-0 mt-1 md:gap-7">
        <p class="text-primary-300 font-medium ">₹799</p>
        <p class="text-sm  line-through flex  text-primary-300">MRP ₹999</p>
      </div> 
      <p class="text-sm text-secondary-300">inclusive of all taxes</p>
      <div class="md:hidden flex justify-end gap-3 mt-4">
          <img src="/product-checkout/deletecheckout.svg" alt="Delete icon">
          <p class="text-sm text-secondary-red text-end">Move to Wishlist</p>
      </div>
      <div class=" items-center md:block  hidden mt-3">
        <img class="mt-1 " src="/product-checkout/return.svg" alt="">
        <p class="text-sm text-gray-700 "><span class="text-primary-300  text-lg">14 days</span> return available</p>
      </div>
    </div>
  </div>
  
  <div class=" rounded-lg mt-3 mx-3 md:block hidden md:flex-col bg-white">
    <div class=" flex justify-end">
      <img src="/product-checkout/deletecheckout.svg" alt="Delete icon">
    </div>
    <div class="md:mt-32 text-secondary-red">
      <p class="text-center">Move to Wishlist</p>
    </div>
  </div>
</div>

</template>


<script setup>
import { ref } from 'vue';

const quantity = ref(1);

const increment = () => {
  quantity.value++;
};

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

</script>