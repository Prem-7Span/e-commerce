import { defineStore } from 'pinia';
import axios from 'axios';

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchQuery: '',
    searchResults: [],
  }),
  actions: {
    async searchProducts(keyword) {
      try {
        let searchKeyword = keyword ?? this.searchQuery.trim();
        const response = await axios.get(`https://api.8orbit.shop/api/v1/product?search=${searchKeyword}`);
        this.searchResults = response.data;
        this.$router.push({ path: '/products' });
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    },
    setSearchQuery(query) {
      this.searchQuery = query;
    },
  },
});
