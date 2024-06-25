<template>
  <header>
    <nav class="container flex justify-between mx-auto p-4">
      <ul class="m-auto">
        <li>
          <NuxtLink to="/">Nuxt</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <div class="container mx-auto"><slot /></div>

  <footer>
    <div class="container mx-auto flex">
      <ul class="flex justify-between mx-auto p-4 gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/product">Product</NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: rgb(116, 180, 180);
}
a:active {
  color: rgb(116, 180, 180);
}
</style>
