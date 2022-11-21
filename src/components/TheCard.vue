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
  <div
    class="flex flex-col items-center gap-[1.25rem] break-words lg:w-[18.75rem] lg:items-start 2xl:w-[24rem]"
  >
    <div
      class="flex h-[16.875rem] w-[16.875rem] items-center justify-center rounded-[1.25rem] bg-green2 p-8 sm:w-[18.75rem] sm:p-16 lg:rounded-[2.5rem] 2xl:h-[24rem] 2xl:w-[24rem]"
    >
      <img :src="props.img" :alt="props.alt" loading="lazy" />
    </div>
    <p
      class="w-full text-center text-[1.563rem] leading-[1.813rem] text-secondary 2xl:text-[2rem] 2xl:leading-[3rem]"
    >
      {{ props.title }}
    </p>
  </div>
</template>
