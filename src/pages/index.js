import Card from '../components/Card.js';
import '../pages/index.css';
import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../components/initialCards.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {openEditPopupButton,
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
        profileNameSelector,
        profileDescriptionSelector
} from '../utils/constants.js';

const profileEditFormValidator = new FormValidator(config, formEditElement);
profileEditFormValidator.enableValidation();


const cardAddFormValidator = new FormValidator(config, formAddElement);
cardAddFormValidator.enableValidation();


const userInfo = new UserInfo({name: profileNameSelector, description: profileDescriptionSelector});


const popupWithImage = new PopupWithImage(imagePopup);
popupWithImage.setEventListeners();


const createCard = (data) => {
    const card = new Card( {
        data: data,
        handleCardClick: () => {
            popupWithImage.open(data);
            }
        },
        cardTemplate);
    return card
};
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = createCard(item);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
        },
    },
    cardsContainer
);
cardList.renderItems();


const popupWithAddForm = new PopupWithForm(addPopup, (inputValues) => {
    const card = createCard(inputValues);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    cardAddFormValidator.disableSubmitButton();
});
popupWithAddForm.setEventListeners();
openAddPopupButton.addEventListener('click', () => {
    popupWithAddForm.open();
    cardAddFormValidator.hideErrors();
});


const popupWithEditForm = new PopupWithForm(editPopup, () => {
    userInfo.setUserInfo(nameInput, jobInput);
  });
popupWithEditForm.setEventListeners();
openEditPopupButton.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    profileEditFormValidator.enableSubmitButton();
    profileEditFormValidator.hideErrors();
    nameInput.value = userData.name;
    jobInput.value = userData.description;
    popupWithEditForm.open();
});