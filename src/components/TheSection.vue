<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  start: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <section class="flex w-full flex-col items-center px-[1.563rem]">
    <h1
      class="mt-[1.563rem] text-center text-[3.125rem] font-bold leading-[3.688rem] text-tertinary lg:mt-[3.125rem] 2xl:mt-[6.25rem]"
    >
      {{ props.title }}
    </h1>
    <slot></slot>
  </section>
</template>
