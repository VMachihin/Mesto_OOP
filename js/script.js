import { initialCards } from './data.js';
import { validationSettings } from './validate.js';
import { changeButtonStyle } from './validate.js';


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
  popupTitleBigImg = document.querySelector('.popup__title_bigImg'),
  popupBigImg = document.querySelector('.popup_bigImg'),
  popupImages = document.querySelector('.popup__image'),
  popupInputsEdit = Array.from(document.querySelectorAll('.popup__input_edit')),
  popupInputAddCard = Array.from(document.querySelectorAll('.popup__input_addCard')),
  popupButtonSave = document.querySelector('.popup__btn_save'),
  popupButtonCreate = document.querySelector('.popup__btn_create');

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

// Открытие попапа редактирования профиля
function showPopupEditProfile(popup) {
  inputName.value = userTitle.textContent;
  inputAboutMe.value = textAboutMe.textContent;

  changeButtonStyle(popupInputsEdit, popupButtonSave, validationSettings);

  showPopup(popup);
}

// Открытие попапа добавления карточки
function showPopupAddCard(popup) {
  inputPlace.value = '';
  inputlinkImg.value = '';

  changeButtonStyle(popupInputAddCard, popupButtonCreate, validationSettings);

  showPopup(popup);
}

// Попап с большой картинкой
function showBigImg(evt) {
  if (evt.target.className === 'card__img') {
    showPopup(popupBigImg);

    popupImages.src = evt.target.src;
    popupImages.alt = evt.target.alt;
    popupTitleBigImg.textContent = evt.target.nextElementSibling.textContent;
  }
}

// Редактирование информации о пользователе на странице
function editInfoHandler(evt) {
  evt.preventDefault();

  userTitle.textContent = inputName.value;
  textAboutMe.textContent = inputAboutMe.value;

  closePopup(popupUserContent);
}

const listCards = document.querySelector('.gallery__list');

const templateCard = document.querySelector('#templateCard').content;

// Создание карточки на странице.
function createCard(title, urlImg) {
  const itemCard = templateCard.querySelector('.gallery__item').cloneNode(true);
  const cardImg = itemCard.querySelector('.card__img');
  cardImg.src = urlImg;
  cardImg.alt = `Картинка с красивым видом на ${title}`;

  itemCard.querySelector('.card__title').textContent = title;

  //Лайк карточки
  const likeBtn = itemCard.querySelector('.card__btn_like');
  likeBtn.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__btn_like_liked');
  });

  // Удаление карточки
  const basketBtn = itemCard.querySelector('.card__btn_backet');
  basketBtn.addEventListener('click', (evt) => {
    evt.target.closest('.gallery__item').remove();
  });

  cardImg.addEventListener('click', showBigImg);

  return itemCard;
}

// Добавление карточки на странице
function addCard(evt) {
  evt.preventDefault();

  renderCard(inputPlace.value, inputlinkImg.value);
  closePopup(popupAddCards);

  evt.target.reset();
}

// Отрисовка карточки на странице
function renderCard(title, urlImg) {
  listCards.prepend(createCard(title, urlImg));
}

// Обход массива данных и запуск функции для отрисовки
initialCards.forEach(item => {
  renderCard(item.name, item.link);
});

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