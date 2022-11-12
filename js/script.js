import { initialCards } from './data.js';

const userTitle = document.querySelector('.info__title'),
  textAboutMe = document.querySelector('.info__subtitle'),
  infoEditBtn = document.querySelector('.info__editing-btn'),
  profileAddBtn = document.querySelector('.profile__add-btn'),
  popupUserContent = document.querySelector('.popup_editUser'),
  popupAddCards = document.querySelector('.popup_addCards'),
  popupCloseBtns = document.querySelectorAll('.popup__close'),
  formInfo = document.querySelector('.popup__container_editUser'),
  formAddCard = document.querySelector('.popup__container_addCard'),
  inputName = document.querySelector('#name'),
  inputAboutMe = document.querySelector('#aboutMe'),
  inputPlace = document.querySelector('#place'),
  inputlinkImg = document.querySelector('#linkImg'),
  popupTitleBigImg = document.querySelector('.popup__title_bigImg'),
  popupBigImg = document.querySelector('.popup_bigImg'),
  popupImages = document.querySelector('.popup__image');

// Открытие попапа
function showPopup(popup) {
  popup.classList.add('popup_opened');
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Проверка попапа
function checkPopup(popup) {
  if (popup.className === 'popup popup_editUser') {
    inputName.placeholder = userTitle.textContent;
    inputName.value = '';
    inputAboutMe.placeholder = textAboutMe.textContent;
    inputAboutMe.value = '';

    showPopup(popup);
  } else if (popup.className === 'popup popup_addCards') {
    inputPlace.placeholder = 'Название';
    inputPlace.value = '';
    inputlinkImg.placeholder = 'Ссылка на картинку';
    inputlinkImg.value = '';

    showPopup(popup);
  }
}

// Попап с большой картинкой
function showBigImg(evt) {
  if (evt.target.className === 'card__img') {
    popupBigImg.classList.add('popup_opened');
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

  popupUserContent.classList.remove('popup_opened');
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

// Отрисовка карточки на странице
function renderCard(title, urlImg) {
  listCards.prepend(createCard(title, urlImg));
}

// Добавление карточки на странице
function addCard(evt) {
  evt.preventDefault();

  renderCard(inputPlace.value, inputlinkImg.value);
  popupAddCards.classList.remove('popup_opened');
}

initialCards.forEach(item => {
  renderCard(item.name, item.link);
});

infoEditBtn.addEventListener('click', () => checkPopup(popupUserContent));
profileAddBtn.addEventListener('click', () => checkPopup(popupAddCards));
popupCloseBtns.forEach(btn => {
  btn.addEventListener('click', (evt) => {
    const popupCurrent = evt.target.closest('.popup');
    closePopup(popupCurrent);
  });
});
formInfo.addEventListener('submit', editInfoHandler);
formAddCard.addEventListener('submit', addCard);