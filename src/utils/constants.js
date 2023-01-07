const userTitle = document.querySelector('.info__title');
const textAboutMe = document.querySelector('.info__subtitle');
const popups = document.querySelectorAll('.popup');
const popupImages = document.querySelector('.popup__image');
const popupTitleBigImg = document.querySelector('.popup__title_bigImg');
const formInfo = document.forms['popup-editUser'];
const formAddCard = document.forms['popup-addCard'];
const inputName = formInfo.querySelector('#name');
const inputAboutMe = formInfo.querySelector('#aboutMe');
const infoEditBtn = document.querySelector('.info__editing-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const popupUserContent = document.querySelector('.popup_editUser');
const popupAddCards = document.querySelector('.popup_addCards');
const popupBigImg = document.querySelector('.popup_bigImg');
const cardsListItem = document.querySelector('.gallery__list');

export {
  userTitle,
  textAboutMe,
  popups,
  popupImages,
  popupTitleBigImg,
  formInfo,
  formAddCard,
  inputName,
  inputAboutMe,
  infoEditBtn,
  profileAddBtn,
  popupUserContent,
  popupAddCards,
  popupBigImg,
  cardsListItem
};