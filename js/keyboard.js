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

        this.ciryllicKeyboard = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з',
            'х', 'ъ', 'next', 'next', 'next', 'next', 'ф', 'ы', 'в', 'а',
            'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'next', 'next', 'next',
            'next', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю',
            '.'
        ];
        this.latinKeyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
            '[', ']', 'next', 'next', 'next', 'next', 'a', 's', 'd', 'f',
            'g', 'h', 'j', 'k', 'l', ';', '\'', 'next', 'next', 'next',
            'next', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.',
            '/'
        ];

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

            if (e.target.classList.contains('key30')) {
                let enterKey = document.querySelector('.key30-1');
                enterKey.classList.add('current');
            }
        }
        if (e.target.closest('div').classList.contains('key')) {
            e.target.closest('div').classList.add('current');
        }

        if (e.target.classList.contains('symbol')) {
            this.input.value = `${this.input.value}${e.target.textContent}`;
        }
        if (e.target.classList.contains('key16')) {
            this.destroy();
        }

        if (e.target.classList.contains('key33')) {
            let keys = Array.from(document.querySelectorAll('.key')).slice(17, 59);
            keys.splice(12, 1);

            if (keys[0].textContent === this.latinKeyboard[0]) {
                for (let i = 0; i < keys.length; i++) {
                    if (this.ciryllicKeyboard[i] !== 'next') {
                        keys[i].textContent = this.ciryllicKeyboard[i];
                    }
                }
            } else if (keys[0].textContent === this.ciryllicKeyboard[0]) {
                for (let i = 0; i < keys.length; i++) {
                    if (this.latinKeyboard[i] !== 'next') {
                        keys[i].textContent = this.latinKeyboard[i];
                    }
                }
            }
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
        document.querySelector('.description').remove();
        document.forms.keyboardForm.remove();
        this.el.removeEventListener('onClick', this);
        this.el.removeEventListener('keydown', this);
    }
}
