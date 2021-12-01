import {Home} from "./screens/home";
import {About} from "./screens/about";
import {Blog} from "./screens/blog";

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
        text: 'Blog',
        path: '/blog',
        component: Blog(),
    },
    {
        text: 'About',
        path: '/about',
        component: About(),
    }
]