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
    class="flex h-[11.25rem] w-full flex-col items-center justify-center rounded-[1.25rem] bg-green2 p-4 lg:rounded-[2.5rem] 2xl:h-[15rem] 2xl:w-[35rem]"
  >
    <p
      class="text-center text-[1.25rem] leading-[1.438rem] text-secondary 2xl:text-[1.80rem] 2xl:leading-[3rem]"
    >
      {{ props.message }}
    </p>
  </div>
</template>
