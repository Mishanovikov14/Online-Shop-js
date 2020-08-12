import BaseComponent from './BaseComponent';
import MainLayout from '../shared/layouts/MainLayout/MainLayout';

class App extends BaseComponent {
    constructor(props) {
        super({
            className: 'app',
            children: [
                new MainLayout(props)
            ]
        });
    }
}

export default App;
