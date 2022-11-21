<script setup></script>
<template>
  <router-view />
  <footer
    class="mt-[3.125rem] flex flex-col gap-[3.125rem] rounded-t-[1.875rem] bg-primary p-[1.563rem] lg:p-[3.125rem] 2xl:px-[6.25rem] 2xl:pt-[6.25rem]"
  >
    <div class="flex flex-col gap-[1.25rem] md:flex-row md:gap-[6.25rem]">
      <div class="flex flex-col gap-[0.625rem]">
        <p class="text-[1.563rem] font-medium text-green2 2xl:text-[2rem]">
          Recursos
        </p>
        <p class="text-[1.25rem] text-green2 2xl:text-[1.5rem]">Contate-nos</p>
      </div>
      <div class="flex flex-col gap-[0.625rem]">
        <p class="text-[1.563rem] font-medium text-green2 2xl:text-[2rem]">
          Produtos
        </p>
        <p class="text-[1.25rem] text-green2 2xl:text-[1.5rem]">
          Disponíveis em loja
        </p>
      </div>
    </div>
    <div
      class="flex w-full flex-col items-center justify-center md:flex-row md:gap-[1rem]"
    >
      <p class="text-[1.25rem] text-green2 2xl:text-[1.5rem]">
        Copyright ©2022.
      </p>
      <a
        class="cursor-pointer text-[1.25rem] text-tertinary hover:text-green2 2xl:text-[1.5rem]"
        href="https://github.com/FrogDevs"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by Frog Dev's.
      </a>
    </div>
  </footer>
</template>
