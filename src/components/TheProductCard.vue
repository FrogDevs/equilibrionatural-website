<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div
    class="h-[16.875rem] w-[16.875rem] cursor-pointer rounded-[1.25rem] bg-green2 transition-colors duration-200 ease-out hover:bg-[#f0ead2]"
  >
    <img
      class="h-[60%] w-full rounded-[1.25rem] bg-tertinary object-cover"
      :src="props.img"
      :alt="props.title"
      loading="lazy"
    />
    <div class="p-[1.25rem]">
      <p class="text-[1.563rem] leading-[3.75rem] text-secondary">
        {{ props.title }}
      </p>
    </div>
  </div>
</template>
