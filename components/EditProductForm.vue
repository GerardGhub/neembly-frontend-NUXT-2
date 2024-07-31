<template>
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <h2 class="modal-title">Edit Product</h2>
        <form @submit.prevent="submitForm" class="modal-form">
          <div class="form-group">
            <label for="title">Title:</label>
            <input v-model="title" type="text" required />
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <textarea v-model="description" required></textarea>
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input v-model="price" type="number" required />
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-save">Save</button>
            <button type="button" class="btn btn-cancel" @click="$emit('close')">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object
    },
    data() {
      return {
        title: this.product.title,
        description: this.product.description,
        price: this.product.price
      };
    },
    methods: {
      submitForm() {
        const updatedProduct = {
          id: this.product.id,
          title: this.title,
          description: this.description,
          price: parseFloat(this.price)
        };
        this.$emit('save', updatedProduct);
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    max-width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .modal-title {
    margin-bottom: 20px;
    text-align: center;
    color: #333;
  }
  
  .modal-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  textarea {
    resize: none;
    height: 100px;
  }
  
  .form-actions {
    display: flex;
    justify-content: space-between;
  }
  
  .btn {
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
  
  .btn-save {
    background-color: #28a745;
    color: white;
  }
  
  .btn-cancel {
    background-color: #dc3545;
    color: white;
  }
  </style>
  