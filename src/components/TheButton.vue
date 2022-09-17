<script setup>
    const props = defineProps({
        icon: String,
        message: String,
    })
</script>

<template>
    <button class="flex items-center justify-center w-56 mt-8 gap-2 h-12 font-medium uppercase text-sm text-white transition-colors duration-100 ease-out bg-green-500 hover:bg-green-600">
        {{ message }}
        <i :class="icon" class="ri-2x"></i>
    </button>
</template>