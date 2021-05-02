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

const cardTemplate = document.querySelector ('#elementTemplate');
const cardsContainer = document.querySelector ('.elements');

const popupImage = imagePopup.querySelector ('.popup__image');
const popupDescription = imagePopup.querySelector ('.popup__image-description');


initialCards.forEach(function(currentItem) {
    const newCard = createCard(currentItem);
    cardsContainer.append(newCard);
});

function createCard(element) {
    const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);
    const cardImage = newCard.querySelector('.element__image');
    const cardName = newCard.querySelector('.element__name');
    const deleteButton = newCard.querySelector('.element__trash-icon');
    
    cardImage.src = element.link;
    cardImage.alt = element.name;
    
    cardName.textContent = element.name;

    const cardLike = newCard.querySelector('.element__like');
    
    cardLike.addEventListener('click', addLike);

    deleteButton.addEventListener('click', deleteCard);
    cardImage.addEventListener('click', openImagePopup);
    
    return newCard
}

function deleteCard (event) {
    event.target.closest('.element').remove();
}

function addLike (event) {
    if (event.target.classList.contains('element__like')) {
        event.target.classList.toggle('element__like_active')
    };
}

function saveEditButton (evt) {
    evt.preventDefault();
    userJob.textContent = jobInput.value;
    userName.textContent = nameInput.value;
    closeEditPopup ();
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

function openImagePopup(event){
    popupImage.src = event.target.src;
    popupDescription.textContent = event.target.alt;
    openPopup(imagePopup);
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

openEditPopupButton.addEventListener('click', openEditPopup);
openAddPopupButton.addEventListener('click', openAddPopup);

closeEditPopupButton.addEventListener('click', closeEditPopup);
closeAddPopupButton.addEventListener('click', closeAddPopup);
closeImagePopupButton.addEventListener('click', closeImagePopup);

formEditElement.addEventListener('submit', saveEditButton); 
formAddElement.addEventListener('submit', saveAddButton);

