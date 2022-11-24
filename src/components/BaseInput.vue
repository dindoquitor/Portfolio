<template>
  <div class="flex flex-col">
    <label>{{ label }}</label>
    <input
      class="border border-dindz-primary focus:outline-none focus:border-slate-800 focus:border rounded-sm"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
  // import { ref } from "vue";
  // const label = ref("");
  // const modelValue = ref("");
  defineProps({
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  });
</script>

<style></style>
