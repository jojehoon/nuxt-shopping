<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById, createCartItem } from '@/api/index';

export default {
  head() {
    return {
      title: `Shopping Item Detail - ${this.product.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `이 상품은 ${this.product.name}입니다`,
        },
      ],
    };
  },

  async asyncData({ params }) {
    try {
      const response = await fetchProductById(params.id);
      const product = response.data;

      return {
        product,
      };
    } catch (error) {
      error({
        statusCode: 503,
        message: 'API 요청이 실패했습니다',
      });
    }
  },
  methods: {
    async addToCart() {
      const response = await createCartItem(this.product);
      console.log(response);
      this.$store.commit('addCartItems', this.product);
      this.$router.push('/cart');
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
