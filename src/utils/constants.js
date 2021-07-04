const openEditPopupButton = document.querySelector ('.profile__edit-button');
const openAddPopupButton = document.querySelector ('.profile__add-button');
const openAvatarEditPopupButton = document.querySelector('.profile__avatar-edit-button');

const editPopup = document.querySelector('.popup_function_edit');
const addPopup = document.querySelector('.popup_function_add');
const imagePopup = document.querySelector('.popup_function_image');
const confirmDeletePopup = document.querySelector('.popup_function_confirm-delete');
const avatarEditPopup = document.querySelector('.popup_function_avatar-edit');

const formEditElement = document.querySelector ('.form_function_edit');
const formAddElement = document.querySelector ('.form_function_add');
const formAvatarEditElement = document.querySelector('.form_function_avatar-edit');

const nameInput = formEditElement.querySelector ('input[name="name"]');
const jobInput = formEditElement.querySelector ('input[name="description"]');

const cardsContainer = '.elements';
const cardTemplate = '#elementTemplate';

const profileDescriptionSelector = '.profile__description';
const profileNameSelector = '.profile__name';
const profileAvatarSelector = '.profile__avatar';

const config = {
    formSelector: '.form',
    inputSelector: '.form__element-text',
    submitButtonSelector: '.form__save-button',
    inputErrorClass: 'form__element-text_type-error',
    errorActiveClass: 'form__input-error_active',
    disableButtonClass: 'form__save-button_disabled',
};

const options = {
    url: 'https://mesto.nomoreparties.co/v1/cohort-25',
    headers: {
        authorization: '1e3ace66-7bc0-4085-a74d-3975b1264152',
        'Content-Type': 'application/json'
    }
};

export {openEditPopupButton,
    openAddPopupButton,
    editPopup,
    addPopup,
    imagePopup,
    formEditElement,
    formAddElement,
    formAvatarEditElement,
    nameInput,
    jobInput,
    cardsContainer,
    cardTemplate,
    config,
    profileDescriptionSelector,
    profileNameSelector,
    options,
    confirmDeletePopup,
    profileAvatarSelector,
    avatarEditPopup,
    openAvatarEditPopupButton
}