<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="flex flex-col items-center gap-[1.563rem] md:w-full">
    <p class="text-center text-[1.25rem] leading-[1.875rem] text-secondary">
      {{ props.title }}
    </p>
    <div
      class="h-[10rem] w-[16.875rem] rounded-[1.25rem] bg-green2 md:h-[15rem] md:w-full 2xl:h-[20rem]"
    ></div>
  </div>
</template>
