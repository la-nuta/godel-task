class Keyboard {
    constructor() {
        this.el = document.querySelector('div.keyboard-wrapper');
        this.keys = document.querySelectorAll('.key');
        this.keyCodes = [
            192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 'x', 'x', 'x',
            9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 0, 13, 'x', 'x',
            20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220, 'x',
            16, 'x', 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 'x',
            17, 'x', 18, 32, 'alt gr', 37, 39, 38, 40, 'x'];

        this.ciryllicKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', String.fromCharCode(9003), String.fromCharCode(127303), String.fromCharCode(215),
            String.fromCharCode(8677), 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', String.fromCharCode(9166), String.fromCharCode(10138), 'Abc',
            String.fromCharCode(8682), 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', '??????',
            String.fromCharCode(8679), '<', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', String.fromCharCode(8679), '123',
            'Ctrl', String.fromCharCode(127760), 'Alt', '', 'Alt Gr', String.fromCharCode(8592), String.fromCharCode(8594), String.fromCharCode(8593), String.fromCharCode(8595), '?????'];
        this.latinKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', String.fromCharCode(9003), String.fromCharCode(127303), String.fromCharCode(215),
            String.fromCharCode(8677), 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', String.fromCharCode(9166), String.fromCharCode(10138), 'Abc',
            String.fromCharCode(8682), 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\', '??????',
            String.fromCharCode(8679), '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', String.fromCharCode(8679), '123',
            'Ctrl', String.fromCharCode(127760), 'Alt', '', 'Alt Gr', String.fromCharCode(8592), String.fromCharCode(8594), String.fromCharCode(8593), String.fromCharCode(8595), '?????'];

        this.input = document.forms.keyboardForm.keyboardInput;

        this.el.addEventListener('click', this);
        this.el.addEventListener('keydown', this);
        this.el.focus();
    }

    handleEvent(e) {
        switch (e.type) {
            case 'click':
                return this.onClick(e);
            case 'keydown':
                return this.onKeydown(e);
        }
    }

    onClick(e) {
        if (e.currentTarget === this.el) {
            this.el.focus();
        } else {
            this.el.blur();
        }
        if (e.target.classList.contains('key')) {
            this.cleanCurrent();
            e.target.classList.add('current');
        }
        if (e.target.classList.contains('printable')) {
            this.input.value = `${this.input.value}${e.target.textContent}`;
        }
        if (e.target.classList.contains('key16')) {
            this.destroy();
        }
    }

    onKeydown(e) {
        this.cleanCurrent();
        let index = this.keyCodes.indexOf(e.keyCode);
        this.keys[index].classList.add('current');
    }

    cleanCurrent() {
        let keysNum = this.keys.length;
        for (let i = 0; i < keysNum; i++) {
            this.keys[i].classList.contains('current') && this.keys[i].classList.remove('current');
        }
    }

    destroy() {
        this.el.remove();
        document.forms.keyboardForm.remove();
        this.el.removeEventListener('onClick', this);
        this.el.removeEventListener('keydown', this);
    }
}
