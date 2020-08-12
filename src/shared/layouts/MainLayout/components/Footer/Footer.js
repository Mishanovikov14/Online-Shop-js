import BaseComponent from '../../../../../core/BaseComponent';
import './Footer.scss';

class Footer extends BaseComponent {
    constructor({ copyright }) {
        super({
            tagName: 'footer',
            className: 'main-layout__footer',
            html: `
                <strong class="main-layout__copyright">${copyright}, ${new Date().getFullYear()}</strong>
            `
        });
    }
}

export default Footer;