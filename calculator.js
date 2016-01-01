'use strict';

class Calculator {

    constructor(options) {
        this._currentValue = '0';
        this._calculator = options.el;
        this._display = this._calculator.querySelector('.calc__display');
        this._numsContainer = this._calculator.querySelector('.calc__nums');
        this._calculator.addEventListener('click', this._processEvent.bind(this));
        //disable text selection
        this._calculator.addEventListener('mousedown', function(e){e.preventDefault()});


        this._drawCalculator();
        this._displayClear();
    }

    _processEvent(event) {
        if (event.target.dataset.num) {
            this._displayAdd(event.target.dataset.num);
        }
    }

    _drawCalculator() {
        this._drawNums();
    }

    _drawNums() {
        for (var i = 9; i >= 0; i--) {
            var num = document.createElement('span');
            num.setAttribute('data-num', String(i));
            num.classList.add('calc__num','btn');
            num.innerHTML = i;
            this._numsContainer.appendChild(num);
        }
    }

    _displayAdd(value) {
        this._display.innerHTML = this._currentValue += value;
    }

    _displayClear() {
        this._display.innerHTML = this._currentValue;
    }

    _displayRemove() {
    }

    _createDisplay() {
    }
}