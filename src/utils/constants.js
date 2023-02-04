const templateCard = '#templateCard';
const popups = document.querySelectorAll('.popup');
const formInfo = document.forms['popup-editUser'];
const formAddCard = document.forms['popup-addCard'];
const profileImg = document.querySelector('.profile__img');
const userTitle = document.querySelector('.info__title');
const textAboutMe = document.querySelector('.info__subtitle');
const inputName = formInfo.querySelector('#name');
const inputAboutMe = formInfo.querySelector('#aboutMe');
const infoEditBtn = document.querySelector('.info__editing-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const changeAvatarBtn = document.querySelector('.profile__image-wrp');
const popupUserContent = document.querySelector('.popup_editUser');
const popupAddCards = document.querySelector('.popup_addCards');
const popupDeleteCard = document.querySelector('.popup_deleteCard');
const popupChangeAvatar = document.querySelector('.popup_updateUserImage');
const popupBigImg = document.querySelector('.popup_bigImg');
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
  profileImg,
  userTitle,
  textAboutMe,
  inputName,
  inputAboutMe,
  infoEditBtn,
  profileAddBtn,
  changeAvatarBtn,
  popupUserContent,
  popupAddCards,
  popupDeleteCard,
  popupChangeAvatar,
  popupBigImg,
  cardsListItem,
  validationSettings,
};
