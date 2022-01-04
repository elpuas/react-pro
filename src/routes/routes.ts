import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/';

// type JSXComponnet = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: () => JSX.Element;
    name: string;
    children?: Route[];
}

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        name: 'LazyPage-1',
        Component: LazyPage1,
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        name: 'LazyPage-2',
        Component: LazyPage2,
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        name: 'LazyPage-3',
        Component: LazyPage3,
    },
]