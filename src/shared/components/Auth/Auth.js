import axios from 'axios';

import BaseComponent from '../../../core/BaseComponent';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputWithIcon from '../InputWithIcon/InputWithIcon';
import Form from '../Form/Form';
import { sendRequest } from '../../Utils/sendRequest';
import './Auth.scss';

export const SIGN_IN = 'sign in';
export const SIGN_UP = 'sign up';


const INITIAL_PROPS = {
    className: '',
    children: []
};

class Auth extends BaseComponent {
    constructor({
        authMode,
        setState,
        subscribe,
        className = '',
        children
    } = INITIAL_PROPS) {
        super({
            state: {
                authMode
            },
            setState,
            subscribe,
            className: `auth ${className}`
        });

        this
            .append(new Form({
                className: 'auth__form',
                children: authMode === SIGN_IN 
                    ? this._createAuthentificationFields()
                    : this._createRagistrationFields(),
                onSubmit: this._handleSubmit.bind(this)
            }))
            .addListeners({ click: this._handleModeSwitch.bind(this) });
    }

    _handleSubmit(formValues) {
        const baseURL = 'https://jsonplaceholder.typicode.com';

        const { email } = formValues;

        const regExp = /^[a-zA-Z._\-0-9]+@[a-zA-z]+\.[a-zA-Z]{2,3}$/g;

        regExp.serch 

        if (regExp.test(email)) {
            console.log('success');
        } else {
            console.log('Fail');
        }

        // axios.post(`${baseURL}/users`, formValues)
        //     .then(response => {
        //         const { email, password } = response.data;

        //         const title = document.querySelector('.auth__title');
        //         title.textContent = `${email} | ${password}`;
        //     })
        //     .catch(console.log(e));

            // fetch(`${baseURL}/users`, {
            //     method: 'POST',
            //     headers:{
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formValues)
            // })
            //     .then(response => response.json())
            //     .then(({ email, password }) => {
            //         const title = document.querySelector('.auth__title');
            //         title.textContent = `${email} | ${password}`;
            //     })
            //     .catch(console.log(e));

            // sendRequest({
            //     url: `${baseURL}/users`,
            //     method: 'POST',
            //     headers:{
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formValues)
            // })
            //     .then(({ email, password }) => {
            //         const title = document.querySelector('.auth__title');
            //         title.textContent = `${email} | ${password}`;
            //     })
            //     .catch(console.log(e));
    }

    _handleModeSwitch(e) {
        if (!e.target.classList.contains('auth__switch-btn')) return;

        const nextAuthMode = this._state.authMode === SIGN_IN ? SIGN_UP : SIGN_IN;

        this._setState({ authMode: nextAuthMode });
        this._state.authMode = nextAuthMode;
    }

    _render(prevState, nextState) {
        if (prevState.authMode === nextState.authMode) return;

        this.findNode('.auth__form')
            .truncateContent()
            .append(nextState.authMode === SIGN_IN 
                ? this._createAuthentificationFields()
                : this._createRagistrationFields()
            ); 
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
                    type: 'number',
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
                className: 'primary-btn primary-btn--default',
                text: 'Sing Up'
            }),
            new Button({
                className: 'auth__switch-btn',
                text: 'Switch to Sing In'
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
                className: 'primary-btn primary-btn--default',
                text: 'Sing In'
            }),
            new Button({
                className: 'auth__switch-btn',
                text: 'Switch to Sing Up'
            })
        ];
    }
}

export default Auth;
