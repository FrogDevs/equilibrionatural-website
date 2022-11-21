<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <section class="flex w-full flex-col items-center">
    <h1
      class="mt-[1.563rem] text-center text-[3.125rem] font-bold leading-[3.688rem] text-primary lg:mt-[3.125rem] 2xl:mt-[6.25rem]"
    >
      {{ props.title }}
    </h1>
    <slot></slot>
  </section>
</template>
