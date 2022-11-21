<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <section class="flex flex-col">
    <h1
      class="mt-[1.563rem] text-center text-[3.125rem] font-bold leading-[3.688rem] text-primary"
    >
      {{ props.title }}
    </h1>
    <slot></slot>
  </section>
</template>
