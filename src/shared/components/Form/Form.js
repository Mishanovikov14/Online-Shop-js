import BaseComponent from '../../../core/BaseComponent';
import './Form.scss';

class Form extends BaseComponent {
    constructor({
        className,
        autocomplete = 'off',
        children,
        onSubmit
    }) {
        super({
            tagName: 'form',
            className: `form ${className}`,
            attributes: {
                autocomplete
            },
            children
        });

        this.addListeners({ submit: onSubmit });
    }
}

export default Form;