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
    <p class="text-[0.8rem] text-secondary sm:text-[1.25rem]">
      {{ props.title }}
    </p>
  </div>
</template>
