<script setup>
import { ref, onMounted } from 'vue'

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

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.remove('opacity-0')
      e.target.classList.add('opacity-100')
    } else {
      e.target.classList.remove('opacity-100')
      e.target.classList.add('opacity-0')
    }
  })
})

const hiddenItem = ref()

onMounted(() => {
  observer.observe(hiddenItem.value)
})
</script>
<template>
  <section class="flex w-full flex-col items-center px-[1.563rem]">
    <h1
      ref="hiddenItem"
      class="mt-[1.563rem] text-center text-[3.125rem] font-bold leading-[3.688rem] text-tertinary opacity-0 transition-opacity duration-1000 motion-reduce:transition-none lg:mt-[3.125rem] 2xl:mt-[6.25rem]"
    >
      {{ props.title }}
    </h1>
    <slot></slot>
  </section>
</template>
