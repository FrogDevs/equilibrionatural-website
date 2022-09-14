<script setup>

</script>

<template>
    <header class="flex flex-col">
        <nav class="flex flex-row min-w-full py-10 px-28 items-center gap-8">
            <p class="text-lg font-bold">Equilibrio Natural 🌱</p>
            <router-link class="text-green-600" to="/">Home</router-link>
            <router-link class="text-green-600" to="/Sobre">Sobre</router-link>
            <router-link class="text-green-600" to="/Contato">Contato</router-link>
        </nav>
    </header>
    <main class="min-h-screen m-0 p-0">
        <section class="flex flex-flow mt-12">
            <div class="flex flex-col w-6/12 px-28 justify-center gap-4">
                <h1 class="text-5xl font-semibold font-serif">Sobre nós</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat maecenas. Velit dignissim sodales ut eu sem integer vitae justo eget. Netus et malesuada fames ac turpis egestas. Quis enim lobortis scelerisque fermentum dui faucibus. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Integer vitae justo eget magna fermentum iaculis eu non diam. Aliquam purus sit amet luctus venenatis lectus. Mi in nulla posuere sollicitudin aliquam. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.</p>
            </div>
            <div class="flex flex-row pr-28 justify-center w-6/12 h-auto max-h-96">
                <img class="drop-shadow-2xl" src="src/assets/about-prev.jpg" alt="about-prev" draggable="false">
            </div>
        </section>
        <section class="flex flex-col mt-12 px-28 items-center">

            <!-- titles -->
            <div class="flex flex-col items-center gap-3">
                <p class="text-xs text-neutral-500 uppercase">Lorem ipsum dolor sit amet</p>
                <h2 class="text-3xl font-medium font-serif">Conheça nosso time:</h2>
                <p class="text-sm text-neutral-900">Pode confiar:</p>
            </div>

            <div class="grid grid-cols-3 auto-rows-auto mt-10 gap-4">
                <div class="flex flex-col w-full max-w-sm h-96 p-10 gap-4 bg-green-50 shadow-md">
                    <div class="flex flex-row items-center gap-4">
                        <div class="w-20 h-20 rounded-full bg-black"></div>
                        <p class="text-xl">Paulo o tario</p>
                    </div>
                    <div class="flex flex-col h-3/6 gap-4">
                        <p class="text-2xl font-serif">Legal</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>

                <div class="flex flex-col w-full max-w-sm h-96 p-10 gap-4 bg-green-50 shadow-md">
                    <div class="flex flex-row items-center gap-4">
                        <div class="w-20 h-20 rounded-full bg-black"></div>
                        <p class="text-xl">Paulo o tario</p>
                    </div>
                    <div class="flex flex-col h-3/6 gap-4">
                        <p class="text-2xl font-serif">Legal</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>

                <div class="flex flex-col w-full max-w-sm h-96 p-10 gap-4 bg-green-50 shadow-md">
                    <div class="flex flex-row items-center gap-4">
                        <div class="w-20 h-20 rounded-full bg-black"></div>
                        <p class="text-xl">Paulo o tario</p>
                    </div>
                    <div class="flex flex-col h-3/6 gap-4">
                        <p class="text-2xl font-serif">Legal</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>