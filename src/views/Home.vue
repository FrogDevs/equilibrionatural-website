<script setup></script>

<template>
    <header class="flex flex-col lg:flex-row min-h-screen">
        <!-- hero -->
        <div class="flex flex-col grow lg:w-6/12 px-10 lg:px-28 mt-10 lg:justify-center gap-4">
            <nav class="flex flex-row items-center my-5 lg:my-12 gap-8">
                <p class="lg:text-lg font-bold">Equilibrio Natural 🌱</p>
                <router-link class="text-green-600" to="/">Home</router-link>
                <router-link class="text-green-600" to="/Sobre">Sobre</router-link>
                <router-link class="text-green-600" to="/Contato">Contato</router-link>
            </nav>
            <h1 class="text-3xl xl:text-5xl  font-semibold font-serif">Temos a missão de proporcionar à você um estilo de vida mais saudável 💛💚</h1>
            <p>Temos a missão de proporcionar à você um estilo de vida mais saudável 💛💚.</p>
            <button class="w-56 mt-8 h-12 font-medium uppercase text-sm text-white bg-green-500">Ver mais</button>
        </div>
        <!-- image -->
        <div class="hidden lg:block lg:w-6/12 bg-[url('src/assets/hero-img.jpg')] bg-no-repeat bg-cover bg-center">
        </div>
    </header>
    <main class="flex flex-col">
        <!-- benefits -->
        <section class="flex flex-col pt-10 lg:pt-12 px-10 lg:px-28 items-center gap-10 lg:gap-12 bg-slate-50">
            <!-- titles -->
            <div class="flex flex-col items-center gap-3">
                <p class="uppercase text-sm text-neutral-500">Lorem ipsum dolor sit amet</p>
                <h2 class="text-center text-4xl font-medium font-serif">Lorem ipsum dolor sit amet</h2>
                <p class="text-neutral-900">Pode confiar:</p>
            </div>
            <!-- cards -->
            <div class="flex flex-col lg:flex-row justify-center gap-5">
                <div class="flex flex-col w-full lg:max-w-sm h-96 shadow-md">
                    <div class="bg-neutral-800 h-3/6"></div>
                    <div class="flex flex-col px-4 h-3/6 items-center justify-evenly bg-green-50">
                        <p class="text-2xl font-serif">beneficio</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <hr class="w-1/3 border-2 border-solid border-green-700">
                    </div>
                </div>
                <div class="flex flex-col w-full lg:max-w-sm h-96 shadow-md">
                    <div class="bg-neutral-800 h-3/6"></div>
                    <div class="flex flex-col px-4 h-3/6 items-center justify-evenly bg-green-50">
                        <p class="text-2xl font-serif">beneficio</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <hr class="w-1/3 border-2 border-solid border-green-700">
                    </div>
                </div>
                <div class="flex flex-col w-full lg:max-w-sm h-96 shadow-md">
                    <div class="bg-neutral-800 h-3/6"></div>
                    <div class="flex flex-col px-4 h-3/6 items-center justify-evenly bg-green-50">
                        <p class="text-2xl font-serif">beneficio</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <hr class="w-1/3 border-2 border-solid border-green-700">
                    </div>
                </div>
            </div>
        </section>
        <!-- about prev -->
        <section class="lg:relative lg:h-128 xl:h-256 py-10 px-10 lg:px-28 bg-slate-50">
            <!-- img -->
            <div class="lg:static flex flex-row items-center lg:w-7/12 h-full lg:bg-[url('src/assets/about-prev.jpg')] bg-no-repeat bg-cover bg-center">
                <!-- card cover -->
                <div class="lg:absolute right-0 flex lg:w-3/6 h-full items-center">
                    <!-- card -->
                    <div class="flex flex-col items-center lg:items-start h-fit p-10 gap-4 bg-slate-50">
                        <p class="uppercase text-center lg:text-start text-sm text-neutral-500 ">Lorem ipsum dolor sit amet</p>
                        <h3 class="text-3xl text-center lg:text-start font-medium font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <p class="text-neutral-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in. Eu facilisis sed odio morbi quis commodo odio aenean. Eget mauris pharetra et ultrices neque ornare.</p>
                        <router-link class="flex flex-row items-center justify-center w-56 mt-8 h-12 font-medium uppercase text-sm text-white bg-green-500" to="/Sobre">Sobre nós</router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- reviews -->
        <section class="flex flex-col pt-10 px-10 lg:px-28 items-center">
            <!-- titles -->
            <div class="flex flex-col items-center gap-3">
                <p class="text-xs text-neutral-500 uppercase">Lorem ipsum dolor sit amet</p>
                <h2 class="text-3xl font-medium font-serif">Lorem ipsum dolor sit amet</h2>
                <p class="text-sm text-neutral-900">Pode confiar:</p>
            </div>
            <!-- cards -->
            <div class="flex flex-col lg:flex-row pt-10 lg:pt-12 justify-center items-center gap-10 lg:gap-4">
                <div class="flex flex-col w-full lg:max-w-sm h-80 p-10 gap-4 bg-green-50 shadow-md">
                    <div class="flex flex-row items-center gap-4">
                        <div class="w-10 xl:w-16 h-10 xl:h-16 bg-black"></div>
                        <p class="text-xl">Paulo o tario</p>
                    </div>
                    <div class="flex flex-col h-3/6 gap-4">
                        <p class="text-2xl font-serif">Legal</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div class="flex flex-col w-full lg:max-w-sm h-80 lg:h-96 p-10 gap-4 bg-green-50 shadow-md">
                    <div class="flex flex-row items-center gap-4">
                        <div class="w-10 xl:w-16 h-10 xl:h-16 bg-black"></div>
                        <p class="text-xl">Paulo o tario</p>
                    </div>
                    <div class="flex flex-col h-3/6 gap-4">
                        <p class="text-2xl font-serif">Legal</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div class="flex flex-col w-full lg:max-w-sm h-80 p-10 gap-4 bg-green-50 shadow-md">
                    <div class="flex flex-row items-center gap-4">
                        <div class="w-10 xl:w-16 h-10 xl:h-16 bg-black"></div>
                        <p class="text-xl">Paulo o tario</p>
                    </div>
                    <div class="flex flex-col h-3/6 gap-4">
                        <p class="text-2xl font-serif">Legal</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- message -->
        <div class="flex flex-col w-full mt-10 lg:mt-12 p-10 lg:p-20 justify-center items-center gap-4 bg-[url('src/assets/valadao.jpg')] bg-no-repeat bg-cover bg-center">
            <p class="uppercase text-neutral-400 text-sm">we belive in better</p>
            <p class="text-white text-xl text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in. Metus aliquam eleifend mi in. Metus aliquam eleifend mi in. Metus aliquam eleifend mi in."</p>
        </div>
        <!-- FAQ -->
        <section class="flex flex-col mt-10 px-10 lg:px-28 gap-4 items-center">
            <!-- titles -->
            <div class="flex flex-col items-center mt-10 gap-3">
                <p class="uppercase text-xs text-neutral-500">Lorem ipsum dolor sit amet</p>
                <h2 class="text-3xl font-medium font-serif">Lorem ipsum dolor sit amet</h2>
                <p class="text-sm text-neutral-900">Pode confiar:</p>
            </div>

            <!-- questions -->
            <div class="flex flex-col justify-center w-full max-w-7xl py-6 px-5 lg:px-10 bg-green-50 shadow-md">
                <div class="flex flex-row items-center justify-between">
                    <p class="text-xl font-serif text-neutral-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                    <i class="ri-arrow-right-s-line ri-xl hover:cursor-pointer"></i>
                </div>
            </div>
            <div class="flex flex-col justify-center w-full max-w-7xl py-6 px-5 lg:px-10 bg-green-50 shadow-md">
                <div class="flex flex-row items-center justify-between">
                    <p class="text-xl font-serif text-neutral-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                    <i class="ri-arrow-right-s-line ri-xl hover:cursor-pointer"></i>
                </div>
            </div>
            <div class="flex flex-col justify-center w-full max-w-7xl py-6 px-5 lg:px-10 bg-green-50 shadow-md">
                <div class="flex flex-row items-center justify-between">
                    <p class="text-xl font-serif text-neutral-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                    <i class="ri-arrow-right-s-line ri-xl hover:cursor-pointer"></i>
                </div>
            </div>
        </section>
    </main>
</template>