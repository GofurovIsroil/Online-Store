<template>
  <div
    class="card text-center transition ease delay-350 hover:shadow-lg hover:scale-110 divide-solid border-2"
  >
    <img :src="product.image" alt="product" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/product/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  height: 120px;
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
