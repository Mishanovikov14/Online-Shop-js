import BaseComponent from '../../../core/BaseComponent';
import './ModalWindow.scss';

class ModalWindow extends BaseComponent {
    constructor({
        className = '',
        children,
        onClose
    }) {
        super({
            className: `modal-window ${className}`,
            children
        });
    }
}

export default ModalWindow;