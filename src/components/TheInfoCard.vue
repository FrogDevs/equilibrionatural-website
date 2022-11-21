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
  <div
    class="relative flex h-[12.375rem] w-full cursor-pointer rounded-[2.5rem]"
  >
    <h1
      class="absolute z-20 w-full p-[1.563rem] text-center text-[1.563rem] font-medium text-green2"
    >
      {{ props.title }}
    </h1>
    <div
      class="absolute z-10 h-full w-full rounded-[2.5rem] border-none bg-gradient-to-b from-[#261F1B]"
    ></div>
    <img
      class="h-full w-full rounded-[2.5rem] border-none"
      :src="props.img"
      :alt="props.alt"
      loading="lazy"
    />
  </div>
</template>
