<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { reactive, ref } from 'vue';

const route = useRoute();
const loading = ref(false);

const productObj = reactive({
    name : '',
    description : '',
    price : 0,
    salePrice : 0,
    tags : [],
    isBestSeller: false,
    category: '',
    Image : 'https://placehold.co/600x400'
});

async function handleSubmit(){
    try {
        loading.value = true;        
        const productDate = {
            ...productObj, 
            price: Number(productObj.price),
            salePrice: productObj.salePrice? Number(productObj.salePrice) : null,
            tags: productObj.tags.split(',').map((tag) => tag.trim()),
            bestSeller: Boolean(productObj.isBestSeller)                    
        }
        await new Promise((resolve) => setTimeout(resolve, 200));
        console.log(productDate);
        
    } catch (error) {        
        console.log(error);
    } finally {
        loading.value = false;
    }
}

</script>

<template>
    <div class="container mt-5">
        <h2>Add Product</h2>
        <form v-on:submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="productName">Product Name</label>
                <input type="text" v-model.trim="productObj.name" class="form-control" id="productName" placeholder="Enter product name" required>
            </div>
            <div class="form-group">
                <label for="productDescription">Description</label>
                <textarea v-model="productObj.description" class="form-control" id="productDescription" rows="3" placeholder="Enter product description" required></textarea>
            </div>
            <div class="form-group">
                <label for="productPrice">Price</label>
                <input v-model.number="productObj.price" type="number" class="form-control" id="productPrice" placeholder="Enter product price" required>
            </div>
            <div class="form-group">
                <label for="salePrice">Sale Price</label>
                <input type="number" v-model="productObj.salePrice" class="form-control" id="salePrice" placeholder="Enter sale price">
            </div>
            <div class="form-group">
                <label for="tags">Tags</label>
                <input type="text" v-model="productObj.tags" class="form-control" id="tags" placeholder="Enter tags (comma separated)">
            </div>
            <div class="form-check form-switch">
                <input type="checkbox" role="switch" v-model="productObj.isBestSeller" class=" form-check-input" id="bestSeller">
                <label  class="form-check-label" for="bestSeller">Best Seller</label>
            </div>
            <div class="form-group">
                <label for="category">Category</label>
                <select class="form-control" id="category" required>
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home</option>
                    <option value="books">Books</option>
                </select>
            </div>
            <div class="form-group">
                <label for="productImage">Product Image</label>
                <input type="file" class="form-control" id="productImage" required>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading"> <span v-if="loading" class=" spinner-border spinner-border-sm"></span> Submit</button>
            <button type="button" class="btn btn-secondary" onclick="window.history.back();">Cancel</button>
        </form>
    </div>
</template>