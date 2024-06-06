<template>
  <div class="block w-full px-3 py-3 shadow-md md:hidden logo max-w-20">
    <router-link :to="{ name: 'home' }">
      <img src="/public/default/8-orbit-logo-homepage.png" alt="logo" />
    </router-link>
  </div>
  <div class="cursor-pointer md:mx-5">
    <div
      class="flex justify-between px-2 py-4 md:px-8 md:flex-row md:space-x-4"
    >
      <div class="hidden py-2 md:block logo max-w-24">
        <router-link :to="{ name: 'home' }">
          <img src="/public/default/8-orbit-logo-homepage.png" alt="logo" />
        </router-link>
      </div>

      <div class="flex mx-auto text-center md:w-fit w-44 min-w-fit">
        <div
          @click="tab = 'Bag'"
          :class="{
            'bg-primary-300': tab === 'Bag',
            'text-white': tab === 'Bag',
            'text-black': tab !== 'Bag',
          }"
          class="flex items-center justify-center w-8 h-8 font-bold text-center border rounded-full md:w-12 md:h-12"
        >
          1
        </div>

        <div class="mx-1 mt-2 text-xs font-bold md:mt-3 md:text-base md:px-2">
          Bag
        </div>
        <hr
          class="flex px-4 m-1 mx-1 mt-4 md:mt-6 text-primary-300 md:px-7 md:m-1 md:mx-2"
        />

        <div
          :class="{
            'bg-primary-300': tab === 'TheAddress',
            'text-white': tab === 'TheAddress',
            'text-black': tab !== 'TheAddress',
          }"
          class="flex items-center justify-center w-8 h-8 font-bold text-center border rounded-full md:w-12 md:h-12"
        >
          2
        </div>

        <label
          class="mx-1 mt-2 text-xs font-bold pointer:none md:mt-3 md:text-base md:px-2"
          >Address</label
        >
        <!-- <hr
          class="flex px-4 m-1 mx-1 mt-4 md:mt-6 text-primary-300 md:px-7 md:m-1 md:mx-2"
        /> -->

        <!-- <div
          @click="tab = 'ThePayment'"
          :class="{
            'bg-primary-300': tab === 'ThePayment',
            'text-white': tab === 'ThePayment',
            'text-black': tab !== 'ThePayment',
          }"
          class="flex items-center justify-center w-8 h-8 font-bold text-center border rounded-full md:w-12 md:h-12"
        >
          3
        </div>
        <label class="mx-1 mt-2 text-xs font-bold md:mt-3 md:text-base md:px-2"
          >Payment</label
        > -->
      </div>
      <div></div>
    </div>
    <hr class="flex w-full md:m-2 md:mb-2 text-primary-300" />

    <component
      :is="tab"
      @changeTab="changeTab"
      @placeOrder="changeToPaymentTab"
    />
  </div>
</template>

<script>
import Bag from "../../../components/bag/index.vue";
import TheAddress from "../../../components/the-address/index.vue";
import ThePayment from "../../../components/payment-gateway/index.vue";

export default {
  data() {
    return {
      tab: "Bag",
    };
  },
  components: {
    Bag,
    TheAddress,
    ThePayment,
  },
  methods: {
    changeTab(newTab) {
      this.tab = newTab;
    },
    changeToPaymentTab() {
      this.tab = "ThePayment";
    },
  },
};
</script>
