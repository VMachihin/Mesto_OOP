const templateCard = '#templateCard';
const popups = document.querySelectorAll('.popup');
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
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__text-error_active'
};
const initialCards = [
  {
    name: 'Южная Африка',
    link: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Великая Китайская Стена',
    link: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Кипр',
    link: 'https://images.unsplash.com/photo-1560860446-c821e910a0a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    name: 'Судак',
    link: 'https://images.unsplash.com/photo-1565342403917-671ac824577c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1210&q=80'
  },
  {
    name: 'Канада',
    link: 'https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1259&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1548130516-2ca6aaeb84b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
];

export {
  templateCard,
  popups,
  formInfo,
  formAddCard,
  inputName,
  inputAboutMe,
  infoEditBtn,
  profileAddBtn,
  popupUserContent,
  popupAddCards,
  popupBigImg,
  cardsListItem,
  validationSettings,
  initialCards
};