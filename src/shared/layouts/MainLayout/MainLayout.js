import BaseComponent from '../../../core/BaseComponent';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './MainLayout.scss';

class MainLayout extends BaseComponent {
    constructor({
        state,
        setState,
        subscribe,
        title,
        copyright
    }) {
        super({
            className: 'main-layout',
            children: [
                new Header({ title }),
                new Main({ 
                    state,
                    setState,
                    subscribe
                }),
                new Footer({ copyright })
            ]
        });
    }
}

export default MainLayout;