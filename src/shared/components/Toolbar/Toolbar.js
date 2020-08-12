import BaseComponent from '../../../core/BaseComponent';
import Button from '../Button/Button';
import InputWithIcon from '../InputWithIcon/InputWithIcon';
import './Toolbar.scss';

class Toolbar extends BaseComponent {
    constructor({
        setState,
        activeCategory, 
        allProducts,
        subscribe
    }) {
        super({
            setState,
            subscribe,
            className: 'toolbar',
            html: `<div class="toolbar__categories"></div>`
        });

        const categories = allProducts.map(p => p.category);
        const buttons = [...new Set(categories)]
            .map(category => new Button({
                className: [
                    'primary-btn',
                    category !== activeCategory 
                        ? 'primary-btn--simple' 
                        : '',
                    'primary-btn--default',
                    'toolbar__btn'
                ].join(' '),
                attributes: {
                    'data-category': category
                },
                text: category
            }));

        this.findNode('.toolbar__categories')
            .append(buttons)
            .addListeners({
                click: this._handleCategoryChange.bind(this)
            })
            .after(new InputWithIcon({
                styles: {
                    wrapperClass: 'toolbar__serch'
                },
                icon: '<i class="fas fa-search toolbar__search-icon"></i>'
            }))
            .resetFoundNode();
    }

    _render(prevState, nextState) {
        if (prevState.activeCategory === nextState.activeCategory) return;

        const categoryBtns = document.querySelectorAll('.toolbar__btn');

        for (const categoryBtn of categoryBtns) {
            const { category } = categoryBtn.dataset;

            if (category === nextState.activeCategory) {

                categoryBtn.classList.remove('primary-btn--simple');

                continue;
            }

            categoryBtn.classList.add('primary-btn--simple');
        }
    }

    _handleCategoryChange(e) {
        if (e.target.tagName !== 'BUTTON') return;
        
        const { category } = e.target.dataset;

        this._setState({ 
            activeCategory: category,
            currentPage: 1 
        });
    }
}

export default Toolbar;
