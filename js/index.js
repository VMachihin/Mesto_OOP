import { FormValidator, validationSettings } from './FormValidator.js';
import { Card } from './Card.js';


const userTitle = document.querySelector('.info__title'),
  textAboutMe = document.querySelector('.info__subtitle'),
  infoEditBtn = document.querySelector('.info__editing-btn'),
  profileAddBtn = document.querySelector('.profile__add-btn'),
  popupUserContent = document.querySelector('.popup_editUser'),
  popupAddCards = document.querySelector('.popup_addCards'),
  popups = document.querySelectorAll('.popup'),
  formInfo = document.querySelector('.popup__container_editUser'),
  formAddCard = document.querySelector('.popup__container_addCard'),
  inputName = document.querySelector('#name'),
  inputAboutMe = document.querySelector('#aboutMe'),
  inputPlace = document.querySelector('#place'),
  inputlinkImg = document.querySelector('#linkImg'),
  cardsListItem = document.querySelector('.gallery__list');

const newFormInfo = new FormValidator(formInfo, validationSettings);
const newFormAddCard = new FormValidator(formAddCard, validationSettings);

// Открытие попапа
export function showPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', closePopupByEscape);
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
  document.removeEventListener('keydown', closePopupByEscape);
}

// Открытие попапа редактирования профиля
function showPopupEditProfile(popup) {
  inputName.value = userTitle.textContent;
  inputAboutMe.value = textAboutMe.textContent;

  newFormInfo.changeButtonStyle();

  showPopup(popup);
}

// Открытие попапа добавления карточки
function showPopupAddCard(popup) {
  inputPlace.value = '';
  inputlinkImg.value = '';

  newFormAddCard.changeButtonStyle();

  showPopup(popup);
}

// Редактирование информации о пользователе на странице
function editInfoHandler(evt) {
  evt.preventDefault();

  userTitle.textContent = inputName.value;
  textAboutMe.textContent = inputAboutMe.value;

  closePopup(popupUserContent);
}

// Добавление карточки на странице
function addCard(evt) {
  evt.preventDefault();

  const newCard = new Card(inputPlace.value, inputlinkImg.value, '#templateCard');
  cardsListItem.prepend(newCard.createCard());

  closePopup(popupAddCards);

  evt.target.reset();
}

// Закрытие попапа на кнопку или оверлэй
popups.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

// Закрытие попапа на кнопку Escape
function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

infoEditBtn.addEventListener('click', () => showPopupEditProfile(popupUserContent));
profileAddBtn.addEventListener('click', () => showPopupAddCard(popupAddCards));
formInfo.addEventListener('submit', editInfoHandler);
formAddCard.addEventListener('submit', addCard);
newFormInfo.enableValidation();
newFormAddCard.enableValidation();