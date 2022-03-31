import { createApp } from 'vue'
import App from './App.vue'

import Home from '@/view/Home.vue'
import Page1 from '@/view/ListPosts.vue'
import Page2 from '@/view/Page2.vue'
import Page3 from '@/view/Page3.vue'
import  {createWebHistory ,createRouter} from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/page1",
        name: "Page1",
        component: Page1,
    },

    {
        path: "/page2",
        name: "Page2",
        component: Page2,
    },

    {
        path: "/page3",
        name: "Page3",
        component: Page3,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



createApp(App).use(router).mount('#app')
