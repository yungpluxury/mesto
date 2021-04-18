const openPopupButton = document.querySelector ('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector ('.popup__close-button');
let formElement = document.querySelector ('.form');
let nameInput = formElement.querySelector ('input[name="name"]');
const jobInput = formElement.querySelector ('input[name="description"]');

function openPopup (event) {
    popup.classList.toggle('popup_is-opened');
    jobInput.value = userJob.textContent;
    nameInput.value = userName.textContent;
}

function closePopup (event) {
    popup.classList.toggle('popup_is-opened');
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        closePopup(event);
    }
}
popup.addEventListener('click', handleOverlayClick);

function formSubmitHandler (evt) {
    evt.preventDefault();
    userJob.textContent = jobInput.value;
    userName.textContent = nameInput.value;
    closePopup ();
}

formElement.addEventListener('submit', formSubmitHandler); 