export const state = () => ({
    products: []
  });
  
  export const mutations = {
    setProducts(state, products) {
      state.products = products;
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
      }
    },
    deleteProduct(state, productId) {
      state.products = state.products.filter(product => product.id !== productId);
    }
  };
  
  export const actions = {
    async fetchProducts({ commit }) {
      const products = await this.$axios.$get('/products');
      commit('setProducts', products);
    },
    async createProduct({ commit }, productData) {
      const newProduct = await this.$axios.$post('/products', productData);
      commit('addProduct', newProduct);
    },
    async updateProduct({ commit }, productData) {
      const updatedProduct = await this.$axios.$put(`/products/${productData.id}`, productData);
      commit('updateProduct', updatedProduct);
    },
    async deleteProduct({ commit }, productId) {
      await this.$axios.$delete(`/products/${productId}`);
      commit('deleteProduct', productId);
    }
  };
  