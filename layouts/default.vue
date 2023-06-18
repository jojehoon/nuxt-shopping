<template>
  <div>
    <header class="title">
      <nuxt-link class="logo" to="/">Nuxt Shopping</nuxt-link>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    title() {
      let title = ''
      switch (this.$route.name) {
        case 'index':
          title = '홈'
          break
        case 'main':
          title = '메인'
          break
        case 'products':
          title = '상품'
          break
      }
      return title
    },
  },
}
</script>

<style>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
