<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="flex items-center gap-[0.781rem]">
    <i :class="props.icon" class="ri-3x text-secondary"></i>
    <p class="text-[0.8rem] text-secondary">{{ props.title }}</p>
  </div>
</template>
