<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="h-[16.875rem] w-[16.875rem] rounded-[1.25rem] bg-green2">
    <div class="h-[60%] rounded-[1.25rem] bg-tertinary"></div>
    <div class="p-[1.25rem]">
      <p class="text-[1.563rem] leading-[3.75rem] text-secondary">
        {{ props.title }}
      </p>
    </div>
  </div>
</template>
