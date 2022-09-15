<script setup>
    import TheNavbar from '../components/TheNavbar.vue';
    import CardTeam from '../components/CardTeam.vue';
import TheTitles from '../components/TheTitles.vue';
</script>

<template>
    <header class="flex flex-col px-10 lg:px-28">
        <TheNavbar />
    </header>
    <main class="flex flex-col">
        <section class="flex flex-col lg:flex-row lg:mt-12">
            <div class="flex flex-col lg:w-6/12 px-10 lg:px-14 xl:px-28 justify-center gap-4">
                <h1 class="text-5xl font-semibold font-serif">Sobre nós</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat maecenas. Velit dignissim sodales ut eu sem integer vitae justo eget. Netus et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui faucibus. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Integer vitae justo eget magna fermentum iaculis eu non diam. Aliquam purus sit amet luctus venenatis lectus. Mi in nulla posuere sollicitudin aliquam. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.</p>
            </div>
            <div class="flex flex-row lg:w-6/12 h-auto lg:max-h-96 pt-10 lg:pt-0 lg:pr-14 xl:pr-28 justify-center">
                <img class="drop-shadow-2xl" src="src/assets/about-prev.jpg" alt="about-prev" draggable="false">
            </div>
        </section>
        <section class="flex flex-col mt-10 lg:mt-12 px-10 lg:px-14 xl:px-28 items-center">
            <TheTitles />
            <div class="flex flex-col lg:grid grid-cols-3 auto-rows-auto w-full mt-10 gap-10 lg:gap-4 items-center">
                <CardTeam />
                <CardTeam />
                <CardTeam />
            </div>
        </section>
    </main>
</template>