<script setup>
    const props = defineProps({
        picture: String,
        name: String,
    })
</script>

<template>
    <div class="flex flex-col w-full max-w-sm h-96 p-10 gap-4 bg-green-50 shadow-md transition-transform duration-100 ease-out hover:cursor-pointer hover:scale-105">
        <div :class="`bg-[url('${picture}')]`" class="w-full h-full bg-cover bg-no-repeat"></div>
            <div class="flex flex-col items-center gap-2">
            <p class="text-amber-900 text-2xl font-serif">{{ name }}</p>
        </div>
    </div>
</template>