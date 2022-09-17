<script setup>
    const props = defineProps({
        activated: {
            type: Boolean,
            default: false
        },
        question: String,
        answer: String
    })

    const emit = defineEmits(['show-answer'])

    function toggleAnswer() {
        emit('show-answer')
    }
</script>

<template>
    <div class="flex flex-col justify-center w-full max-w-7xl py-6 px-5 lg:px-10 gap-4 bg-slate-50 shadow-md hover:cursor-pointer" @click="toggleAnswer">
        <div class="flex flex-row items-center justify-between">
            <p class="text-xl font-serif text-green-900">{{ question }}</p>
            <i :class="activated ? 'ri-arrow-down-s-line' : 'ri-arrow-right-s-line'" class="text-green-900 ri-xl"></i>
        </div>
        <div :class="activated ? 'block' : 'hidden'">
            <p class="text-zinc-700">{{ answer }}</p>
        </div>
    </div>
</template>