import BaseComponent from '../../../core/BaseComponent';
import Button from '../Button/Button';
import './Pagination.scss';

const DEFAULT_STYLES = {
    wrapperClass: '',
    activeBtnClass: '',
    btnClass: ''
}

class Pagination extends BaseComponent {
    constructor({
        styles = DEFAULT_STYLES,
        totalCount,
        currentPage,
        setState,
        perPage,
        subscribe
    } = {}) {

        const { wrapperClass } = styles;

        super({
            state: { styles },
            setState,
            subscribe,
            className: `pagination ${wrapperClass}`
        });

        const buttons = this._drawButtons({
            currentPage,
            perPage,
            totalCount
        });

        this._changeVisibility(buttons.length);

        this.append(buttons)
            .addListeners({ click: this._handleClick.bind(this) });
    }

    _changeVisibility(btnsAmount) {
        if (!btnsAmount) {
            this._component.classList.add('.pagination--empty');
        } else {
            this._component.classList.remove('.pagination--empty');
        }
    }

    _drawButtons({ currentPage, totalCount, perPage }) {
        const { 
            btnClass = DEFAULT_STYLES.btnClass, 
            activeBtnClass = DEFAULT_STYLES.activeBtnClass 
        } = this._state.styles;

        const pageAmount = Math.ceil(totalCount / perPage);

        if (pageAmount === 1) return [];

        const buttons = [];

        if (pageAmount < 6) {
            for (let i = 0; i < pageAmount; i++) {
                const pageNumber = i + 1;
                buttons.push(new Button({
                    className:[
                        `pagination__btn`,
                        btnClass,
                        currentPage === pageNumber ? activeBtnClass : ''
                    ].join(' '),
                    attributes: {
                        'data-page': pageNumber
                    },
                    text: pageNumber
                }));


            }
        }

        if (pageAmount > 6) {
            buttons.push(new Button({
                className:[
                    `pagination__btn`,
                    btnClass,
                    currentPage === 1 ? activeBtnClass : ''
                ].join(' '),
                attributes: {
                    'data-page': 1
                },
                text: '1'
            }));

            for (let i = 1; i < pageAmount - 1; i++) {
                const pageNumber = i + 1;
                buttons.push(new Button({
                    className:[
                        `pagination__btn`,
                        btnClass,
                        currentPage === pageNumber ? activeBtnClass : ''
                    ].join(' '),
                    attributes: {
                        'data-page': pageNumber
                    },
                    text: pageNumber
                }));
            }

            buttons.push(new Button({
                className:[
                    `pagination__btn`,
                    btnClass,
                    currentPage === buttons.length - 1 ? activeBtnClass : ''
                ].join(' '),
                attributes: {
                    'data-page': pageAmount
                },
                text: `${pageAmount}`
            }));
        }

        return buttons;
    }

    _render(prevState, nextState) {

        const isEqualCategory = prevState.activeCategory === nextState.activeCategory;

        if (!isEqualCategory) {
            const { allProducts, perPage } = nextState;

            const nextTotalCount = allProducts.filter(p => p.category === nextState.activeCategory).length;

            const nextButtons = this._drawButtons({
                currentPage: 1,
                perPage,
                totalCount: nextTotalCount
            });

            this._changeVisibility(nextButtons.length);
    
            this.truncateContent()
            .append(nextButtons);

            return;
        }

        const isEqualPage = prevState.currentPage === nextState.currentPage; 

        if (!isEqualPage) {
            const paginationBtns = document.querySelectorAll('.pagination__btn');

            for (const paginationBtn of paginationBtns) {
                const { page } = paginationBtn.dataset;
    
                if (+page === nextState.currentPage) {
    
                    paginationBtn.classList.add('primary-btn');
    
                    continue;
                }
    
                paginationBtn.classList.remove('primary-btn');
            }
        }
    }

    _handleClick(e) {
        const button = e.target;

        if (button.tagName !== 'BUTTON') return;

        const { page } = button.dataset;

        this._setState({ currentPage: +page });
        console.log(currentPage);
    }
}

export default Pagination;