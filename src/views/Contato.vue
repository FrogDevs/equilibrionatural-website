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
    <main class="relative flex flex-col">
        <section class="flex flex-row w-full mt-12 py-12 px-28 bg-green-50">
            <!-- socials -->
            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-0">
                    <div class="flex flex-row gap-4 items-center">
                        <i class="ri-whatsapp-line ri-2x text-green-500"></i>
                        <p class="text-2xl font-semibold">Whatsapp</p>
                    </div>
                    <p class="text-lg text-neutral-600">(xx) xxxxx-xxxx</p>                    
                </div>

                <div class="flex flex-col gap-0">
                    <div class="flex flex-row gap-4 items-center">
                        <i class="ri-instagram-line ri-2x text-green-500"></i>
                        <p class="text-2xl font-semibold">Instagram</p>
                    </div>
                    <p class="text-lg text-neutral-600">vnevesz13</p>                    
                </div>

                <div class="flex flex-col gap-0">
                    <div class="flex flex-row gap-4 items-center">
                        <i class="ri-facebook-circle-line ri-2x text-green-500"></i>
                        <p class="text-2xl font-semibold">facebook</p>
                    </div>
                    <p class="text-lg text-neutral-600">Equilibrio natural</p>                    
                </div>

                <div class="flex flex-col gap-0">
                    <div class="flex flex-row gap-4 items-center">
                        <i class="ri-mail-line ri-2x text-green-500"></i>
                        <p class="text-2xl font-semibold">E-mail</p>
                    </div>
                    <p class="text-lg text-neutral-600">email@exemplo.com</p>                    
                </div>
            </div>
        </section>
        <!-- contact -->
        <div class="mr-28 absolute right-0 flex flex-col max-w-xl pt-12 px-12 pb-28 gap-4 bg-white shadow-lg">
            <h1 class="text-5xl font-semibold font-serif">Contate agora</h1>
            <p class="text-sm text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat maecenas.</p>
            <form class="flex flex-col gap-6" action="https://formsubmit.co/your@email.com" method="POST">
                <input class="bg-transparent border-b-2" placeholder="Nome *" type="text" id="name" required />
                <input class="bg-transparent border-b-2" type="email" id="email" placeholder="E-mail *" required />
                <input class="bg-transparent border-b-2" type="tel" id="number" placeholder="Telefone *" required />
                <textarea class="h-8 bg-transparent border-b-2 resize-none" id="message" placeholder="Mensssagem *" required />

                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Nova pessoa em contato!">
                <input type="hidden" name="_autoresponse" value="Agradecemos o contato conosco, estaremos respondendo assim que possível!">
                <!-- <input type="hidden" name="_next" value="https://vcosta-portifolio.vercel.app/assets/html/thanks.html"> -->
                <button class="w-56 mt-8 h-12 font-medium uppercase text-sm text-white bg-green-500">Enviar</button>
            </form>
        </div>

        <section class="flex flex-col w-full mt-24 px-28 items-center gap-10">
            <!-- titles -->
            <div class="flex flex-col items-center gap-3">
                <p class="text-xs text-neutral-500 uppercase">Lorem ipsum dolor sit amet</p>
                <h2 class="text-3xl font-medium font-serif">Conheça nosso time:</h2>
                <p class="text-sm text-neutral-900">Pode confiar:</p>
            </div>

            <iframe width="100%" height="400" src="https://maps.google.com/maps?q=R.%20Imber%C3%A9,%20n%C2%B0373%20-%20Cidade%20Ipava,%20S%C3%A3o%20Paulo%20-%20SP,%2004950-080&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </section>
    </main>
</template>