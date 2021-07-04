import '../pages/index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';
import PopupWithConfirm from '../components/popupWithConfirm.js';

import {openEditPopupButton,
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
        profileNameSelector,
        profileDescriptionSelector,
        options,
        confirmDeletePopup,
        profileAvatarSelector,
        avatarEditPopup,
        openAvatarEditPopupButton
} from '../utils/constants.js';



const profileEditFormValidator = new FormValidator(config, formEditElement);
profileEditFormValidator.enableValidation();

const avatarEditFormValidator = new FormValidator(config, formAvatarEditElement);
avatarEditFormValidator.enableValidation();

const cardAddFormValidator = new FormValidator(config, formAddElement);
cardAddFormValidator.enableValidation();

const userInfo = new UserInfo({name: profileNameSelector, description: profileDescriptionSelector, avatar: profileAvatarSelector});

const popupWithEditForm = new PopupWithForm(editPopup, (values) => {
    popupWithEditForm.renderLoading(true);
    api.setUserInfoByApi(values)
    .catch((error) => console.log(error))
    .finally(() => popupWithAddForm.renderLoading(false));
});
popupWithEditForm.setEventListeners();

const popupWithAvatarEditForm = new PopupWithForm(avatarEditPopup, (values) => {
    api.changeUserAvatar(values)
        .then((data) => {
            popupWithAvatarEditForm.renderLoading(true);
            userInfo.setUserAvatar(data);
            avatarEditFormValidator.disableSubmitButton();
            popupWithAvatarEditForm.close();
        })
        .catch((error) => console.log(error))
        .finally(() => popupWithAvatarEditForm.renderLoading(false));
});
popupWithAvatarEditForm.setEventListeners();

const popupWithImage = new PopupWithImage(imagePopup);
popupWithImage.setEventListeners();

const popupWithAddForm = new PopupWithForm(addPopup, (values) => {
    popupWithAddForm.renderLoading(true);
    api.addCard(values)
        .then((data) => {
            const card = createCard(data);
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
            cardAddFormValidator.disableSubmitButton();
            popupWithAddForm.close();
        })
        .catch((error) => console.log(error))
        .finally(() => popupWithAddForm.renderLoading(false));
});
popupWithAddForm.setEventListeners();

const popupWithConfirmDeleteForm = new PopupWithConfirm(confirmDeletePopup);
popupWithConfirmDeleteForm.setEventListeners();

openEditPopupButton.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    profileEditFormValidator.enableSubmitButton();
    profileEditFormValidator.hideErrors();
    nameInput.value = userData.name;
    jobInput.value = userData.description;
    popupWithEditForm.open();
});

openAvatarEditPopupButton.addEventListener('click', () => {
    popupWithAvatarEditForm.open();
});

openAddPopupButton.addEventListener('click', () => {
    popupWithAddForm.open();
    cardAddFormValidator.hideErrors();
});

const createCard = (data) => {
    const card = new Card( {
        data: data,
        cardClickAction: () => {
                popupWithImage.open(data);
            },
        likeClickAction: () => {
                card.cardLike();
            },
        confirmDeleteAction: () => {
            popupWithConfirmDeleteForm.open();
            popupWithConfirmDeleteForm.setSubmitAction(() => {
                popupWithConfirmDeleteForm.renderLoading(true);
                api.deleteCard(data._id)
                    .then( () => {
                      card.deleteCard();
                      popupWithConfirmDeleteForm.close();
                    })
                    .catch((error) => console.log(error))
                    .finally(() => popupWithConfirmDeleteForm.renderLoading(false));
                });
            }
        },
        cardTemplate,
        api,
        userId);
    return card
};

const cardList = new Section({
    renderer: (item) => {
        const card = createCard(item);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
        },
    },
    cardsContainer
);

const api = new Api(options);
let userId;
api.getData()
    .then(( [cards, userData] ) => {
        userInfo.setUserInfo(userData);
        userId = userData._id;
        cardList.renderItems(cards);
    })
    .catch((error) => console.log(error));


