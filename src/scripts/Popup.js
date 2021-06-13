export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }

    open() {
        this._popupSelector.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popupSelector.addEventListener('mousedown', this._handleOverlayClose);
    }

    close() {
        this._popupSelector.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupSelector.removeEventListener('mousedown', this._handleOverlayClose);
    }

    _handleEscClose(event) {
        if (event.key === "Escape") {
            this.close();
        }
    }

    _handleOverlayClose(event) {
        if (event.target === event.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupSelector.querySelector('.popup__close-button').addEventListener('click', () => this.close());
    }
}