<template>
  <div>
    <Swiper
      :slides-perview="1"
      :space-between="50"
      :modules="[Navigation, Pagination]"
      navigation
      :pagination="{ clickable: true }"
    >
      <SwiperSlide>
        <h1>Hello There</h1>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>

<style></style>
