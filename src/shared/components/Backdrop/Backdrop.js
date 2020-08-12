import BaseComponent from '../../../core/BaseComponent';
import './Backdrop.scss';

class Backdrop extends BaseComponent {
    constructor({ 
        className = '',
        children = [],
        onClose
    }) {
        super({
            className: `backdrop ${className || 'backdrop--default'}`,
            children
        });

        this.addListeners({ click: onClose });
    }
}

export default Backdrop;