class GlobalState {
    constructor(initialState) {
        this.state = initialState;
        this._prevState = { ...initialState };
        this._subscribers = [];
    }

    _notify() {
        for (const subscriber of this._subscribers) {
            subscriber._render(this._prevState, this.state);
        }
    }

    subscribe(subscriber) {
        this._subscribers.push(subscriber);
    }

    setState(updatedState) {
        this._prevState = { ...this.state };
        this.state = {
            ...this._prevState,
            ...updatedState
        };
        
        this._notify();
    }


}

export default GlobalState;