const templateCard = '#templateCard';
const popups = document.querySelectorAll('.popup');
const formInfo = document.forms['popup-editUser'];
const formAddCard = document.forms['popup-addCard'];
const userAvatar = document.querySelector('.profile__img');
const userName = document.querySelector('.info__title');
const infoAboutMe = document.querySelector('.info__subtitle');
const infoEditBtn = document.querySelector('.info__editing-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const changeAvatarBtn = document.querySelector('.profile__image-wrp');
const cardsListItem = document.querySelector('.gallery__list');
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__text-error_active',
};

export {
  templateCard,
  popups,
  formInfo,
  formAddCard,
  userAvatar,
  userName,
  infoAboutMe,
  infoEditBtn,
  profileAddBtn,
  changeAvatarBtn,
  cardsListItem,
  validationSettings,
};
