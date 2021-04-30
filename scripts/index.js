const openEditPopupButton = document.querySelector ('.profile__edit-button');
const openAddPopupButton = document.querySelector ('.profile__add-button');
const editPopup = document.querySelector('.popup_edit');
const addPopup = document.querySelector('.popup_add');
const closeEditPopupButton = editPopup.querySelector ('.popup__close-button_edit');
const closeAddPopupButton = addPopup.querySelector ('.popup__close-button_add');
const formEditElement = document.querySelector ('.form_edit');
const formAddElement = document.querySelector ('.form_add');
const nameInput = formEditElement.querySelector ('input[name="name"]');
const jobInput = formEditElement.querySelector ('input[name="description"]');
const titleInput = formAddElement.querySelector ('input[name="title"]');
const linkInput = formAddElement.querySelector ('input[name="link"]');
const cardTemplate = document.querySelector ('#elementTemplate');
const cardsContainer = document.querySelector ('.elements');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

for (let i = 0; i < initialCards.length; i += 1) {
    const currentCard = initialCards[i];
    const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);

    newCard.querySelector('.element__image').src = initialCards[i].link;
    newCard.querySelector('.element__name').textContent = initialCards[i].name;

    cardsContainer.prepend(newCard);
}

function saveAddButton () {
    const titleValue = titleInput.value;
    const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);

    newCard.querySelector('.element__name').textContent = titleValue;

    cardsContainer.prepend(newCard);
}

formAddElement.addEventListener('submit', saveAddButton);

function openEditPopup () {
    openPopup (editPopup);
    jobInput.value = userJob.textContent;
    nameInput.value = userName.textContent;
}

function openAddPopup () {
    openPopup (addPopup);
}

function openPopup (popup) {
    popup.classList.toggle('popup_is-opened');
}

function closeEditPopup () {
    closePopup (editPopup);
}

function closeAddPopup () {
    closePopup (addPopup);
}

function closePopup (popup) {
    popup.classList.toggle('popup_is-opened');
}

function handleOverlayClickEdit(event) {
    if (event.target === event.currentTarget) {
        closeEditPopup(event);
    }
}

function handleOverlayClickAdd(event) {
    if (event.target === event.currentTarget) {
        closeAddPopup(event);
    }
}

openEditPopupButton.addEventListener('click', openEditPopup);
openAddPopupButton.addEventListener('click', openAddPopup);
closeEditPopupButton.addEventListener('click', closeEditPopup);
closeAddPopupButton.addEventListener('click', closeAddPopup);
editPopup.addEventListener('click', handleOverlayClickEdit);
addPopup.addEventListener('click', handleOverlayClickAdd);

function saveEditButton (evt) {
    evt.preventDefault();
    userJob.textContent = jobInput.value;
    userName.textContent = nameInput.value;
    closeEditPopup ();
}

formEditElement.addEventListener('submit', saveEditButton); 