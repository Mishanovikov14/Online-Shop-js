import BaseComponent from '../../../../../core/BaseComponent';
import Sidebar from '../Sidebar/Sidebar';
import Toolbar from '../../../../components/Toolbar/Toolbar';
import Products from '../../../../components/Products/Products';
import Pagination from '../../../../components/Pagination/Pagination';
import './Main.scss';


class Main extends BaseComponent {
    constructor({
        state: {
            activeCategory,
            allProducts,
            products,
            currentPage,
            perPage
        },
        setState,
        subscribe 
    }) {
        super({
            tagName: 'main',
            className: 'main-layout__main',
            html: `
                <div class="main-layout__main-wrapper">
                    <div class="main-layout__products-wrapper"></div>
                </div>
            `
        });

        this.findNode('.main-layout__main-wrapper')
            .before(new Toolbar({
                setState, 
                activeCategory,
                allProducts,
                subscribe
            }))
            .prepend(new Sidebar())
            .findNode('.main-layout__products-wrapper')
            .append([
                new Products({
                    products,
                    setState,
                    subscribe 
                }),
                new Pagination({
                    styles: {
                        wrapperClass: 'main-layout__products-pagination',
                        activeBtnClass: 'primary-btn',
                        btnClass: 'primary-btn--unactive'
                    },
                    totalCount: products.length,
                    currentPage,
                    perPage,
                    setState,
                    subscribe 
                })
            ]);
    }
}

export default Main;