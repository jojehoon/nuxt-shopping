<template>
  <div class="app">
    <main>
      <search-input v-model="inputText" @search="searchProduct"></search-input>
      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          @click="moveToDetailPage(product.id)"
        >
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="routeToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import { fetchProductByKeyword } from '~/api'
// import ProductsList from '../components/ProductList.vue'
import SearchInput from '~/components/SearchInput.vue'

export default {
  name: 'MainPage',
  components: {
    SearchInput,
  },
  async asyncData(context) {
    const response = await axios.get('http://localhost:3000/products')
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?rendom=${Math.random()}`,
    }))

    return {
      products,
    }
  },
  data() {
    return {
      inputText: '',
    }
  },
  methods: {
    async fetchProducts() {
      const response = await axios.get('http://localhost:3000/products')
      this.products = response.data
    },
    moveToDetailPage(id) {
      console.log(id)
      this.$router.push(`detail/${id}`)
    },
    async searchProduct() {
      const response = await fetchProductByKeyword(this.inputText)
      this.products = response.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?rendom=${Math.random()}`,
      }))
    },
    routeToCartPage() {
      this.$router.push('/cart')
    },
  },
}
</script>

<style>
.flex {
  display: flex;
  justify-content: center;
}

.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}

.product-image {
  width: 400px;
  height: 250px;
}

.app {
  position: relative;
}

.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}

.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
