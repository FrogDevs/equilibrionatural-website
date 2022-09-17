<script setup>
    const props = defineProps({
        picture: String,
        title: String,
        paragraph: String
    })
</script>

<template>
    <div class="flex flex-col w-full lg:max-w-sm h-96 shadow-md transition-transform duration-100 ease-out hover:cursor-pointer lg:hover:scale-105">
        <div class="bg-neutral-800 h-3/6"></div>
        <div class="flex flex-col px-4 h-3/6 items-center justify-evenly bg-green-50">
            <p class="text-green-900 text-2xl font-serif">{{ title }}</p>
            <p class="text-zinc-700">{{ paragraph }}</p>
            <hr class="w-1/3 border-2 border-solid border-green-900">
        </div>
    </div>
</template>