import App from './core/App';
import GlobalState from './core/GlobalState';
import render from './core/render';
import productList from './assets/database/products';
import { SIGN_IN } from './shared/components/Auth/Auth';
import './shared/styles/index.scss';

const gs = new GlobalState({
    authMode: SIGN_IN,
    activeCategory: 'TV',
    products: [],
    allProducts: productList,
    currentPage: 1,
    perPage: 2
});

const props = {
    state: gs.state,
    setState: gs.setState.bind(gs),
    subscribe: gs.subscribe.bind(gs),
    title: 'Online Shop',
    copyright: 'All Rights Reserved'
};

render(new App(props), document.getElementById('root'));