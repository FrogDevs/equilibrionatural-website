<script setup>
    import TheNavbar from '../components/TheNavbar.vue';
    import SocialLink from '../components/SocialLink.vue';
    import TheTitles from '../components/TheTitles.vue';
    import TheButton from '../components/TheButton.vue';

    const social = [
        {
            id: 0,
            icon: 'ri-whatsapp-line',
            social: 'Whatsapp',
            link: '(xx) xxxxx-xxxx'
        },
        {
            id: 1,
            icon: 'ri-instagram-line',
            social: 'Instagram',
            link: '(xx) xxxxx-xxxx'
        },
        {
            id: 2,
            icon: 'ri-facebook-box-line',
            social: 'Facebook',
            link: '(xx) xxxxx-xxxx'
        },
        {
            id: 3,
            icon: 'ri-mail-line',
            social: 'E-mail',
            link: '(xx) xxxxx-xxxx'
        },
    ]
</script>

<template>
    <header class="flex flex-col px-10 lg:px-28">
        <TheNavbar />
    </header>
    <main class="lg:relative flex flex-col">
        <section class="flex flex-row w-full lg:mt-12 py-12 px-10 lg:px-28 bg-green-50">
            <div class="flex flex-col gap-8">
                <SocialLink 
                    v-for="items in social"
                    :key="items.id"
                    :icon="items.icon"
                    :social="items.social"
                    :link="items.link" 
                />
            </div>
        </section>
        <!-- contact -->
        <div class="lg:absolute right-0 flex flex-col max-w-xl lg:mr-28 pt-12 px-12 lg:pb-28 gap-4 bg-white lg:shadow-lg">
            <h1 class="text-amber-900 text-5xl font-semibold font-serif">Contate agora</h1>
            <p class="text-sm text-zinc-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat maecenas.</p>
            <form class="flex flex-col items-center lg:items-start gap-6" action="https://formsubmit.co/your@email.com" method="POST">
                <input class="w-full bg-transparent border-b-2" placeholder="Nome *" type="text" id="name" required />
                <input class="w-full bg-transparent border-b-2" type="email" id="email" placeholder="E-mail *" required />
                <input class="w-full bg-transparent border-b-2" type="tel" id="number" placeholder="Telefone *" required />
                <textarea class="w-full h-8 bg-transparent border-b-2 resize-none" id="message" placeholder="Mensssagem *" required />

                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Nova pessoa em contato!">
                <input type="hidden" name="_autoresponse" value="Agradecemos o contato conosco, estaremos respondendo assim que possível!">
                <!-- <input type="hidden" name="_next" value="https://vcosta-portifolio.vercel.app/assets/html/thanks.html"> -->
                <TheButton message="Enviar" icon="ri-send-plane-fill" />
            </form>
        </div>
        <!-- map -->
        <section class="flex flex-col w-full mt-10 lg:mt-24 px-10 lg:px-28 items-center gap-10">
            <the-titles :is-small="true" section="Lorem ipsum dolor sit amet" title="Conheça nosso time:" subtitle="Pode confiar:" />
            <iframe width="100%" height="400" src="https://maps.google.com/maps?q=R.%20Imber%C3%A9,%20n%C2%B0373%20-%20Cidade%20Ipava,%20S%C3%A3o%20Paulo%20-%20SP,%2004950-080&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </section>
    </main>
</template>