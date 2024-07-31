<template>
    <div class="container">
      <h1 class="title">Product Listing</h1>
      <input v-model="searchQuery" placeholder="Search products..." class="search-input" />
      <div v-for="product in filteredProducts" :key="product.id" class="product-card">
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">{{ product.price }}</p>
        <div class="button-group">
          <button @click="deleteProduct(product.id)" class="btn btn-delete">Delete</button>
          <button @click="editProduct(product)" class="btn btn-edit">Edit</button>
        </div>
      </div>
      <button @click="showCreateForm = true" class="btn btn-add">Add Product</button>
      <CreateProductForm v-if="showCreateForm" @close="showCreateForm = false" @save="createProduct" />
      <EditProductForm v-if="editingProduct" :product="editingProduct" @close="cancelEdit" @save="updateProduct" />
    </div>
  </template>
  
  <script>
  import CreateProductForm from '~/components/CreateProductForm.vue';
  import EditProductForm from '~/components/EditProductForm.vue';
  
  export default {
    data() {
      return {
        searchQuery: '',
        products: [],
        showCreateForm: false,
        editingProduct: null,
      };
    },
    components: {
      CreateProductForm,
      EditProductForm,
    },
    computed: {
      filteredProducts() {
        return this.products.filter((product) =>
          product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    async asyncData({ $axios }) {
      const products = await $axios.$get('/products');
      return { products };
    },
    methods: {
      async createProduct(newProduct) {
        const createdProduct = await this.$axios.$post('/products', newProduct);
        this.products.push(createdProduct);
        this.showCreateForm = false;
      },
      async deleteProduct(productId) {
        await this.$axios.$delete(`/products/${productId}`);
        this.products = this.products.filter((product) => product.id !== productId);
      },
      editProduct(product) {
        this.editingProduct = product;
      },
      async updateProduct(updatedProduct) {
        const updated = await this.$axios.$put(`/products/${updatedProduct.id}`, updatedProduct);
        const index = this.products.findIndex((product) => product.id === updated.id);
        this.$set(this.products, index, updated);
        this.editingProduct = null;
      },
      cancelEdit() {
        this.editingProduct = null;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles here */
  .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.product-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 15px;
}

.product-title {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

.product-description {
  font-size: 16px;
  margin-bottom: 10px;
  color: #555;
}

.product-price {
  font-size: 18px;
  margin-bottom: 10px;
  color: #007bff;
}

.button-group {
  display: flex;
  gap: 10px;
}


.btn {
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
}


.btn-delete {
  background-color: #dc3545;
  color: white;
}

.btn-edit {
  background-color: #ffc107;
  color: white;
}

.btn-add {
  background-color: #28a745;
  color: white;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
}
  </style>
  