<!-- meta tags -->
<!-- arrumar o app -->
<!-- compilar -->

<script setup>
const emit = defineEmits(['close-modal'])

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: null
  },
  weight: {
    type: String,
    default: ''
  },
  amount: {
    type: Number,
    default: null
  }
})

const closeModal = () => {
  emit('close-modal')
}
</script>
<template>
  <div
    class="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-primary bg-opacity-25 p-6"
  >
    <div
      class="relative flex w-full flex-col overflow-x-auto rounded-[1.875rem] bg-green2 py-[3.125rem] px-[1.563rem] shadow-md lg:w-2/4"
    >
      <i
        class="ri-close-line ri-xl absolute top-0 right-0 m-[1.563rem] cursor-pointer text-tertinary"
        @click="closeModal"
      ></i>
      <h1 class="text-[1.563rem] font-bold leading-[3.688rem] text-primary">
        {{ props.name }}
      </h1>
      <div
        class="mt-[1.563rem] overflow-x-auto text-[1.25rem] leading-[3.688rem] text-primary"
      >
        <h2>Preço: R$ {{ props.price }}</h2>
        <h2>Peso: {{ props.weight }}</h2>
        <h2>Quantidade: {{ props.amount }}</h2>
      </div>
    </div>
  </div>
</template>
