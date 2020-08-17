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

        this.addListeners({ submit: e => this.handleSubmit(e, onSubmit) });
    }

    handleSubmit(e, onSubmit) {
        e.preventDefault();

        const form = this.toNode();
        const formData = {};

        for (const element of form.elements) {
            if (element.tagName === 'BUTTON') continue;

            const { name, value } = element;

            formData[name] = value;
        }

        onSubmit(formData);
    }
}

export default Form;