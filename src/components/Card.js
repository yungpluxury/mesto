export default class Card {
    constructor({data, cardClickAction, likeClickAction, confirmDeleteAction}, cardSelector, userId) {
        this._cardSelector = document.querySelector(cardSelector);

        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;

        this._id = data._id;
        this._userId = userId;
        this._ownerId = data.owner._id;

        this._cardClickAction = cardClickAction;
        this._likeClickAction = likeClickAction;
        this._confirmDeleteAction = confirmDeleteAction;
    }

    _getTemplate() {
        this._cardElement = this._cardSelector
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    updateLikesCount(value) {
      this._likes = value;
      this.setLikeCount(value.length);
    }

    setLikeCount(likes) {
      this._cardElement.querySelector('.element__like-count').textContent = likes;
      this._toggleLikeButton(this._userId);
    }

    likedByUser() {
      return this._likes.some((like) => {
        return like._id === this._userId;
      })
    }

    _toggleLikeButton() {
      if (this.likedByUser(this._userId)) {
        this._likeButton.classList.add('element__like_active');
      } else {
        this._likeButton.classList.remove('element__like_active');
      };
    }

    deleteCard() {
        this._cardElement.closest('.element').remove();
    }

    _setEventListeners() {
        this._likeElement = this._cardElement.querySelector('.element__like');
        this._likeElement.addEventListener('click', () => this._likeClickAction());
        this._cardElement.querySelector('.element__trash-icon').addEventListener('click', () => this._confirmDeleteAction());
        this._cardElement.querySelector('.element__image').addEventListener('click', () => this._cardClickAction({
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
        this._likeButton = this._cardElement.querySelector('.element__like');
        this._cardElement.querySelector('.element__like-count').textContent = this._likes.length;
        if(this._likes.find((obj) => this._userId === obj._id)) {
            this._cardElement.querySelector('.element__like').classList.add('element__like_active');
        };
        if(!(this._ownerId === this._userId)) {
            this._cardElement.querySelector('.element__trash-icon').style.display = 'none';
        };
        this._setEventListeners();
        return this._cardElement
    }  
}