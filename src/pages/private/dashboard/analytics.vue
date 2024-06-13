<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <div class="grid grid-cols-3 gap-4 mb-8">
      <div class="p-4 bg-blue-100 rounded-lg">
        <h3 class="mb-2 text-xl font-semibold">Total sales</h3>
        <p class="text-4xl font-bold text-blue-600">23.5 M</p>
        <p class="text-sm">31.58% &#8593; 2034 today</p>
      </div>
      <div class="p-4 bg-green-100 rounded-lg">
        <h3 class="mb-2 text-xl font-semibold">Total orders</h3>
        <p class="text-4xl font-bold text-green-600">23.5 M</p>
        <p class="text-sm">19.5% &#8593; 2034 today</p>
      </div>
      <div class="p-4 bg-purple-100 rounded-lg">
        <h3 class="mb-2 text-xl font-semibold">Total customers</h3>
        <p class="text-4xl font-bold text-purple-600">23.5 M</p>
        <p class="text-sm">19.5% &#8593; 2034 today</p>
      </div>
    </div>

    <!-- Inserted Line Chart Section -->
    <div
      class="relative flex flex-col mt-8 text-gray-700 bg-white shadow-md rounded-xl bg-clip-border"
    >
      <div
        class="relative flex flex-col gap-4 mx-4 mt-4 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border md:flex-row md:items-center"
      >
        <div class="p-5 text-white bg-gray-900 rounded-lg w-max">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
            />
          </svg>
        </div>
        <div>
          <h6
            class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
          >
            Line Chart
          </h6>
          <p
            class="block max-w-sm font-sans text-sm antialiased font-normal leading-normal text-gray-700"
          >
            Visualize your data in a simple way using the
            @material-tailwind/html chart plugin.
          </p>
        </div>
      </div>
      <div class="px-2 pt-6 pb-0">
        <div id="bar-chart"></div>
      </div>
    </div>

    <!-- Data Table Section -->
    <dataTable />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ApexCharts from "apexcharts";
import dataTable from "./data-table.vue";

const orders = ref([
  {
    customerId: 9201901920,
    mobileNumber: 9201010200,
    address: "City",
    orderId: 191032,
    date: "2-4-24",
    amount: "Rs. 2010",
    status: "In Transit",
  },
  {
    customerId: 9201901920,
    mobileNumber: 9201010200,
    address: "City",
    orderId: 191032,
    date: "2-4-24",
    amount: "Rs. 2010",
    status: "In Transit",
  },
  {
    customerId: 9201901920,
    mobileNumber: 9201010200,
    address: "City",
    orderId: 191032,
    date: "2-4-24",
    amount: "Rs. 2010",
    status: "In Transit",
  },
  {
    customerId: 9201901920,
    mobileNumber: 9201010200,
    address: "City",
    orderId: 191032,
    date: "2-4-24",
    amount: "Rs. 2010",
    status: "In Transit",
  },
  {
    customerId: 9201901920,
    mobileNumber: 9201010200,
    address: "City",
    orderId: 191032,
    date: "2-4-24",
    amount: "Rs. 2010",
    status: "In Transit",
  },
]);

onMounted(() => {
  const chartConfig = {
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    chart: {
      type: "bar",
      height: 240,
      toolbar: {
        show: false,
      },
    },
    title: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  };

  const chart = new ApexCharts(
    document.querySelector("#bar-chart"),
    chartConfig
  );
  chart.render();
});
</script>
