import BaseComponent from '../../../core/BaseComponent';
import Product from './Product/Product';
import './Products.scss';

class Products extends BaseComponent {
    constructor({  
        products,
        setState,
        subscribe 
        }) {
        super({
            setState,
            subscribe,
            className: 'products',
            children: products.map(product => new Product({ ...product }))   
        });
    }

    _render(prevState, nextState) {
        const isEqualCategory = prevState.activeCategory === nextState.activeCategory;
        const isEqualPage = prevState.currentPage === nextState.currentPage;

        if (isEqualCategory && isEqualPage) return;

        const { currentPage, perPage } = nextState;

        const start = (currentPage - 1) * perPage;
        const end = currentPage * perPage;

        const filteredProducts = nextState.allProducts
        .filter(p => p.category === nextState.activeCategory)
        .slice(start, end);

        // this._setState({ products: filteredProducts });

        this.truncateContent()
            .append(filteredProducts.map(product => new Product({ ...product })));
    }
}

export default Products;