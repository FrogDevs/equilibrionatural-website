<script setup></script>
<template>
  <main
    class="flex h-screen flex-col items-center justify-center gap-[1.25rem] p-[3.125rem] lg:gap-[2.5rem]"
  >
    <h1
      class="text-center text-[1.563rem] font-bold leading-[1.875rem] text-primary lg:text-[3.125rem] lg:leading-[3.688rem]"
    >
      Oops! Página não encontrada
    </h1>
    <router-link
      to="/"
      class="cursor-pointer text-center text-[1.25rem] leading-[1.875rem] text-secondary duration-200 ease-out hover:text-[#8F6F57] lg:text-[1.563rem]"
    >
      🪴 Voltar a página inicial 🍃
    </router-link>
    <img
      class="pb-[0.5rem] md:w-1/3"
      src="/art5.svg"
      alt="Relaxando com o equilíbrio natural"
      draggable="false"
      loading="lazy"
    />
  </main>
</template>
