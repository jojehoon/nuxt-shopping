<template>
  <div class="list-wrapper">
    <ul>
      <li
        v-for="cartItem in $store.state.cartItems"
        :key="cartItem.id"
        class="list-item"
      >
        <img :src="cartItem.imageUrl" :alt="cartItem.name" class="thumbnail" />
        <p class="description">{{ cartItem.name }}</p>
        <span>{{ cartItem.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store';
export default {
  //   async asyncData(context) {
  //     await context.$store.dispatch(FETCH_CART_ITEMS);
  //   },
  async fetch() {
    await this.$store.dispatch(FETCH_CART_ITEMS);
  },
};
</script>

<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
</style>
