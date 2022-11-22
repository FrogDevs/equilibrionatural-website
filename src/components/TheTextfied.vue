<script setup>
const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <input
    class="w-full border-b-2 border-secondary bg-transparent text-[1rem] text-primary placeholder:text-secondary focus:border-primary focus:outline-none focus:placeholder:text-primary"
    :type="props.type"
    :placeholder="props.placeholder"
  />
</template>
