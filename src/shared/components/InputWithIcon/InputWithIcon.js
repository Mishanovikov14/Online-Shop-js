import BaseComponent from '../../../core/BaseComponent';
import Input from '../Input/Input';
import './InputWithIcon.scss';

class InputWithIcon extends BaseComponent {
    constructor({ 
        styles = {},
        icon,
        attributes = {
            type: 'text'
        },
        onClick
     }) {
        const {
            wrapperClass = '',
            inputClass = '',
            btnClass = ''
        } = styles;

        super({
            className: `input-with-icon ${wrapperClass}`,
            html: `
                <button class="input-with-icon__btn  ${btnClass}" type="button">
                    ${icon}
                </button>            
            `
        });

        this.prepend(new Input({ 
            className: `input-with-icon__input ${inputClass}`,
            attributes
        })); 

        this.findNode('.input-with-icon__btn')
            .addListeners({ click: onClick });
    }
}

export default InputWithIcon;