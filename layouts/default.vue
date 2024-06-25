<template>
  <header class="shodow-sm bg-white sticky top-0 z-50">
    <nav class="container flex justify-between mx-auto p-4">
      <ul class="flex gap-4 m-auto">
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
    </nav>
  </header>

  <div class="container mx-auto">
    <slot />
  </div>

  <footer class="shodow-sm bg-white p-12">
    <div class="container mx-auto flex">
      <ul class="flex gap-4 m-auto">
        <li>
          <NuxtLink to="https://www.facebook.com/?locale=ru_RU" target="__blank"
            >Contacts</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="https://web.telegram.org/k/" target="__blank"
            >Telegram</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="https://www.facebook.com/?locale=ru_RU" target="__blank"
            >Facebook</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="https://www.facebook.com/?locale=ru_RU" target="__blank"
            >Faq</NuxtLink
          >
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
