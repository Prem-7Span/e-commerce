<!-- src/components/Breadcrumb.vue -->
<template>
  <nav class="py-2 breadcrumb">
    <ul class="flex items-center space-x-2">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <router-link
          v-if="item.path"
          :to="item.path"
          class="text-gray-600 hover:underline"
        >
          {{ item.name }}
        </router-link>
        <span v-else class="text-gray-600">{{ item.name }}</span>
        <span v-if="index < items.length - 1" class="mx-2">/</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
