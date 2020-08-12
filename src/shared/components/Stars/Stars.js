import BaseComponent from '../../../core/BaseComponent';
import './Stars.scss';

class Stars extends BaseComponent {
    constructor({
        className = '',
        totalAmount = 5,
        filedAmount = 1
    }) {
        super({ 
            className: `stars ${className}` 
        });

        const stars = [];

        for (let i=0; i < totalAmount; i++) {
            if (i < filedAmount) {
                stars.push('<i class="fas fa-star stars__star"></i>');
                continue;
            }

            stars.push('<i class="far fa-star stars__star"></i>');
        }

        this.html(stars.join(' '));
    }
}

export default Stars;
