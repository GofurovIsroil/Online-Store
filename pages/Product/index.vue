<template>
  <div class="my-8">
    <div class="grid gap-5 xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <div v-for="p in products">
        <NuxtLink :to="`/product/${p.id}`"
          ><ProductCard :product="p"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// definePageMeta({
//   layout: "products",
// });
const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title: "Product",
});
</script>

<style scoped>
h2 {
  margin: 0 0 20px 0;
  font-size: 36px;
}
P {
  margin: 20px 0;
}
</style>
