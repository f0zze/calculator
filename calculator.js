'use strict';

class Calculator {

    constructor(options) {
        this._historyValue = '';
        this._currentValue = null;
        this._result = 0;
        this._operator = null;
        this._nextValue = null;
        this._actionChars = ['-', '+', '/', '*'];

        this._calculator = options.el;

        this._displayElement = this._calculator.querySelector('.display__main');
        this._historyElement = this._calculator.querySelector('.display__history');
        this._numsContainer = this._calculator.querySelector('.calc__nums');
        this._actionContainer = this._calculator.querySelector('.calc__actions');
        this._calculator.addEventListener('click', this._processEvent.bind(this));
        //disable text selection
        this._calculator.addEventListener('mousedown', function (e) {
            e.preventDefault()
        });

        this._drawCalculator();
    }


    _calculate(num) {
        if (this._historyValue) {
            this._historyValue += num;
        } else {
            this._historyValue = num;
        }

        if (!this._currentValue) {
            this._currentValue = num;
            this._result = num;
            this._displayElement.innerHTML = this._currentValue;
            return;
        }

        if (this._nextValue) {
            var next = this._nextValue + num;
            this._displayElement.innerHTML = next;
            this._nextValue = next;
            return;
        }

        if (this._currentValue && !this._operator) {
            this._currentValue += num;
            this._displayElement.innerHTML = String(this._currentValue);
        } else if (this._currentValue && this._operator) {
            this._nextValue = num;
            this._displayElement.innerHTML = num;
        }
    }


    _processEvent(event) {
        if (event.target.dataset.num) {
            this._calculate(event.target.dataset.num);
        }
        if (event.target.dataset.action) {
            this._operator = event.target.dataset.action;
            this._actionBtnIsClicked(this._operator);
        }
    }

    _actionBtnIsClicked(action) {
        this._historyElement.innerHTML = this._historyElement.innerHTML + this._historyValue + action;
        switch (action) {
            case '+':
                this._result = Number(this._currentValue) + Number(this._nextValue);
                this._saveValue(this._result);
                break;
            case '-':
                this._result = Number(this._currentValue) - Number(this._nextValue);
                this._saveValue(this._result);
                break;
            case '*':
                this._result = Number(this._currentValue) * Number(this._nextValue);
                this._saveValue(this._result);
                break;
            case '/':
                this._result = Number(this._currentValue) / Number(this._nextValue);
                this._saveValue(this._result);
                break;
        }
    }

    _saveValue(result) {
        this._displayElement.innerHTML = result;
        this._currentValue = result;
        this._nextValue = null;
        this._historyValue = null;
    }

    _drawCalculator() {
        this._displayClear();
        this._drawNumsBtns();
        this._drawActionBtns();
    }

    _drawActionBtns() {
        this._actionChars.forEach(char=> {
            var charBtn = document.createElement('span');
            charBtn.classList.add('btn', 'calc__action');
            charBtn.setAttribute('data-action', char);
            charBtn.innerHTML = char;
            this._actionContainer.appendChild(charBtn);
        });

    }

    _drawNumsBtns() {
        for (var i = 9; i >= 0; i--) {
            var num = document.createElement('span');
            num.setAttribute('data-num', String(i));
            num.classList.add('calc__num', 'btn');
            num.innerHTML = i;

            this._numsContainer.appendChild(num);
        }
    }

    _displayAdd(value) {
        if (this._currentValue === '0') {
            this._currentValue = '';
        }
        this._displayElement.innerHTML = this._currentValue += String(value);
    }

    _displayClear() {
        this._displayElement.innerHTML = this._currentValue;
    }

    _displayRemove() {
    }

    _createDisplay() {
    }
}