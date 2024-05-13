<template>
   <div class="py-3 px-3 md:hidden block logo shadow-md w-full">
        <router-link :to="{ name: 'HomePage' }">
          <img src="/default/logo-navbar.svg" alt="logo" />
        </router-link>
      </div>
  <div class="md:mx-5 cursor-pointer">
    <div class="flex md:px-8 px-2 py-4 md:flex-row md:space-x-4 justify-between">
      <div class="py-2 md:block hidden logo">
        <router-link :to="{ name: 'HomePage' }">
          <img src="/default/logo-navbar.svg" alt="logo" />
        </router-link>
      </div>

     

      <div class="flex md:w-fit w-44 text-center min-w-fit mx-auto">
        <div @click="tab='bag'" :class="{ 'bg-primary-300': tab === 'bag', 'text-white': tab === 'bag', 'text-black': tab !== 'bag' }" class="flex items-center font-bold justify-center md:w-12 w-8 h-8 md:h-12 text-center border rounded-full">
          1
        </div>

        <div class="md:mt-3 mt-2 mx-1 md:text-base text-xs md:px-2 font-bold">Bag</div>
        <hr class="md:mt-6 mt-4 text-primary-300 px-4 m-1 mx-1 md:px-7 md:m-1 md:mx-2 flex">

        <div @click="tab='address'" :class="{ 'bg-primary-300': tab === 'address', 'text-white': tab === 'address', 'text-black': tab !== 'address' }" class="flex items-center font-bold justify-center md:w-12 w-8 h-8 md:h-12 text-center border rounded-full">
          2
        </div>

        <label class="md:mt-3 mt-2 mx-1 md:text-base text-xs md:px-2 font-bold">Address</label>
        <hr class="md:mt-6 mt-4 text-primary-300 px-4 m-1 mx-1 md:px-7 md:m-1 md:mx-2 flex">

        <div class="flex items-center font-bold justify-center text-black md:w-12 w-8 h-8 md:h-12 text-center border rounded-full">
          3
        </div>
        <label class="md:mt-3 mt-2 mx-1 md:text-base text-xs md:px-2 font-bold">Payment</label>
      </div>
      <div></div>
    </div>
    <hr class="w-full md:m-2 md:mb-2 flex text-primary-300">

    <component :is="tab" />
  </div>
</template>

<script>
import bag from '../../../components/bag/index.vue'
import address from '../../../components/address/index.vue'

export default {
  data() {
    return {
      tab: "bag"
    }
  },
  components: {
    bag,
    address,
  }
}
</script>
