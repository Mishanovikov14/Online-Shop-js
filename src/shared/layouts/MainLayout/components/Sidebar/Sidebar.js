import BaseComponent from '../../../../../core/BaseComponent';
import './Sidebar.scss';

class Sidebar extends BaseComponent {
    constructor() {
        super({
            tagName: 'aside',
            text: 'sidebar',
            className: 'main-layout__sidebar'
        });
    }
}

export default Sidebar;