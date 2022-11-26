<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
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
  <div class="h-[16.875rem] w-[16.875rem] rounded-[1.25rem] bg-green2">
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
