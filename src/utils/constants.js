const openEditPopupButton = document.querySelector ('.profile__edit-button');
const openAddPopupButton = document.querySelector ('.profile__add-button');

const editPopup = document.querySelector('.popup_function_edit');
const addPopup = document.querySelector('.popup_function_add');
const imagePopup = document.querySelector('.popup_function_image');

const formEditElement = document.querySelector ('.form_function_edit');
const formAddElement = document.querySelector ('.form_function_add');

const nameInput = formEditElement.querySelector ('input[name="name"]');
const jobInput = formEditElement.querySelector ('input[name="description"]');

const cardsContainer = '.elements';
const cardTemplate = '#elementTemplate';

const profileDescriptionSelector = '.profile__description';
const profileNameSelector = '.profile__name';

const config = {
    formSelector: '.form',
    inputSelector: '.form__element-text',
    submitButtonSelector: '.form__save-button',
    inputErrorClass: 'form__element-text_type-error',
    errorActiveClass: 'form__input-error_active',
    disableButtonClass: 'form__save-button_disabled',
};

export {openEditPopupButton,
    openAddPopupButton,
    editPopup,
    addPopup,
    imagePopup,
    formEditElement,
    formAddElement,
    nameInput,
    jobInput,
    cardsContainer,
    cardTemplate,
    config,
    profileDescriptionSelector,
    profileNameSelector
}