import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Contato from '../views/Contato.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sobre',
        name: 'Sobre',
        component: Sobre
    },
    {
        path: '/contato',
        name: 'Contato',
        component: Contato
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
