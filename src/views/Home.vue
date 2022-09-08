<script setup>

</script>

<template>
    <!-- hero -->
    <header class="flex flex-row min-h-screen">
        <!-- titles -->
        <div class="flex flex-col w-6/12 px-28 justify-center gap-3">
            <h1 class="text-5xl font-semibold font-serif">Temos a missão de proporcionar à você um estilo de vida mais saudável 💛💚</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas purus.</p>
            <button class="w-56 mt-8 h-12 font-medium uppercase text-sm bg-green-400">Ver mais</button>
        </div>

        <!-- cover -->
        <div class="w-6/12 bg-[url('src/assets/img.jpg')] bg-no-repeat bg-cover bg-center">
        </div>
    </header>

    <main class="flex flex-col px-28">

        <!-- benefits -->
        <div class="flex flex-col mt-12 gap-12">
            <!-- titles -->
            <div class="flex flex-col items-center gap-3">
                <p class="text-sm text-neutral-500 uppercase">Lorem ipsum dolor sit amet</p>
                <h2 class="text-4xl font-medium font-serif">Lorem ipsum dolor sit amet</h2>
                <p class="text-neutral-900">Pode confiar:</p>
            </div>

            <!-- cards -->
            <div class="flex flex-row gap-8">
                <div class="flex flex-col w-full h-96 shadow-md">
                    <div class="bg-neutral-800 h-3/6"></div>
                    <div class="flex flex-col px-4 h-3/6 items-center justify-evenly gap-2">
                        <p class="text-2xl font-serif">beneficio</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <hr class="w-1/3 border-2 border-solid border-green-400">
                    </div>
                </div>

                <div class="flex flex-col w-full h-96 shadow-md">
                    <div class="bg-neutral-800 h-3/6"></div>
                    <div class="flex flex-col px-4 h-3/6 items-center justify-evenly gap-2">
                        <p class="text-2xl font-serif">beneficio</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <hr class="w-1/3 border-2 border-solid border-green-400">
                    </div>
                </div>

                <div class="flex flex-col w-full h-96 shadow-md">
                    <div class="bg-neutral-800 h-3/6"></div>
                    <div class="flex flex-col px-4 h-3/6 items-center justify-evenly gap-2">
                        <p class="text-2xl font-serif">beneficio</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <hr class="w-1/3 border-2 border-solid border-green-400">
                    </div>
                </div>
            </div>
        </div>
        
    </main>
</template>