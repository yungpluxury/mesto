const openEditPopupButton = document.querySelector ('.profile__edit-button');
const openAddPopupButton = document.querySelector ('.profile__add-button');
const editPopup = document.querySelector('.popup_edit');
const addPopup = document.querySelector('.popup_add');
const imagePopup = document.querySelector('.popup_image');
const closeEditPopupButton = editPopup.querySelector ('.popup__close-button_edit');
const closeAddPopupButton = addPopup.querySelector ('.popup__close-button_add');
const closeImagePopupButton = imagePopup.querySelector ('.popup__close-button_image');
const formEditElement = document.querySelector ('.form_edit');
const formAddElement = document.querySelector ('.form_add');
const nameInput = formEditElement.querySelector ('input[name="name"]');
const jobInput = formEditElement.querySelector ('input[name="description"]');
const titleInput = formAddElement.querySelector ('input[name="title"]');
const linkInput = formAddElement.querySelector ('input[name="link"]');
const cardTemplate = document.querySelector ('#elementTemplate');
const cardsContainer = document.querySelector ('.elements');
const likeButton = document.querySelector ('.element__like');
const popupImage = imagePopup.querySelector ('.popup__image');
const popupDescription = imagePopup.querySelector ('.popup__image-description');
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

initialCards.forEach(function(currentItem) {
    const newCard = createCard(currentItem);
    cardsContainer.append(newCard);
});

function createCard(element) {
    const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);
    const cardImage = newCard.querySelector('.element__image');
    
    cardImage.src = element.link;
    cardImage.alt = element.name;
    
    newCard.querySelector('.element__name').textContent = element.name;

    const cardLike = newCard.querySelector('.element__like');
    
    cardLike.addEventListener('click', addLike);
    newCard.addEventListener('click', deleteCard);
    cardImage.addEventListener('click', openImagePopup);
    
    return newCard
}

function openImagePopup(event){
    popupImage.src = event.target.src;
    popupDescription.textContent = event.target.alt;
    openPopup(imagePopup);
}

function deleteCard (event) {
    event.preventDefault();
    const card = event.currentTarget;
    if(event.target.classList.contains('element__trash-icon')){   
    card.remove()
    }
}


function addLike (event) {
    if (event.target.classList.contains('element__like')) {
        event.target.classList.toggle('element__like_active')
    };
}

function saveAddButton (event) {
    event.preventDefault();
    const card = {
        name:'',
        link:''
    };
    card.name = titleInput.value;
    card.link = linkInput.value;
    cardsContainer.prepend(createCard(card));
    closeAddPopup();
}

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

function closeImagePopup () {
    closePopup (imagePopup);
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

function handleOverlayClickImage(event) {
    if (event.target === event.currentTarget) {
        closeImagePopup(event);
    }
}

openEditPopupButton.addEventListener('click', openEditPopup);
openAddPopupButton.addEventListener('click', openAddPopup);
closeEditPopupButton.addEventListener('click', closeEditPopup);
closeAddPopupButton.addEventListener('click', closeAddPopup);
closeImagePopupButton.addEventListener('click', closeImagePopup);

editPopup.addEventListener('click', handleOverlayClickEdit);
addPopup.addEventListener('click', handleOverlayClickAdd);
imagePopup.addEventListener('click', handleOverlayClickImage);

function saveEditButton (evt) {
    evt.preventDefault();
    userJob.textContent = jobInput.value;
    userName.textContent = nameInput.value;
    closeEditPopup ();
}

formEditElement.addEventListener('submit', saveEditButton); 
formAddElement.addEventListener('submit', saveAddButton);

