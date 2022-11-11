const nameUserTitle = document.querySelector('.info__title'),
  aboutMeText = document.querySelector('.info__subtitle'),
  editInfoBtn = document.querySelector('.info__editing-btn'),
  profileAddBtn = document.querySelector('.profile__add-btn'),
  popupUserContent = document.querySelector('.popup_editUser'),
  popupAddCards = document.querySelector('.popup_addCards'),
  closePopupBtns = document.querySelectorAll('.popup__close'),
  formInfo = document.querySelector('.popup__container_editUser'),
  formAddCard = document.querySelector('.popup__container_addCard'),
  nameInput = document.querySelector('#name'),
  aboutMeInput = document.querySelector('#aboutMe'),
  placeInput = document.querySelector('#place'),
  linkImg = document.querySelector('#linkImg'),
  popupTitleBigImg = document.querySelector('.popup__title_bigImg'),
  popupBigImg = document.querySelector('.popup_bigImg'),
  popupImages = document.querySelector('.popup__image');

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

// Открытие попапа
function showPopup(popup) {
  if (popup.className === 'popup popup_editUser') {
    nameInput.value = nameUserTitle.textContent;
    aboutMeInput.value = aboutMeText.textContent;

    popup.classList.add('popup_opened');
  } else if (popup.className === 'popup popup_addCards') {
    placeInput.value = 'Название';
    linkImg.value = 'Ссылка на картинку';

    popup.classList.add('popup_opened');
  }
}

// Закрытие попапа
function closePopup(evt) {
  evt.target.parentNode.parentNode.classList.remove('popup_opened');
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

  nameUserTitle.textContent = nameInput.value;
  aboutMeText.textContent = aboutMeInput.value;

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
    evt.target.parentNode.parentNode.remove();
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

  renderCard(placeInput.value, linkImg.value);
  popupAddCards.classList.remove('popup_opened');
}

initialCards.forEach(item => {
  renderCard(item.name, item.link);
});

editInfoBtn.addEventListener('click', () => showPopup(popupUserContent));
profileAddBtn.addEventListener('click', () => showPopup(popupAddCards));
closePopupBtns.forEach(btn => {
  btn.addEventListener('click', closePopup);
});
formInfo.addEventListener('submit', editInfoHandler);
formAddCard.addEventListener('submit', addCard);