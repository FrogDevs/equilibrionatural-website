<script setup>
import TheInfoContact from '../components/TheInfoContact.vue'
import TheTextfied from '../components/TheTextfied.vue'
</script>
<template>
  <header class="flex flex-col bg-green2">
    <!-- hero -->
    <div
      class="flex flex-col items-center gap-[1.563rem] rounded-b-[1.875rem] bg-green1 p-[1.563rem]"
    >
      <h1
        class="text-center text-[3.125rem] font-bold leading-[3.75rem] text-primary"
      >
        Contate agora
      </h1>
      <form class="flex w-full flex-col items-center gap-[1.25rem]">
        <TheTextfied type="text" placeholder="Nome" />
        <TheTextfied type="email" placeholder="E-mail" />
        <TheTextfied type="tel" placeholder="Telefone" />
        <TheTextfied type="text" placeholder="Menssagem" />
        <input
          class="flex w-fit cursor-pointer justify-center rounded-full bg-tertinary py-[0.625rem] px-[2.5rem] text-green2"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
    <section class="flex flex-col p-[1.563rem]">
      <TheInfoContact icon="ri-whatsapp-line" title="(11) 96446-4442" />
      <TheInfoContact
        icon="ri-instagram-line"
        title="@equilibrionatural_vilagilda"
      />
      <TheInfoContact icon="ri-facebook-fill" title="Equilibrio Natural" />
      <TheInfoContact
        icon="ri-mail-line"
        title="equilibrionaturalloja@gmail.com"
      />
    </section>
  </header>
  <main
    class="mt-[1.563rem] flex w-full flex-col items-center gap-[1.563rem] px-[1.563rem]"
  >
    <h2
      class="text-center text-[1.563rem] font-bold leading-[1.875rem] text-primary"
    >
      Conheça nossas unidades
    </h2>
    <!-- map cards -->
    <div class="flex flex-col items-center gap-[1.563rem]">
      <p class="text-center text-[1.563rem] leading-[1.875rem] text-secondary">
        Rua Imberé - N°373
      </p>
      <div class="h-[10rem] w-[16.875rem] rounded-[1.25rem] bg-green2"></div>
    </div>
    <div class="flex flex-col items-center gap-[1.563rem]">
      <p class="text-center text-[1.563rem] leading-[1.875rem] text-secondary">
        AV. Taquandava - N°1203
      </p>
      <div class="h-[10rem] w-[16.875rem] rounded-[1.25rem] bg-green2"></div>
    </div>
  </main>
</template>
