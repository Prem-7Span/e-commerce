<template>
  <div class="flex">
    <side-bar @update:activeComponent="updateActiveComponent" />
    <component :is="activeComponent" class="flex-grow" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import sideBar from "@/components/global/side-bar.vue";
import Analytics from "@/pages/private/dashboard/analytics.vue";
// Import other components as needed

const activeComponent = ref("Analytics");

function updateActiveComponent(component) {
  activeComponent.value = component;
}
</script>
