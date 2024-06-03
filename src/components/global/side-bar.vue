<template>
  <div class="flex flex-col h-screen p-4 bg-gray-100">
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.label" class="mb-4">
          <a
            href="#"
            class="flex items-center text-gray-600 transition-colors duration-300 hover:text-gray-900"
            @click="selectComponent(item.component)"
          >
            <span>{{ item.label }}</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="mt-auto">
      <a
        href="#"
        class="flex items-center text-gray-600 transition-colors duration-300 hover:text-gray-900"
      >
        <span>Settings</span>
      </a>
      <a
        href="#"
        class="flex items-center mt-4 text-gray-600 transition-colors duration-300 hover:text-gray-900"
      >
        <span>Logout</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const navItems = [
  { label: "Analytics", component: "AnalyticsComponent" },
  { label: "Products", component: "ProductsComponent" },
  { label: "Orders", component: "OrdersComponent" },
  { label: "Customers", component: "CustomersComponent" },
];

const emit = defineEmits(["update:activeComponent"]);

function selectComponent(component) {
  emit("update:activeComponent", component);
}
</script>
