'use strict';

class Calculator {

    constructor(options) {
        this._calculator = options.el;
        this._display = this._calculator.querySelector('.calc__display');
        this._numsContainer = this._calculator.querySelector('.calc__nums');
        this._calculator.addEventListener('click', this._processEvent);
        this._currentValue = '0';


        this._drawCalculator();
        this._displayClear();
    }

    _processEvent() {
        alert('test');
    }

    _drawCalculator() {
    }

    _displayAdd() {

    }
    _displayClear() {
        this._display.innerHTML = this._currentValue;
    }
    _displayRemove() {}

    _createDisplay() {
    }
}