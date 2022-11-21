<script setup>
const props = defineProps({
  message: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div
    class="flex h-[11.25rem] w-[16.875rem] flex-col items-center justify-center rounded-[1.25rem] bg-green2 p-4"
  >
    <p class="text-center text-[1.25rem] leading-[1.438rem] text-secondary">
      {{ props.message }}
    </p>
  </div>
</template>
