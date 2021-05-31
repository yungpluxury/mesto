import {openPopup} from './index.js';
import {imagePopup, popupImage, popupDescription} from './index.js';

export default class Card {
    constructor(cardSelector, cardName, cardLink) {
        this._cardSelector = document.querySelector(cardSelector);
        this._name = cardName;
        this._link = cardLink;
    }

    _getTemplate() {
        this._cardElement = this._cardSelector
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    _cardLike() {
        this._cardElement.querySelector('.element__like').classList.toggle('element__like_active')
    }
    
    _deleteCard() {
        this._cardElement.closest('.element').remove();
    }

    _openImagePopup() {
        popupImage.src = this._link;
        popupDescription.textContent = this._name;
        popupImage.alt = this._name;
        openPopup(imagePopup);
    }

    _setEventListeners() {
        this._cardElement.querySelector('.element__like').addEventListener('click', () => this._cardLike());
        this._cardElement.querySelector('.element__trash-icon').addEventListener('click', () => this._deleteCard());
        this._cardElement.querySelector('.element__image').addEventListener('click', () => this._openImagePopup());
    }

    generateCard() {
        this._getTemplate();
        const imageSelector = this._cardElement.querySelector('.element__image');
        imageSelector.src = this._link;
        imageSelector.alt = this._name;
        this._cardElement.querySelector('.element__name').textContent = this._name;
        this._setEventListeners();
        return this._cardElement
    }  
}