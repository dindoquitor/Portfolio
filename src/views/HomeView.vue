<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Navigation />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "@/components/NaviGation.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Navigation,
  },
};
</script>
