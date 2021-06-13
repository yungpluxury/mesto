import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitButtonCallback) {
        super(popupSelector);
        this._submitButtonCallback = submitButtonCallback;
        this._formSelector = this._popupSelector.querySelector('.form');
        this._inputList = this._formSelector.querySelectorAll('.form__element-text');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((inputElement) => {
            this._inputValues[inputElement.name] = inputElement.value;
        })
        console.log(this._inputValues);
        return this._inputValues
    }

    setEventListeners() {
        super.setEventListeners();
        this._formSelector.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitButtonCallback(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._formSelector.reset();
    }
}