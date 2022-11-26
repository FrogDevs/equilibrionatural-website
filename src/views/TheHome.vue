<script setup>
import { ref, onMounted } from 'vue'
import TheCard from '../components/TheCard.vue'
import TheSection from '../components/TheSection.vue'
import TheInfoCard from '../components/TheInfoCard.vue'
import TheWitnessCard from '../components/TheWitnessCard.vue'
import TheFooter from '../components/TheFooter.vue'

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.remove('opacity-0')
      e.target.classList.add('opacity-100')
    } else {
      e.target.classList.remove('opacity-100')
      e.target.classList.add('opacity-0')
    }
  })
})

const hiddenItem = ref()

onMounted(() => {
  observer.observe(hiddenItem.value)
})
</script>
<template>
  <header
    class="h-screen rounded-b-[1.875rem] bg-green2 p-[1.563rem] lg:rounded-b-[3.75rem] lg:p-[3.125rem] 2xl:p-[6.25rem]"
  >
    <!-- hero -->
    <div
      class="flex h-full flex-col items-center justify-center gap-[1.25rem] lg:flex-row lg:gap-[6.25rem]"
    >
      <!-- content -->
      <div
        class="flex w-full flex-col items-center gap-5 lg:w-2/5 lg:items-start"
      >
        <div
          class="flex flex-col text-center text-[3.125rem] leading-[3.688rem] text-primary lg:text-start 2xl:text-[3.75rem] 2xl:leading-[4.5rem]"
        >
          <h1>🪴 Equilíbrio</h1>
          <h1 class="font-bold">Natural 🍃</h1>
        </div>
        <p
          class="text-center text-[1.563rem] leading-[1.813rem] text-secondary sm:w-4/5 lg:text-start 2xl:leading-[2rem]"
        >
          Temos a missão de proporcionar a você um estilo de vida mais saúdavel.
        </p>
      </div>
      <!-- img -->
      <div
        class="hidden w-full rounded-[1.25rem] bg-hero-pattern bg-cover bg-center bg-no-repeat sm:block sm:h-2/4 sm:w-2/3 md:h-full md:w-2/4 lg:w-full lg:rounded-[2.5rem] 2xl:h-[80%]"
      ></div>
    </div>
  </header>
  <main
    class="flex flex-col items-center px-[1.563rem] lg:px-[3.125rem] 2xl:px-[6.25rem]"
  >
    <TheSection title="Benefícios Naturais">
      <div
        class="mt-[3.125rem] flex w-full flex-col justify-center gap-[1.563rem] lg:flex-row"
      >
        <TheCard
          img="/art1.svg"
          alt="Plantando uma árvore"
          title="Sustentável ao meio ambiente"
        />
        <TheCard
          img="/art2.svg"
          alt="Clínica de hospital"
          title="Saúdavel ao seu organismo"
        />
        <TheCard
          img="/art3.svg"
          alt="Pessoa em frente a uma árvore"
          title="Melhor qualidade de vida"
        />
      </div>
    </TheSection>
    <TheSection title="Confiança Equilibrada">
      <div
        class="mt-[3.125rem] flex w-full flex-col justify-center gap-[1.563rem] lg:flex-row"
      >
        <TheWitnessCard
          message="“Adoro os produtos de vocês, muita variedade e qualidade, sempre sou muito bem atendida, super recomendo.”"
        />
        <TheWitnessCard
          message="“Equilíbrio Natural, é uma ótima loja sempre tendo novidades e produtos frescos, sempre encontrei o que procurava. Recomendo.”"
        />
      </div>
    </TheSection>
    <TheSection title="Veja mais">
      <div
        class="mt-[3.125rem] flex w-full flex-col justify-center gap-[1.563rem] sm:flex-row"
      >
        <TheInfoCard
          title="Entre em contato"
          img="/contact.avif"
          alt="Caixas de e-mail"
          link="/contato"
        />
        <TheInfoCard
          title="Produtos naturais"
          img="/products.avif"
          alt="Produto natural"
          link="/produtos"
        />
      </div>
    </TheSection>
    <img
      ref="hiddenItem"
      class="mt-[3.125rem] w-2/3 pb-[0.5rem] opacity-0 transition-opacity duration-1000 motion-reduce:transition-none md:mt-[6.25rem] md:pb-[3.125rem] lg:h-[30rem] 2xl:mt-[6.25rem] 2xl:h-[50rem] 2xl:pb-[3.125rem]"
      src="/art4.svg"
      alt="Relaxando com o equilíbrio natural"
      draggable="false"
      loading="lazy"
    />
  </main>
  <TheFooter />
</template>
