export default class Card {
    constructor({data, handleCardClick}, cardSelector) {
        this._cardSelector = document.querySelector(cardSelector);
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        this._cardElement = this._cardSelector
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    _cardLike() {
        this._likeElement.classList.toggle('element__like_active');
    }
    
    _deleteCard() {
        this._cardElement.closest('.element').remove();
    }

    _setEventListeners() {
        this._likeElement = this._cardElement.querySelector('.element__like');
        this._likeElement.addEventListener('click', () => this._cardLike());
        this._cardElement.querySelector('.element__trash-icon').addEventListener('click', () => this._deleteCard());
        this._cardElement.querySelector('.element__image').addEventListener('click', () => this._handleCardClick({
            name: this._name,
            link: this._link
        }));
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