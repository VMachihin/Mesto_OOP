import { FormValidator, validationSettings } from './FormValidator.js';
import { Card } from './Card.js';
import { initialCards } from './data.js';


const userTitle = document.querySelector('.info__title'),
  textAboutMe = document.querySelector('.info__subtitle'),
  infoEditBtn = document.querySelector('.info__editing-btn'),
  profileAddBtn = document.querySelector('.profile__add-btn'),
  popupUserContent = document.querySelector('.popup_editUser'),
  popupAddCards = document.querySelector('.popup_addCards'),
  popupBigImg = document.querySelector('.popup_bigImg'),
  popupImages = document.querySelector('.popup__image'),
  popupTitleBigImg = document.querySelector('.popup__title_bigImg'),
  popups = document.querySelectorAll('.popup'),
  formInfo = document.forms['popup-editUser'],
  formAddCard = document.forms['popup-addCard'],
  inputName = document.querySelector('#name'),
  inputAboutMe = document.querySelector('#aboutMe'),
  inputPlace = document.querySelector('#place'),
  inputlinkImg = document.querySelector('#linkImg'),
  cardsListItem = document.querySelector('.gallery__list');

// Плюшки от Геннадия Барсегяна)
const formValidators = {};

// Включение валидации
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formElement) => {

    const validator = new FormValidator(formElement, settings);

    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name');

    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationSettings);

// Открытие попапа
function showPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', closePopupByEscape);
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupByEscape);
}

function handleCardClick(name, link) {
  popupImages.src = link;
  popupImages.alt = name;
  popupTitleBigImg.textContent = name;

  showPopup(popupBigImg);
}

// Открытие попапа редактирования профиля
function showPopupEditProfile(popup) {
  inputName.value = userTitle.textContent;
  inputAboutMe.value = textAboutMe.textContent;

  formValidators['popup-editUser'].resetValidation();

  showPopup(popup);
}

// Открытие попапа добавления карточки
function showPopupAddCard(popup) {
  formAddCard.reset();

  formValidators['popup-addCard'].resetValidation();

  showPopup(popup);
}

// Редактирование информации о пользователе на странице
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  formValidators['popup-editUser'].resetValidation();

  userTitle.textContent = inputName.value;
  textAboutMe.textContent = inputAboutMe.value;

  closePopup(popupUserContent);
}

// Добавление карточки на странице
function addCard(evt) {
  evt.preventDefault();

  const userCard = {
    name: inputPlace.value,
    link: inputlinkImg.value
  };
  makeCard(userCard);

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

// Создание карточки
function makeCard(card) {
  const cardItem = new Card(card, '#templateCard', handleCardClick);
  cardsListItem.prepend(cardItem.createCard());
}

initialCards.forEach(card => {
  makeCard(card);
});

infoEditBtn.addEventListener('click', () => showPopupEditProfile(popupUserContent));
profileAddBtn.addEventListener('click', () => showPopupAddCard(popupAddCards));
formInfo.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', addCard);