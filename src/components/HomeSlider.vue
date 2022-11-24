<template>
  <div class="max-w-full px-5">
    <Swiper
      :space-between="50"
      :modules="[Autoplay, EffectFade]"
      :effect="'fade'"
      :loop="true"
      :autoplay="{
        delay: 2500,
      }"
    >
      <SwiperSlide
        class="max-w-full p-20"
        v-for="slides in sliderContent"
        :key="sliderImg"
      >
        <div class="">
          <img
            class="border-2 border-dindz-primary rounded-xl"
            :src="slides.sliderImg"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import "swiper/css";
import "swiper/css/effect-fade";
const imgUrl = function (imageName) {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
};
const sliderImg = ref("");
const sliderContent = ref([
  {
    sliderImg: imgUrl("Home-slider-1.jpg"),
  },
  {
    sliderImg: imgUrl("Home-slider-2.jpg"),
  },
  {
    sliderImg: imgUrl("Home-slider-3.jpg"),
  },
  {
    sliderImg: imgUrl("Home-slider-4.jpg"),
  },
]);
</script>

<style></style>
