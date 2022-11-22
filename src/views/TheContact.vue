<script setup>
import TheInfoContact from '../components/TheInfoContact.vue'
import TheMapCard from '../components/TheMapCard.vue'
import TheTextfied from '../components/TheTextfied.vue'
</script>
<template>
  <header
    class="relative flex w-full flex-col justify-between bg-green2 md:mr-[3.125rem] md:flex-row lg:mt-[6.25rem] lg:flex-row lg:px-[3.125rem] 2xl:px-[6.25rem]"
  >
    <!-- hero -->
    <div
      class="top-0 right-0 flex h-full items-center md:absolute lg:mr-[3.125rem] 2xl:mr-[6.25rem]"
    >
      <div
        class="flex h-fit w-full flex-col items-center gap-[1.563rem] rounded-b-[1.875rem] bg-green1 p-[1.563rem] lg:w-fit lg:rounded-[1.875rem] lg:p-[3.125rem] lg:shadow"
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
    </div>
    <section
      class="flex flex-col p-[1.563rem] lg:w-2/4 lg:p-0 lg:py-[1.563rem]"
    >
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
    class="mt-[1.563rem] flex w-full flex-col items-center gap-[1.563rem] px-[1.563rem] md:mt-[3.125rem] md:gap-[3.125rem] lg:mt-[6.25rem] 2xl:px-[6.25rem]"
  >
    <h2
      class="text-center text-[1.563rem] font-bold leading-[1.875rem] text-primary"
    >
      Conheça nossas unidades
    </h2>
    <div
      class="flex flex-col justify-center gap-[1.563rem] md:w-full md:flex-row"
    >
      <TheMapCard title="São Paulo - SP, Rua Imberé - N°373" />
      <TheMapCard title="São Paulo - SP, Av. Taquandava - N°1203" />
    </div>
  </main>
</template>
