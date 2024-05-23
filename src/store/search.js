
import { defineStore } from 'pinia';
import axios from 'axios';

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchQuery: '',
    searchResults: [],
  }),
  actions: {
    async searchProducts() {
      if (this.searchQuery.trim() !== '') {
        try {
          const response = await axios.get(`https://api.8orbit.shop/api/v1/product?search=${this.searchQuery}`);
          this.searchResults = response.data;
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
    },
    setSearchQuery(query) {
      this.searchQuery = query;
    }
  }
});
