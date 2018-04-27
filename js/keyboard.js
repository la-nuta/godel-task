class Keyboard {
    constructor() {
        this.el = document.querySelector('div.keyboard-wrapper');
    }

    init() {

    }

    handleEvent(e) {
        switch (e.type) {
            case 'keydown':
                return this.onKeydown(e);
        }
    }

    onKeydown(e) {

    }

    destroy() {
        this.el.remove();
        this.el.removeEventListener('keydown', this);
    }
}