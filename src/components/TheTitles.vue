<script setup>
    const props = defineProps({
        isSmall: Boolean,
        section: String,
        title: String,
        subtitle: String
    })
</script>

<template>
    <div class="flex flex-col items-center gap-3">
        <p :class="isSmall ? 'text-xs' : 'text-sm'" class="uppercase text-zinc-500">{{ section }}</p>
        <h2 :class="isSmall ? 'text-3xl' : 'text-4xl'" class="text-center text-4xl font-medium font-serif">{{ title }}</h2>
        <p class="text-zinc-900">{{ subtitle }}</p>
    </div>
</template>