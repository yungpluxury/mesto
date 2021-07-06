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

const popupEditProfile = new PopupWithForm(editPopup, (values) => {
    popupEditProfile.renderLoading(true);
    api.setUserInfoByApi(values)
    .then(() => {
        popupEditProfile.close()
    })
    .catch((error) => console.log(error))
    .finally(() => popupEditProfile.renderLoading(false));
});
popupEditProfile.setEventListeners();

const popupEditAvatar = new PopupWithForm(avatarEditPopup, (values) => {
    api.changeUserAvatar(values)
        .then((data) => {
            popupEditAvatar.renderLoading(true);
            userInfo.setUserAvatar(data);
            avatarEditFormValidator.disableSubmitButton();
            popupEditAvatar.close();
        })
        .catch((error) => console.log(error))
        .finally(() => popupEditAvatar.renderLoading(false));
});
popupEditAvatar.setEventListeners();

const popupWithImage = new PopupWithImage(imagePopup);
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm(addPopup, (values) => {
    popupAddCard.renderLoading(true);
    api.addCard(values)
        .then((data) => {
            const card = createCard(data);
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
            cardAddFormValidator.disableSubmitButton();
            popupAddCard.close();
        })
        .catch((error) => console.log(error))
        .finally(() => popupAddCard.renderLoading(false));
});
popupAddCard.setEventListeners();

const popupWithConfirmDeleteForm = new PopupWithConfirm(confirmDeletePopup);
popupWithConfirmDeleteForm.setEventListeners();

openEditPopupButton.addEventListener('click', () => {
    const userData = userInfo.getUserInfo();
    profileEditFormValidator.enableSubmitButton();
    profileEditFormValidator.hideErrors();
    nameInput.value = userData.name;
    jobInput.value = userData.description;
    popupEditProfile.open();
});

openAvatarEditPopupButton.addEventListener('click', () => {
    popupEditAvatar.open();
    avatarEditFormValidator.hideErrors();
});

openAddPopupButton.addEventListener('click', () => {
    popupAddCard.open();
    cardAddFormValidator.hideErrors();
});

const createCard = (data) => {
    const card = new Card( {
        data: data,
        cardClickAction: () => {
                popupWithImage.open(data);
            },
        likeClickAction: () => {
            if(!(card.likedByUser())) {
                api.addLike(card._id)
                  .then((data) => {
                    card.updateLikesCount(data.likes);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                api.deleteLike(card._id)
                  .then((data) => {
                    card.updateLikesCount(data.likes);
                  })
                  .catch((err) => {
                    console.log(err)
                  });
            };
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


