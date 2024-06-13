<template>
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Order Id: 92811010</h1>
      <form @submit.prevent="" class="space-y-4">
        <div class="flex items-center space-x-4">
          <label for="customerId" class="text-lg mb-1 w-32">Customer Id</label>
          <input type="text" id="customerId" class="flex w-1/2 p-2 border rounded-md" >
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="customerName" class="text-lg mb-1 w-32">Customer name</label>
          <input type="text" id="customerName" class="flex w-1/2 p-2 border rounded-md" >
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="emailId" class="text-lg mb-1 w-32">Email Id</label>
          <input type="email" id="emailId" class="flex w-1/2 p-2 border rounded-md"  >
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="mobileNumber" class="text-lg mb-1 w-32">Mobile number</label>
          <input type="text" id="mobileNumber" class="flex w-1/2 p-2 border rounded-md"  >
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="date" class="text-lg mb-1 w-32">Date</label>
          <input type="text" id="date" class="flex w-1/2 p-2 border rounded-md"  >
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="totalAmount" class="text-lg mb-1 w-32">Total Amount</label>
          <input type="text" id="totalAmount" class="flex w-1/2 p-2 border rounded-md" >
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="payment" class="text-sm mb-1 w-32">Payment</label>
          <input type="text" id="payment" class="flex w-1/2 p-2 border rounded-md"  >
        </div>
  
        <div class="flex items-center space-x-4">
          <label for="status" class="text-lg mb-1 w-32">Status</label>
          <select id="status" class="flex w-1/2 p-2 border rounded-md">
            <option value="In Process" selected>In Process</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
  
        <div class="">
          <h2 class="text-xl font-bold mt-12">Billing Address</h2>
          <p>123 Main Street</p><p> Anytown, USA </p><p>12345</p>
        </div>
  
       
        <div>
          <h2 class="text-xl font-bold mt-4">Billing Address</h2>
          <p>123 Main Street</p><p> Anytown, USA </p><p>12345</p>
        </div>
  
       
      </form>
    </div>
  </template>

