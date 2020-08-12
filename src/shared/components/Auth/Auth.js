import BaseComponent from '../../../core/BaseComponent';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputWithIcon from '../InputWithIcon/InputWithIcon';
import Form from '../Form/Form';
import './Auth.scss';

class Auth extends BaseComponent {
    constructor({
        className,
        children
    } = {}) {
        super({ 
            className: `auth ${className}`,
            children: [
                new Form({ className: 'auth__form' })
            ]
        });

        this.findNode('.auth__form')
            .append(this._createRagistrationFields());
            // .append(this. _createAuthentificationFields());
    }

    _createRagistrationFields() {
        return [
            '<h1 class="title auth__title">Registration</h1>',
            new Input({
                className: 'auth__input',
                attributes: {
                    name: 'first-name',
                    placeholder: 'First Name'
                }
            }),
            new Input({
                className: 'auth__input',
                attributes: {
                    name: 'last-name',
                    placeholder: 'Last Name'
                }
            }),
            new Input({
                className: 'auth__input',
                attributes: {
                    name: 'email',
                    placeholder: 'E-mail'
                }
            }),
            new Input({
                className: 'auth__input',
                attributes: {
                    name: 'age',
                    placeholder: 'Age'
                }
            }),
            new InputWithIcon({
                styles: {
                    wrapperClass: 'auth__input'
                },
                icon: '<i class="far fa-eye"></i>',
                attributes: {
                    type: 'password',
                    name: 'password',
                    placeholder: 'Password',
                }
            }),
            new InputWithIcon({
                styles: {
                    wrapperClass: 'auth__input'
                },
                icon: '<i class="far fa-eye"></i>',
                attributes: {
                    type: 'password',
                    name: 'Confirm password',
                    placeholder: 'Confirm password',
                }
            }),
            new Button({
                attributes: {
                    type: 'Submit'
                },
                className: 'auth__btn primary-btn primary-btn--default',
                text: 'Sing Up'
            })
        ];
    }

    _createAuthentificationFields() {
        return [
            '<h1 class="title auth__title">Authentification</h1>',
            new Input({
                className: 'auth__input',
                attributes: {
                    name: 'email',
                    placeholder: 'E-mail'
                }
            }),
            new InputWithIcon({
                styles: {
                    wrapperClass: 'auth__input'
                },
                icon: '<i class="far fa-eye"></i>',
                attributes: {
                    type: 'password',
                    name: 'password',
                    placeholder: 'Password',
                }
            }),
            new Button({
                attributes: {
                    type: 'Submit'
                },
                className: 'auth__btn primary-btn primary-btn--default',
                text: 'Sing In'
            })
        ];
    }
}

export default Auth;
