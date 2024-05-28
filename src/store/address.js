// addressStore.js
import axios from "axios";
import { defineStore } from "pinia";

const baseURL = "https://api.8orbit.shop/api/v1";

export const useAddressStore = defineStore("addressStore", {
  state: () => ({
    addresses: [],
    countries: [],
    states: [],
    cities: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchAddresses() {
      try {
        this.loading = true;
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get(`${baseURL}/address`, { headers });
        this.addresses = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = true;
      }
    },
    async createAddress(newAddress) {
      try {
        this.loading = true;
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${baseURL}/address`, newAddress, {
          headers,
        });
        this.addresses.push(response.data);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async deleteAddress(addressId) {
      try {
        this.loading = true;
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };
        await axios.delete(`${baseURL}/address/${addressId}`, { headers });
        this.addresses = this.addresses.filter(
          (address) => address.id !== addressId
        );
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchCountries(params) {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get(`${baseURL}/countries`, {
          headers,
          params,
        });
        this.countries = response.data;
      } catch (error) {
        this.error = error;
      }
    },
    async fetchStates(params) {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get(`${baseURL}/states`, {
          headers,
          params,
        });
        this.states = response.data;
      } catch (error) {
        this.error = error;
      }
    },
    async fetchCities(params) {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get(`${baseURL}/cities`, {
          headers,
          params,
        });
        this.cities = response.data;
      } catch (error) {
        this.error = error;
      }
    },
  },
  getters: {
    getCities(state) {
      return state.cities;
    },
    getCountries(state) {
      return state.countries;
    },
    getStates(state) {
      return state.states;
    },
  },
});
