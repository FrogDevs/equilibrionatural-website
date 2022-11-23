<script setup>
import TheProductCard from '../components/TheProductCard.vue'
import TheSection from '../components/TheSection.vue'
</script>
<template>
  <main>
    <TheSection :start="true" title="Produtos disponíveis em loja">
      <p
        class="mt-[1.563rem] mb-[1.25rem] w-full text-center text-[1.563rem] leading-[1.875rem] text-secondary md:text-start"
      >
        Unidade 1 - Rua Imberé - N°373
      </p>
      <div
        class="flex w-full flex-col items-center gap-[1.563rem] md:items-start"
      >
        <TheProductCard title="Título" />
      </div>
    </TheSection>
    <TheSection :start="true">
      <p
        class="mt-[1.563rem] mb-[1.25rem] w-full text-center text-[1.563rem] leading-[1.875rem] text-secondary md:text-start"
      >
        Unidade 2 - Av. Taquandava - N°1203
      </p>
      <div
        class="flex w-full flex-col items-center gap-[1.563rem] md:items-start"
      >
        <TheProductCard title="Título" />
      </div>
    </TheSection>
  </main>
</template>
