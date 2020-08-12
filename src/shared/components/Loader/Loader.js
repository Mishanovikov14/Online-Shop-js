import BaseComponent from '../../../core/BaseComponent';
import './Loader.scss';

class Loader extends BaseComponent {
    constructor({ className = ''} = {}) {
        super({
            className: `loader spinner ${className}`,
            html: `
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            `
        });
    }
}

export default Loader;