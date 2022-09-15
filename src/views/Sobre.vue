<script setup></script>

<template>
    <header class="flex flex-col">
        <nav class="flex flex-row min-w-full py-10 px-10 lg:px-14 xl:px-28 items-center gap-8">
            <p class="text-lg font-bold">Equilibrio Natural 🌱</p>
            <router-link class="text-green-600" to="/">Home</router-link>
            <router-link class="text-green-600" to="/Sobre">Sobre</router-link>
            <router-link class="text-green-600" to="/Contato">Contato</router-link>
        </nav>
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
            <!-- titles -->
            <div class="flex flex-col items-center gap-3">
                <p class="text-xs text-neutral-500 uppercase">Lorem ipsum dolor sit amet</p>
                <h2 class="text-3xl font-medium font-serif">Conheça nosso time:</h2>
                <p class="text-sm text-neutral-900">Pode confiar:</p>
            </div>
            <div class="flex flex-col lg:grid grid-cols-3 auto-rows-auto w-full mt-10 gap-10 lg:gap-4 items-center">
                <div class="flex flex-col w-full max-w-sm h-96 p-10 gap-4 bg-green-50 shadow-md">
                    <div class="w-full h-full bg-black">.</div>
                    <div class="flex flex-col items-center gap-2">
                        <p class="text-2xl font-serif">Nome</p>
                        <p>Função</p>
                    </div>
                </div>
                <div class="flex flex-col w-full max-w-sm h-96 p-10 gap-4 bg-green-50 shadow-md">
                    <div class="w-full h-full bg-black">.</div>
                    <div class="flex flex-col items-center gap-2">
                        <p class="text-2xl font-serif">Nome</p>
                        <p>Função</p>
                    </div>
                </div>
                <div class="flex flex-col w-full max-w-sm h-96 p-10 gap-4 bg-green-50 shadow-md">
                    <div class="w-full h-full bg-black">.</div>
                    <div class="flex flex-col items-center gap-2">
                        <p class="text-2xl font-serif">Nome</p>
                        <p>Função</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>