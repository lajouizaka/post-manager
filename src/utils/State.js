export default class State {
    constructor(_s) {
        this.state = _s;
        this.observers = [];
        this.notify();
    }

    subscribe(o) {
        this.observers.push(o);
        return () => {
            this.observers = this.observers.filter((_o) => _o !== o);
        };
    }

    notify() {
        this.observers.forEach((o) => o(this.state));
    }

    setState(newState) {
        if (typeof newState === "function") {
            this.state = newState(this.state);
        } else {
            this.state = newState;
        }
        this.notify();
    }
}
