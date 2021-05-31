import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards } from './initialCards.js';

const openEditPopupButton = document.querySelector ('.profile__edit-button');
const openAddPopupButton = document.querySelector ('.profile__add-button');

const editPopup = document.querySelector('.popup_function_edit');
const addPopup = document.querySelector('.popup_function_add');
const imagePopup = document.querySelector('.popup_function_image');

const closeEditPopupButton = editPopup.querySelector ('.popup__close-button_function_edit');
const closeAddPopupButton = addPopup.querySelector ('.popup__close-button_function_add');
const closeImagePopupButton = imagePopup.querySelector ('.popup__close-button_function_image');

const formEditElement = document.querySelector ('.form_function_edit');
const formAddElement = document.querySelector ('.form_function_add');

const nameInput = formEditElement.querySelector ('input[name="name"]');
const jobInput = formEditElement.querySelector ('input[name="description"]');

const titleInput = formAddElement.querySelector ('input[name="title"]');
const linkInput = formAddElement.querySelector ('input[name="link"]');

const popupImage = imagePopup.querySelector ('.popup__image');
const popupDescription = imagePopup.querySelector ('.popup__image-description');

const config = {
    formSelector: '.form',
    inputSelector: '.form__element-text',
    submitButtonSelector: '.form__save-button',
    inputErrorClass: 'form__element-text_type-error',
    errorActiveClass: 'form__input-error_active',
    disableButtonClass: 'form__save-button_disabled',
};

const profileEditFormValidator = new FormValidator(config, formEditElement);
profileEditFormValidator.enableValidation();

const cardAddFormValidator = new FormValidator(config, formAddElement);
cardAddFormValidator.enableValidation();


function saveEditButton (evt) {
    evt.preventDefault();
    userJob.textContent = jobInput.value;
    userName.textContent = nameInput.value;
    closeEditPopup ();
}

function saveAddButton (event) {
    event.preventDefault();
    const card = {
        name: titleInput.value,
        link: linkInput.value
    };
    addCard(card);
    closeAddPopup();
}

function openEditPopup () {
    openPopup (editPopup);
    jobInput.value = userJob.textContent;
    nameInput.value = userName.textContent;
    updateInputValue(jobInput, userJob.textContent);
    updateInputValue(nameInput, userName.textContent);
}

function openAddPopup () {
    openPopup (addPopup);
}

const updateInputValue = (inputElement, value) => {
    inputElement.value = value;
    inputElement.dispatchEvent(new Event('input'));
};

function openPopup (popup) {
    popup.classList.toggle('popup_is-opened');
    document.addEventListener('keydown', escapeCloseFunction);
    popup.addEventListener('mousedown', handleOverlayClick); 
}

function closeEditPopup () {
    closePopup (editPopup);
}

function closeAddPopup () {
    closePopup (addPopup);
}

function closeImagePopup () {
    closePopup (imagePopup);
}

function closePopup (popup) {
    popup.classList.toggle('popup_is-opened');
    document.removeEventListener('keydown', escapeCloseFunction);
    popup.removeEventListener('mousedown', handleOverlayClick);
}

function escapeCloseFunction (event) {
    if (event.key === "Escape") {
        const popup = document.querySelector('.popup_is-opened');
        closePopup(popup);
    }
}

function handleOverlayClick (event) {
    if (event.target === event.currentTarget) { 
        const popup = document.querySelector('.popup_is-opened');
        closePopup(popup);
    } 
}

openEditPopupButton.addEventListener('click', openEditPopup);
openAddPopupButton.addEventListener('click', openAddPopup);

closeEditPopupButton.addEventListener('click', closeEditPopup);
closeAddPopupButton.addEventListener('click', closeAddPopup);
closeImagePopupButton.addEventListener('click', closeImagePopup);

formEditElement.addEventListener('submit', saveEditButton); 
formAddElement.addEventListener('submit', saveAddButton);

const addCard = (item) => {
    const card = new Card('#elementTemplate', item.name, item.link);
    const newCard = card.generateCard();
    document.querySelector('.elements').prepend(newCard);
};

initialCards.forEach ((item) => {
    addCard(item);
});

export {openPopup, escapeCloseFunction, handleOverlayClick}
export {imagePopup, popupImage, popupDescription}