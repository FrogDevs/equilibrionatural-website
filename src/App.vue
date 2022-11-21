<script setup></script>
<template>
  <router-view />
  <footer
    class="mt-[3.125rem] flex flex-col gap-[3.125rem] rounded-t-[1.875rem] bg-primary p-[1.563rem]"
  >
    <div class="flex flex-col gap-[1.25rem]">
      <div class="flex flex-col gap-[0.625rem]">
        <p class="text-[1.563rem] font-medium text-green2">Recursos</p>
        <p class="text-[1.25rem] text-green2">Contate-nos</p>
      </div>
      <div class="flex flex-col gap-[0.625rem]">
        <p class="text-[1.563rem] font-medium text-green2">Produtos</p>
        <p class="text-[1.25rem] text-green2">Disponíveis em loja</p>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-[1.25rem] text-green2">Copyright ©2022.</p>
      <a
        class="cursor-pointer text-[1.25rem] text-tertinary hover:text-green2"
        href="https://github.com/FrogDevs"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by Frog Dev's.
      </a>
    </div>
  </footer>
</template>
