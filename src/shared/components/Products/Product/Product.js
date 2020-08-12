import BaseComponent from '../../../../core/BaseComponent';
import Button from '../../Button/Button';
import Loader from '../../Loader/Loader';
import Stars from '../../Stars/Stars';
import './Product.scss';

class Product extends BaseComponent {
    constructor({
        id,
        category,
        model,
        manufacturer,
        country,
        imageSrc,
        price,
        rating,
        description,
        warranty
    }) {
        super({
            className: 'product',
            html: `

                <div class="product__top">
                    <h1 class="product__title">${category}</h1>
                </div>

                <div class="product__middle">
                    <div class="product__img-wrapper">
                        <img class="product__img product__img--hidden" src="${imageSrc}" alt="${model}">
                    </div>

                    <div class="product__details">
                        <h2 class="product__subtitle"><strong class="product__subtitle--bold">Model: </strong>${model}</h2>
                        <h3 class="product__subtitle"><strong class="product__subtitle--bold">Manufacturer: </strong>${manufacturer}</h3>
                        <h4 class="product__subtitle"><strong class="product__subtitle--bold">Country:</strong> ${country}</h4>
                        <h5 class="product__subtitle"><strong class="product__subtitle--bold">Warranty: </strong>${warranty}</h5>
                        
                    </div>
                </div>
                
                <p class="product__description">${description.slice(0, 110)}...</p>

                <div class="product__bottom">
                    <div class="product__price-wrapper">
                        <span class="product__lable">Price:</span>
                        <strong class="product__price">${price}</strong>
                        <strong class="product__currency">USD</strong>
                    </div>
                </div>
                
                
            `
        });

        this.findNode('.product__top')
            .append(new Stars({
                className:'product__rating',
                filedAmount: rating,
                totalAmount: 5
            }))
            .findNode('.product__price-wrapper')
            .after(new Button({
                html: '<i class="fas fa-cart-plus product__cart-icon"></i>',
                className:'primary-btn product__btn'
            }))
            .findNode('.product__img')
            .after(new Loader())
            .addListeners({ load: this._handleLoad.bind(this)});
    }

    _handleLoad(e) {
        const image = e.target;
        const loader = image.nextElementSibling;

        image.classList.remove('product__img--hidden');

        loader.remove();
    }
}

export default Product;