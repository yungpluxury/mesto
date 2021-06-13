import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(values) {
        super.open();
        this._popupImage = this._popupSelector.querySelector('.popup__image');
        this._popupDescription = this._popupSelector.querySelector('.popup__image-description');
        this._popupImage.src = values.link;
        this._popupImage.alt = values.name;
        this._popupDescription.textContent = values.name;
    }
}