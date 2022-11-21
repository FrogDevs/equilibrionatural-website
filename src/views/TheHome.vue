<script setup>
import TheCard from '../components/TheCard.vue'
import TheHomeSection from '../components/TheHomeSection.vue'
import TheInfoCard from '../components/TheInfoCard.vue'
import TheWitnessCard from '../components/TheWitnessCard.vue'
</script>
<template>
  <header
    class="h-screen rounded-b-[1.875rem] bg-green2 px-[1.563rem] lg:rounded-b-[3.75rem] lg:px-[3.125rem] 2xl:px-[6.25rem]"
  >
    <!-- hero -->
    <div
      class="flex h-full flex-col items-center justify-center gap-[1.25rem] lg:flex-row lg:justify-start lg:gap-[6.25rem]"
    >
      <!-- content -->
      <div
        class="flex w-full flex-col items-center gap-5 lg:w-1/3 lg:items-start"
      >
        <div
          class="flex flex-col text-center text-[3.125rem] leading-[3.688rem] text-primary lg:text-start 2xl:text-[3.75rem] 2xl:leading-[4.5rem]"
        >
          <h1>Equilíbrio</h1>
          <h1 class="font-bold">Natural</h1>
        </div>
        <p
          class="text-center text-[1.563rem] leading-[1.813rem] text-secondary sm:w-4/5 lg:text-start 2xl:leading-[2rem]"
        >
          Temos a missão de proporcionar a você um estilo de vida mais saúdavel.
        </p>
      </div>
      <video
        class="rounded-[1.25rem] sm:w-2/3 md:w-2/4 lg:w-full lg:rounded-[2.5rem]"
        autoplay
        loop
        preload="auto"
        poster="/postervideo.avif"
      >
        <source src="/equilibrionatural.mp4" type="video/mp4" />
      </video>
    </div>
  </header>
  <main
    class="flex flex-col items-center px-[1.563rem] lg:px-[3.125rem] 2xl:px-[6.25rem]"
  >
    <TheHomeSection title="Benefícios Naturais">
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
    </TheHomeSection>
    <TheHomeSection title="Confiança Equilibrada">
      <div
        class="mt-[3.125rem] flex w-full flex-col gap-[1.563rem] lg:flex-row"
      >
        <TheWitnessCard
          message="“Adoro os produtos de vocês, muita variedade e qualidade, sempre sou muito bem atendida, super recomendo.”"
        />
        <TheWitnessCard
          message="“Equilíbrio Natural, é uma ótima loja sempre tendo novidades e produtos frescos, sempre encontrei o que procurava. Recomendo.”"
        />
      </div>
      <div
        class="mt-[3.125rem] flex w-full flex-col gap-[1.563rem] sm:flex-row"
      >
        <TheInfoCard title="Entre em contato" img="/contact.avif" />
        <TheInfoCard title="Produtos naturais" img="/products.avif" />
      </div>
    </TheHomeSection>
    <img
      class="mt-[3.125rem] w-2/3 pb-[0.5rem] md:mt-[6.25rem] md:pb-[3.125rem] lg:w-1/3 2xl:mt-[12.5rem] 2xl:pb-[6.25rem]"
      src="/art4.svg"
      alt="Relaxando com o equilíbrio natural"
      loading="lazy"
    />
  </main>
</template>
