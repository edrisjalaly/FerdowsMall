<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import { PRODUCT_CATEGORIES } from '@/constants/appConstants';

const route = useRoute();
const loading = ref(false);
const errorList = reactive([]);

const productObj = reactive({
    name: '',
    description: '',
    price: 0,
    salePrice: 0,
    tags: [],
    isBestSeller: false,
    category: '',
    Image: 'https://placehold.co/600x400'
});

async function handleSubmit() {
    try {
        loading.value = true;
        errorList.length = 0;

        if (productObj.name.length < 3) {
            errorList.push("Name should be at least 3 char");
        }

        if (productObj.price <= 0) {
            errorList.push("price should be greater than 0 ");
        }

        if (productObj.category === '') {
            errorList.push("please select a category");
        }
        if (!errorList.length) {
            const productDate = {
                ...productObj,
                price: Number(productObj.price),
                salePrice: productObj.salePrice ? Number(productObj.salePrice) : null,
                tags: productObj.tags.split(',').map((tag) => tag.trim()),
                bestSeller: Boolean(productObj.isBestSeller)
            }
            await new Promise((resolve) => setTimeout(resolve, 200));
            console.log(productDate);
        }

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
            <div v-if="errorList.length > 0" class=" alert alert-danger pb-0">

                <ul>
                    <li v-for="error in errorList" :key="error"> {{ error }} </li>
                </ul>
            </div>
            <div class="form-group">
                <label for="productName">Product Name</label>
                <input type="text" v-model.trim="productObj.name" class="form-control" id="productName"
                    placeholder="Enter product name">
            </div>
            <div class="form-group">
                <label for="productDescription">Description</label>
                <textarea v-model="productObj.description" class="form-control" id="productDescription" rows="3"
                    placeholder="Enter product description"></textarea>
            </div>
            <div class="form-group">
                <label for="productPrice">Price</label>
                <input v-model.number="productObj.price" type="number" class="form-control" id="productPrice"
                    placeholder="Enter product price">
            </div>
            <div class="form-group">
                <label for="salePrice">Sale Price</label>
                <input type="number" v-model="productObj.salePrice" class="form-control" id="salePrice"
                    placeholder="Enter sale price">
            </div>
            <div class="form-group">
                <label for="tags">Tags</label>
                <input type="text" v-model="productObj.tags" class="form-control" id="tags"
                    placeholder="Enter tags (comma separated)">
            </div>
            <div class="form-check form-switch">
                <input type="checkbox" role="switch" v-model="productObj.isBestSeller" class=" form-check-input"
                    id="bestSeller">
                <label class="form-check-label" for="bestSeller">Best Seller</label>
            </div>
            <div class="form-group">
                <label for="category">Category</label>

                <select class="form-control" id="category" v-model="productObj.category">
                    <option v-for="option in PRODUCT_CATEGORIES" :key="option" :value="option"> {{ option }} </option>
                </select>
            </div>
            <div class="form-group">
                <label for="productImage">Product Image</label>
                <input type="file" class="form-control" id="productImage">
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading"> <span v-if="loading"
                    class=" spinner-border spinner-border-sm"></span> Submit</button>
            <button type="button" class="btn btn-secondary" onclick="window.history.back();">Cancel</button>
        </form>
    </div>
</template>