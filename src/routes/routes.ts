import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));
// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazy-layout/',
        path: 'lazy-layout/*',
        name: 'Lazy Layout',
        Component: LazyLayout,
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        name: 'No Lazy',
        Component: NoLazy,
    },
]