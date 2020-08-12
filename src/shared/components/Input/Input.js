import BaseComponent from '../../../core/BaseComponent';
import './Input.scss';

class Input extends BaseComponent {
    constructor({ 
        className,
        attributes = {
            type: 'text'
        }
     }) {
        super({
            tagName: 'input',
            className: `input ${className}`,
            attributes,
        });
    }
}

export default Input;