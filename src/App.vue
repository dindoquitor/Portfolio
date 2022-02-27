<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from "@/components/NaviGation.vue";

export default {
  components: {
    Navigation,
  },
};
</script>
