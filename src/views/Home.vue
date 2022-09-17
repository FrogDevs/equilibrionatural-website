<script setup>
    import TheNavbar from '../components/TheNavbar.vue';
    import TheButton from '../components/TheButton.vue';
    import TheTitles from '../components/TheTitles.vue';
    import CardBenefit from '../components/CardBenefit.vue';
    import CardReview from '../components/CardReview.vue';
    import QuestionBox from '../components/QuestionBox.vue';

    import { ref } from 'vue';


    const benefits = [
        {
            id: 0,
            picture: '',
            title: 'Benefit',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            id: 1,
            picture: '',
            title: 'Benefit',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            id: 2,
            picture: '',
            title: 'Benefit',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
    ]

    const reviews = [
        {
            id: 0,
            isSmall: true,
            picture: '',
            name: 'Paulo o tario',
            comentary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 1,
            isSmall: false,
            picture: '',
            name: 'Paulo o tario',
            comentary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            isSmall: true,
            picture: '',
            name: 'Paulo o tario',
            comentary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]

    const questions = [
        {
            id: 0,
            question: 'pedro cueca?',
            answer: 'Sim'
        },
        {
            id: 1,
            question: 'pedro cueca?',
            answer: 'Sim'
        },
        {
            id: 2,
            question: 'pedro cueca?',
            answer: 'Sim'
        }
    ]

    function toggleAnswer(id) {
        // questions[id].activated = !questions[id].activated
        // console.log(questions[id].activated);
        questions[id].activated = true
        console.log(questions[id].activated);
    }
</script>

<template>
    <header class="flex flex-col lg:flex-row min-h-screen">
        <!-- hero -->
        <div class="flex flex-col grow lg:w-6/12 px-10 lg:px-28 mt-10 gap-4">
            <the-navbar />
            <h1 class="text-amber-900 text-3xl xl:text-5xl  font-semibold font-serif">Temos a missão de proporcionar à você um estilo de vida mais saudável 💛💚</h1>
            <p class="text-zinc-800">Temos a missão de proporcionar à você um estilo de vida mais saudável 💛💚.</p>
            <the-button icon="ri-arrow-down-s-line" message="ver mais" />
        </div>
        <!-- image -->
        <div class="hidden lg:block lg:w-6/12 bg-[url('src/assets/hero-img.jpg')] bg-no-repeat bg-cover bg-center">
        </div>
    </header>
    <main class="flex flex-col">
        <!-- benefits -->
        <section class="flex flex-col pt-10 lg:pt-12 px-10 lg:px-28 items-center gap-10 lg:gap-12 bg-slate-50">
            <the-titles section="Lorem ipsum dolor sit amet" title="Conheça nosso time:" subtitle="Pode confiar:" />
            <div class="flex flex-col lg:flex-row justify-center gap-5">
                <card-benefit 
                    v-for="items in benefits"
                    :key="items.id" 
                    :picture="items.picture"
                    :title="items.title"
                    :paragraph="items.paragraph"
                />
            </div>
        </section>
        <section class="lg:relative lg:h-128 xl:h-256 py-10 px-10 lg:px-28 bg-slate-50">
            <!-- img -->
            <div class="lg:static flex flex-row items-center lg:w-7/12 h-full lg:bg-[url('src/assets/about-prev.jpg')] bg-no-repeat bg-cover bg-center">
                <!-- card -->
                <div class="lg:absolute right-0 flex lg:w-3/6 h-full items-center">
                    <div class="flex flex-col items-center lg:items-start h-fit p-10 gap-4 bg-slate-50">
                        <p class="uppercase text-center lg:text-start text-sm text-neutral-500 ">Lorem ipsum dolor sit amet</p>
                        <h3 class="text-zinc-800 text-3xl text-center lg:text-start font-medium font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        <p class="text-zinc-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in. Eu facilisis sed odio morbi quis commodo odio aenean. Eget mauris pharetra et ultrices neque ornare.</p>
                        <router-link class="flex flex-row items-center justify-center w-56 mt-8 h-12 font-medium uppercase text-sm text-white transition-colors duration-100 ease-out bg-green-500 hover:bg-green-600" to="/Sobre">
                            Sobre nós
                            <i class="ri-arrow-right-s-line ri-2x"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- reviews -->
        <section class="flex flex-col pt-10 px-10 lg:px-28 items-center">
            <the-titles :is-small="true" section="Lorem ipsum dolor sit amet" title="Conheça nosso time:" subtitle="Pode confiar:" />
            <div class="flex flex-col lg:flex-row pt-10 lg:pt-12 justify-center items-center gap-10 lg:gap-4">
                <card-review
                    v-for="items in reviews"
                    :key="items.id"
                    :is-small="items.isSmall"
                    :picture="items.picture"
                    :name="items.name"
                    :comentary="items.comentary"
                />
            </div>
        </section>
        <!-- message -->
        <div class="flex flex-col w-full mt-10 lg:mt-12 p-10 lg:p-20 justify-center items-center gap-4 bg-[url('src/assets/valadao.jpg')] bg-no-repeat bg-cover bg-center">
            <p class="uppercase text-neutral-400 text-sm">we belive in better</p>
            <p class="text-white text-xl text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in. Metus aliquam eleifend mi in. Metus aliquam eleifend mi in. Metus aliquam eleifend mi in."</p>
        </div>
        <!-- FAQ -->
        <section class="flex flex-col mt-10 px-10 lg:px-28 gap-4 items-center">
            <the-titles :is-small="true" section="Lorem ipsum dolor sit amet" title="Conheça nosso time:" subtitle="Pode confiar:" />
            <question-box
                v-for="items in questions"
                :key="items.id"
                :activated="items.activated"
                :question="items.question"
                :answer="items.answer"
                @show-answer="toggleAnswer(items.id)"
            />
        </section>
    </main>
</template>