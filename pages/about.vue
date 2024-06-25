<template>
  <div class="text-center">
    <h2>About</h2>
    <div>{{ data }}</div>
  </div>
</template>
<script lang="ts" setup>
const { data } = await useFetch("/api/currency/USD");
</script>

<style scoped>
h2 {
  margin: 0 0 20px 0;
  font-size: 36px;
}
P {
  margin: 20px 0;
}
.fade-in-out {
  opacity: 0;
  transition-behavior: allow-discrete;
}
.fade-in-out.show {
  display: block;
  opacity: 1;
}
</style>
