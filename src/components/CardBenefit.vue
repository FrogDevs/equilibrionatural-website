<script setup>
    const props = defineProps({
        picture: String,
        title: String,
        paragraph: String
    })
</script>

<template>
    <div class="flex flex-col w-full lg:max-w-sm h-96 shadow-md transition-transform duration-100 ease-out hover:cursor-pointer hover:scale-105">
        <div class="bg-neutral-800 h-3/6"></div>
        <div class="flex flex-col px-4 h-3/6 items-center justify-evenly bg-slate-50">
            <p class="text-zinc-800 text-2xl font-serif">{{ title }}</p>
            <p>{{ paragraph }}</p>
            <hr class="w-1/3 border-2 border-solid border-green-600">
        </div>
    </div>
</template>