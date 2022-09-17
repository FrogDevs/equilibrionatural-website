<script setup>
    const props = defineProps({
        icon: String,
        social: String,
        link: String
    })
</script>

<template>
    <div class="flex flex-col gap-0">
        <div class="flex flex-row gap-4 items-center">
            <i :class="icon" class="ri-2x text-amber-900"></i>
            <p class="text-amber-900 text-2xl font-semibold">{{ social }}</p>
        </div>
        <p class="text-lg text-zinc-800">{{ link }}</p>                    
    </div>
</template>