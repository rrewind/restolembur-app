import DrawerInitiator from './drawer-initiator';

class App {
    constructor({ button, drawer}) {
        this._button = button;
        this._drawer = drawer;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
          button: this._button,
          drawer: this._drawer,
        });
    }
}

export default App;