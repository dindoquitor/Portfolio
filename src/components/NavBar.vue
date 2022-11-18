<template>
  <header class="py-2 bg-white">
    <nav
      class="container text-dindz-primary font-Kalra text-xl flex items-center justify-between"
    >
      <RouterLink class="logo" :to="{ name: 'home' }">
        <div class="max-w-[200px]">
          <img src="../assets/images/Logo.png" alt="Dindz Logo" srcset="" />
        </div>
      </RouterLink>
      <div class="flex items-center justify-between gap-7">
        <RouterLink
          class="hover:border-b-2 hover:border-slate-900"
          :to="{ name: 'home' }"
          >Home</RouterLink
        >
        <RouterLink
          class="hover:border-b-2 hover:border-slate-900"
          :to="{ name: 'services' }"
          >Services</RouterLink
        >
        <RouterLink
          class="hover:border-b-2 hover:border-slate-900"
          :to="{ name: 'contact' }"
          >Contact</RouterLink
        >
        <RouterLink
          class="hover:border-b-2 hover:border-slate-900"
          :to="{ name: 'blog' }"
          >Blog</RouterLink
        >
        <RouterLink
          class="hover:border-b-2 hover:border-slate-900"
          :to="{ name: 'privacy' }"
          >Privacy Policy</RouterLink
        >
        <a
          href="https://calendly.com/dquitoraccounting/30min"
          target="_blank"
          class="menu-btn"
        >
          <button
            class="bg-dindz-primary text-white rounded-md px-4 py-2 ml-8 hover:bg-white hover:text-dindz-primary hover:border"
          >
            Book Apointment
          </button>
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.menu-btn.router-link-active {
  border: none;
}
.logo {
  border: none !important;
}
.router-link-active {
  border-bottom: solid 2px #3a9f3d;
}
</style>
