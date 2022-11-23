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
  },
  link: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <router-link
    :to="props.link"
    class="relative flex h-[12.375rem] w-full cursor-pointer rounded-[1.25rem] transition-transform duration-200 ease-out hover:scale-105 lg:h-[15.625rem] lg:rounded-[2.5rem] 2xl:w-[35rem]"
  >
    <h1
      class="absolute z-20 w-full p-[1.563rem] text-center text-[1.563rem] font-bold text-green2 lg:text-[2.813rem]"
    >
      {{ props.title }}
    </h1>
    <div
      class="absolute z-10 h-full w-full rounded-[2.5rem] border-none bg-gradient-to-b from-[#7f5539] opacity-70"
    ></div>
    <img
      class="h-full w-full rounded-[2.5rem] border-none"
      :src="props.img"
      :alt="props.alt"
      draggable="false"
      loading="lazy"
    />
  </router-link>
</template>
<!-- <style scoped>
.card-hover:hover {
  transform: scale(1.02);
}
</style> -->
