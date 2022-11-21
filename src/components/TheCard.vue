<script setup>
const props = defineProps({
  img: {
    type: String,
    default: ''
  },
  alt: {
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
  <div class="flex flex-col gap-[1.25rem]">
    <div
      class="flex h-[16.875rem] w-[16.875rem] items-center justify-center rounded-[1.25rem] bg-green2 p-8"
    >
      <img :src="props.img" :alt="props.alt" loading="lazy" />
    </div>
    <p class="text-center text-[1.563rem] leading-[1.813rem] text-secondary">
      {{ props.title }}
    </p>
  </div>
</template>
