<script setup>
    const props = defineProps({
        picture: String,
        name: String,
    })
</script>

<template>
    <div class="flex flex-col w-full max-w-sm h-96 p-10 gap-4 bg-amber-50 shadow-md transition-transform duration-100 ease-out hover:cursor-pointer hover:scale-105">
        <div class="w-full h-full bg-black">.</div>
            <div class="flex flex-col items-center gap-2">
            <p class="text-amber-900 text-2xl font-serif">{{ name }}</p>
        </div>
    </div>
</template>