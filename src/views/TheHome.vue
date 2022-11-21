<script setup>
import TheCard from '../components/TheCard.vue'
import TheHomeSection from '../components/TheHomeSection.vue'
import TheInfoCard from '../components/TheInfoCard.vue'
import TheWitnessCard from '../components/TheWitnessCard.vue'
</script>
<template>
  <header class="h-screen rounded-b-[1.875rem] bg-green2 px-[1.563rem]">
    <!-- hero -->
    <div class="flex h-full flex-col items-center justify-center gap-5">
      <div class="flex flex-col text-center leading-[3.688rem]">
        <h1 class="text-[3.125rem] text-primary">Equilíbrio</h1>
        <h1 class="text-[3.125rem] font-bold text-primary">Natural</h1>
      </div>
      <p class="text-center text-[1.563rem] leading-[1.813rem] text-secondary">
        Temos a missão de proporcionar a você um estilo de vida mais saúdavel.
      </p>
      <video
        class="rounded-[1.25rem]"
        autoplay
        loop
        preload="auto"
        poster="/postervideo.jpg"
      >
        <source src="/equilibrionatural.mp4" type="video/mp4" />
      </video>
    </div>
  </header>
  <main class="px-[1.563rem]">
    <TheHomeSection title="Benefícios Naturais">
      <div class="mt-[3.125rem] flex flex-col gap-[1.563rem]">
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
      <div class="mt-[3.125rem] flex flex-col gap-[1.563rem]">
        <TheWitnessCard
          message="“Adoro os produtos de vocês, muita variedade e qualidade, sempre sou muito bem atendida, super recomendo.”"
        />
        <TheWitnessCard
          message="“Equilíbrio Natural, é uma ótima loja sempre tendo novidades e produtos frescos, sempre encontrei o que procurava. Recomendo.”"
        />
      </div>
      <div class="mt-[3.125rem] flex flex-col gap-[1.563rem]">
        <TheInfoCard title="Entre em contato" img="/postervideo.jpg" />
        <TheInfoCard title="Produtos naturais" img="/postervideo.jpg" />
      </div>
    </TheHomeSection>
    <img
      class="mt-[6.25rem] pb-[3.125rem]"
      src="/art4.svg"
      alt="Relaxando com o equilíbrio natural"
      loading="lazy"
    />
  </main>
</template>
