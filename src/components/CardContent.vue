<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(["titleH1", "title", "description", "buttonName"]);
</script>

<template>
  <div>
    <h1 class="font-Prompt text-dindz-primary text-3xl font-bold">
      {{ titleH1 }}
    </h1>
    <h2 class="font-Prompt text-dindz-primary text-[22px] font-bold">
      {{ title }}
    </h2>
    <p class="font-Karla text-dindz-text text-lg py-5">
      {{ description }}
    </p>
    <RouterLink :to="{ name: 'services' }"
      ><button>{{ buttonName }}</button></RouterLink
    >
  </div>
</template>

<style></style>
