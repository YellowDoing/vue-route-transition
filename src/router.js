import {createRouter, createWebHashHistory} from "vue-router";
import HomeView from "./components/HomeView";
import About from "./components/AboutView";

 const router =  createRouter(
    {
        history: createWebHashHistory(),
        routes: [
            {
                path: '/',
                name: 'HomeView',
                component: HomeView
            },
            {
                path: '/About',
                name: 'AboutView',
                component: About
            },
        ]
    }
)


export default router;
