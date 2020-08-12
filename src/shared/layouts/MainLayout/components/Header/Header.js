import BaseComponent from '../../../../../core/BaseComponent';
import Backdrop from '../../../../components/Backdrop/Backdrop';
import ModalWindow from '../../../../components/ModalWindow/ModalWindow';
import Auth from '../../../../components/Auth/Auth';
import Button from '../../../../components/Button/Button';
import render from '../../../../../core/render';
import './Header.scss';

class Header extends BaseComponent {
    constructor({ title }) {
        super({
            tagName: 'header',
            className: 'main-layout__header',
            html: `
                <div class="content-wrapper main-layout__header-wrapper">
                    <h1 class="title main-layout__header-title">${title}</h1>
                </div>
            `
        });

        this.findNode('.main-layout__header-title').after(new Button({
            className: 'primary-btn--singUp primary-btn--default',
            html: `
                Sing in
                <i class="fas fa-sign-in-alt main-layout__header-icon"></i>
            `,
            onClick: this.handleModalOpen.bind(this)
        }));
    }

    handleModalOpen(e) {
        const modal = new Backdrop({
            children: [
                new ModalWindow({
                    children: [
                        new Auth()
                    ]
                })
            ],
            onClose: e => {
                if (!e.target.classList.contains('backdrop')) return;

                modal.remove();
            }
        });

        render(modal, document.getElementById('modal-root'));
    }
}

export default Header;