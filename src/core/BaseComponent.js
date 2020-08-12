class BaseComponent {
    constructor({
        state,
        setState,
        subscribe, 
        tagName = 'div',
        className, 
        attributes,
        text,
        html,
        children = []
        }) {
        this._state = state;
        this._setState = setState;
        this._component = document.createElement(tagName);
        this._foundNode = null;

        if (subscribe) subscribe(this);
        if (className) this._component.className = className;
        if (text) this._component.textContent = text;
        if (html) this._component.innerHTML = html;
        if (children.length) this._insertChildren('append', children);

        for (const attrName in attributes) {
            const attrValue = attributes[attrName];

            if (attrValue === undefined) continue;

            this._component.setAttribute(attrName, attrValue);
        }
    }

    _insertChildren(methodName, children) {
        const parentNode = this._foundNode || this._component;
        
        if (!Array.isArray(children)) {
            parentNode[methodName](children.toNode());
            return;
        }

        const WHERE = {
            append: 'beforeend',
            prepend: 'afterbegin',
            before: 'beforebegin',
            after: 'afterend'
        }

        for (const child of children) {
            //if child is typeof string, then it should an HTML string
            if (typeof child === 'string') {
                parentNode.insertAdjacentHTML(WHERE[methodName], child)
                continue;
            }

            parentNode[methodName](child.toNode());
        }
    }

    findNode(selector) {
        this._foundNode = this._component.querySelector(selector);

        return this;
    }

    addListeners(listeners) {
        for (const eventType in listeners) {
            const handler = listeners[eventType];

            if (typeof handler !== 'function') continue;

            (this._foundNode || this._component).addEventListener(eventType, handler);
        }

        return this;
    }

    append(components) {
        this._insertChildren('append', components);
        return this;
    }

    prepend(components) {
        this._insertChildren('prepend', components);
        return this;
    }

    after(components) {
        this._insertChildren('after', components);
        return this;
    }

    before(components) {
        this._insertChildren('before', components);
        return this;
    }

    // WARNING: this could lead to an error, cause _insertChildren
    // is not removing existing html
    replaceWith(components) {
        throw new Error('_insertChildren currently does not support replaceing HTML!');

        // this._insertChildren('replaceWith', components);
        // return this;
    }

    resetFoundNode() {
        this._foundNode = null;
        return this;
    }

    remove() {
        (this._foundNode || this._component).remove();
        return this;
    }

    html(htmlContent) {
        (this._foundNode || this._component).innerHTML = htmlContent;
        return this;
    }

    truncateContent() {
        (this._foundNode || this._component).innerHTML = '';
        return this;
    }

    toNode() {
        return this._component;
    }

    toHtml() {
        return this._component.outerHTML;
    }

}

export default BaseComponent;