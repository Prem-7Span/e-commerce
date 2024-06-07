<template>
  <footer class="py-2 bg-primary-offBlack dark:bg-gray-900">
    <div class="mx-4">
      <div class="grid grid-cols-2 md:gap-5 md:px-2 lg:py-4 md:grid-cols-4">
        <div>
          <h2 class="mb-2 text-xl font-semibold text-white dark:text-white">
            Support
          </h2>
          <ul class="font-medium text-white dark:text-gray-400">
            <li class="mb-1">
              <a href="#" class="hover:underline">Contact Us</a>
            </li>
            <li class="mb-1">
              <a href="#" class="hover:underline">Order Status</a>
            </li>
            <li class="mb-1">
              <a href="#" class="hover:underline">Shipping details</a>
            </li>
            <li class="mb-1">
              <a href="#" class="hover:underline">Initiate Return</a>
            </li>
          </ul>
        </div>
        <div class="order-3 md:order-2">
          <h2 class="text-xl font-semibold text-white uppercase md:mb-6 dark:text-white"></h2>
          <ul class="font-medium text-white dark:text-gray-400">
            <li class="mb-1">
              <a href="#" class="hover:underline">FAQs</a>
            </li>
            <li class="mb-1">
              <a href="#" class="hover:underline">Return Policy</a>
            </li>
          </ul>
        </div>
        <div class="order-2 md:order-3">
          <h2 class="mb-2 text-xl font-semibold text-white dark:text-white">
            About
          </h2>
          <ul class="font-medium text-white dark:text-gray-400">
            <li class="mb-1">
              <a href="#" class="hover:underline">About Us</a>
            </li>
            <li class="mb-1">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li class="mb-1">
              <a href="#" class="hover:underline">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div class="order-4 hidden md:block">
          <h2 class="text-xl font-semibold text-white md:mb-2 dark:text-white">
            Online payments
          </h2>
          <div class="flex">
            <ul class="flex space-x-3 font-medium text-white dark:text-gray-400">
              <li class="mt-1">
                <img src="/default/visa-footer.svg" alt="visa-logo" />
              </li>

              <li class="mt-1">
                <img src="/default/mastercard-footer.svg" alt="mastercard-logo" />
              </li>

              <li class="mt-1">
                <img src="/default/upi-footer.svg" alt="upi-logo" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="p-1" />
      <div class="text-white">
        <h2 class="text-xl">Join Newsletter</h2>
        <div class="flex justify-between">
          <div class="justify-between w-full md:flex">
            <p class="hidden md:mt-3 md:block">
              Join Our Newsletter for Exclusive Deals & Updates!
            </p>
            <p class="mt-1 md:hidden">sub-title</p>
            <div class="flex mb-1">
              <input
                type="text"
                class="h-8 mt-3 px-2 text-white bg-transparent border-2 border-gray-500 rounded-md bg- w-72"
                placeholder="Enter Your Email Id"
              />
              <button class="p-1 m-1 mt-3 rounded-md bg-primary-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr class="flex p-1" />

      <div class="justify-between hidden w-full md:flex gap-5">
        <div class="mb-1 text-white">
          <p>Copyright 2024. All rights reserved by</p>
        </div>
        <div class="flex space-x-3 font-medium text-gray-500 dark:text-gray-400">
          <div class="mb-1">
            <img src="/default/fb-footer.svg" alt="fb-logo" />
          </div>

          <div class="mb-1">
            <img src="/default/insta-footer.svg" alt="insta-logo" />
          </div>

          <div class="mb-1">
            <img src="/default/x-footer.svg" alt="x-logo" />
          </div>

          <div class="mb-1">
            <img src="/default/yt-footer.svg" alt="yt-logo" />
          </div>
        </div>
      </div>
    </div>
    <div class="p-3">
      <div class="text-1xl text-white">Version: {{ version }}</div>
      <h2 class="text-center text-white md:hidden">
        Copyright 2024. All rights reserved.
      </h2>
    </div>
  </footer>
</template>

<script>
import { version } from "../../../package.json";
export default {
  data() {
    return {
      version: version,
    };
  },
};
</script>
