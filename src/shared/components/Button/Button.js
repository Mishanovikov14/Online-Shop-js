import BaseComponent from '../../../core/BaseComponent';
import './Button.scss';

class Button extends BaseComponent {
    constructor({ 
        className = '',
        attributes = {
            type: 'button'
        },
        text,
        html,
        onClick
     }) {
        super({
            tagName: 'button',
            className: `button ${className}`,
            attributes,
            text,
            html
        });

        this.addListeners({ click: onClick });
    }
}

export default Button;
