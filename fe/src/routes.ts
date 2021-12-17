import {Home} from "./screens/home";
import {About} from "./screens/about";
import {Blogs} from "./screens/blogs";

interface RouteConfig  {
    text: string
    path: string,
    component?: any,
}

export const routes: RouteConfig[] = [
    {
        text: 'Home',
        path: '/',
        component: Home(),
    },
    {
        text: 'Blogs',
        path: '/blogs',
        component: Blogs(),
    },
    {
        text: 'About',
        path: '/about',
        component: About(),
    }
]