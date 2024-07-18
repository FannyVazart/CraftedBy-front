import axios from 'axios'
import { defineStore } from 'pinia'

// Define the 'products' store using the 'pinia' library
export const useProductsStore = defineStore('products', {
  // Initialize the state with 'products' and 'product' as empty
  state: () => ({
    products: [],
    product: {}
  }),
  // Define getters for 'products' and 'product'
  getters: {
    getProducts() {
      return this.products
    },
    getProduct() {
      return this.product
    }
  },
  // Define actions for fetching products and a product by its ID
  actions: {
    // Fetch products from the 'fakestoreapi.com' API
    // If a category is provided, fetch products of that category
    // Otherwise, fetch all products
    async fetchProducts(category = null ){
      try {
        // if (category) {
        //   const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        //   this.products = response.data
        // } else {
          //  const response = await axios.get('https://fakestoreapi.com/products')
          const response = await axios.get('http://127.0.0.1:8000/api/products/')
          this.products = response.data
        // }
      } catch (error) {
        console.error(error)
      }
    },
    // Fetch a product by its ID from the 'fakestoreapi.com' API
    async getProductById(id){
      try {
        // const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
        this.product = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
})