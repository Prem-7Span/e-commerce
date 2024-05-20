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
      <div class="md:flex grid grid-cols-2 grid-rows-1 md:items-center md:justify-between  md:gap-2 md:mb-2">
        <div class="md:mr-2   text-sm text-primary-400">Size: <span class="text-primary-300 font-semibold">M</span> </div>
        <div class="md:mr-2  text-sm text-gray-700"> Color:   <span class="font-semibold">Black</span></div>
        <div class="md:mr-2 mt-1 md:mt-0 text-sm  text-primary-400 "> Qty: <span><div>
          
        </div></span></div>
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