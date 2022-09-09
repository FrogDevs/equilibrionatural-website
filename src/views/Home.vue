<script setup>

</script>

<template>
    <!-- header hero -->
    <header class="flex flex-row min-h-screen">
        <!-- titles -->
        <div class="flex flex-col w-6/12 px-28 justify-center gap-3">
            <h1 class="text-5xl font-semibold font-serif">Temos a missão de proporcionar à você um estilo de vida mais saudável 💛💚</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas purus.</p>
            <button class="w-56 mt-8 h-12 font-medium uppercase text-sm bg-green-400">Ver mais</button>
        </div>

        <!-- cover -->
        <div class="w-6/12 bg-[url('src/assets/hero-img.jpg')] bg-no-repeat bg-cover bg-center">
        </div>
    </header>

    <main class="flex flex-col px-28">

        <!-- benefits -->
        <section class="flex flex-col mt-12 gap-12">
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
        </section>

        <!-- about prev -->
        <section class="relative h-128 mt-12">
            <!-- img -->
            <div class="static w-7/12 h-full bg-[url('src/assets/about-prev.jpg')] bg-no-repeat bg-cover bg-center">

                <!-- card cover -->
                <div class="m-auto absolute right-0 flex w-3/6 h-full items-center">
                    <!-- card -->
                    <div class="flex flex-col p-10 h-fit gap-4 bg-white">
                        <p class="text-sm text-neutral-500 uppercase">Lorem ipsum dolor sit amet</p>
                        <h3 class="text-3xl font-medium font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <p class="text-neutral-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in. Eu facilisis sed odio morbi quis commodo odio aenean. Eget mauris pharetra et ultrices neque ornare.</p>
                        <button class="w-56 h-12 font-medium uppercase text-sm text-white bg-neutral-800">Sobre nós</button>
                    </div>
                </div>
            </div>

            

        </section>
    </main>
</template>