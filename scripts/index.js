const openPopupButton = document.querySelector ('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector ('.popup__close-button');
let formElement = document.querySelector ('.form');
let nameInput = formElement.querySelector ('input[name="name"]');
const jobInput = formElement.querySelector ('input[name="description"]');

function togglePopup (event) {
    event.preventDefault();
    popup.classList.toggle('popup_is-opened');
    jobInput.value = userJob.textContent;
    nameInput.value = userName.textContent;
}
openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);

function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        togglePopup(event);
    }
}
popup.addEventListener('click', handleOverlayClick);

function formSubmitHandler (evt) {
    evt.preventDefault();
    userJob.textContent = jobInput.value;
    userName.textContent = nameInput.value;
    popup.classList.toggle('popup_is-opened');
}

formElement.addEventListener('submit', formSubmitHandler); 