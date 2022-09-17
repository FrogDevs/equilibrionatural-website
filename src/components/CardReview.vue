<script setup>
    const props = defineProps({
        isSmall: Boolean,
        picture: String,
        name: String,
        comentary: String
    })
</script>

<template>
    <div :class="props.isSmall ? 'h-80' : 'lg:h-96'" class="flex flex-col w-full lg:max-w-sm h-80 p-10 gap-4 bg-green-50 shadow-md">
        <div :class="`bg-[url('${picture}')]`" class="bg-cover bg-no-repeat w-10 xl:w-20 h-10 xl:h-20"></div>
        <div class="flex flex-col h-3/6 gap-4">
            <p class="text-zinc-800 text-2xl font-serif">{{ name }}</p>
            <p class="text-zinc-700">{{ comentary }}</p>
        </div>
    </div>
</template>