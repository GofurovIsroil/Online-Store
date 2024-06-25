<template>
  <div class="mt-7 mx-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn mt-7 mb-7" @click="handleClickError">Go Back</button>
  </div>
</template>

<script lang="ts" setup>
defineProps(["error"]);
const handleClickError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
