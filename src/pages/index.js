import './index.css';

import {
  templateCard,
  infoEditBtn,
  profileAddBtn,
  changeAvatarBtn,
  userName,
  infoAboutMe,
  userAvatar,
  cardsListItem,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import { validationSettings } from '../utils/constants.js';
import Api from '../components/Api.js';

let myId;
// .......................
// .......................
// Плюшки от Геннадия Барсегяна)
const formValidators = {};

// Включение валидации
const enableValidation = settings => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach(formElement => {
    const validator = new FormValidator(formElement, settings);

    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name');

    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(validationSettings);
// .......................
// .......................
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '7c807b84-450d-4868-9be8-1ddb6e4753bd',
    'Content-Type': 'application/json',
  },
});
// .......................
// .......................
const userInfo = new UserInfo(userName, infoAboutMe, userAvatar);

const popupUserInfo = new PopupWithForm({
  selector: '.popup_editUser',
  handleFormSubmit: editingProfile
});

function editingProfile(inputsData) {
  const { name, about } = inputsData;
  userName.textContent = name;
  infoAboutMe.textContent = about;

  popupUserInfo.renderLoading(true);

  api.editingProfile(userInfo.getUserInfo())
    .then(() => {
      popupUserInfo.close()
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => popupUserInfo.renderLoading(false));
}
// .......................
// .......................
const popupAvatar = new PopupWithForm({
  selector: '.popup_changeAvatar',
  handleFormSubmit: changeAvatar
});

function changeAvatar({ linkAvatar }) {
  const newAvatar = {
    avatar: linkAvatar,
  };

  popupAvatar.renderLoading(true);

  api.changeAvatar(newAvatar)
    .then(() => {
      userInfo.setUserAvatar(linkAvatar)
      popupAvatar.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => { popupAvatar.renderLoading(true) });
};
// .......................
// .......................
const popupWithImage = new PopupWithImage('.popup_bigImg');
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}
// ........................
// .......................
const popupDelCard = new PopupWithConfirmation({
  selector: '.popup_deleteCard',
  handleFormSubmit: deleteCardApi
});
popupDelCard.setEventListeners();

function handleDeleteCard(cardId, cardElement, card) {
  popupDelCard.open(cardId, cardElement, card);
}

function deleteCardApi(cardId, cardElement, card) {
  api.deleteCardApi(cardId)
    .then(() => {
      card.deleteCard(cardElement);
      popupDelCard.close();
    })
    .catch(err => {
      console.log(err);
    });
}
// .......................
// .......................
function handleLikeCard(cardId, card) {
  api.likeCard(cardId)
    .then(data => {
      card.toggleLike();
      card.changeCounterLikes(data);
    })
    .catch(err => {
      console.log(err);
    });
}
// .......................
// .......................
function handleDislikeCard(cardId, card) {
  api.dislikeCard(cardId)
    .then(data => {
      card.toggleLike();
      card.changeCounterLikes(data);
    })
    .catch(err => {
      console.log(err);
    })
}
// .......................
// .......................
const popupAddCard = new PopupWithForm({
  selector: '.popup_addCards',
  handleFormSubmit: addNewCard
});

function addNewCard(inputsData) {
  const newUserCards = {
    place: inputsData.place,
    linkImg: inputsData.linkImg,
  };
  popupAddCard.setInputValue(newUserCards);

  popupAddCard.renderLoading(true);

  api.addNewCard(newUserCards)
    .then(userCardApi => {
      cardsListItem.prepend(createCard(userCardApi, userCardApi.owner._id));
      popupAddCard.close();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => popupAddCard.renderLoading(true));
}
// .......................
// .......................
const cardList = new Section({ myId, renderer: createCard }, cardsListItem);
// .......................
// .......................
Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    myId = userData._id;

    userInfo.setUserInfo(myId, userData);
    userInfo.setUserAvatar(userData.avatar);

    if (myId) {
      cardList.renderCards(myId, cards);
    }
  })
  .catch(err => {
    console.log(err);
  });
// .......................
// .......................
function createCard(element, myId) {
  const card = new Card(
    element,
    myId,
    templateCard,
    handleCardClick,
    handleDeleteCard,
    handleLikeCard,
    handleDislikeCard,
  );
  const cardElemenent = card.makeCard();

  return cardElemenent;
}
// .......................
// .......................
profileAddBtn.addEventListener('click', () => {
  popupAddCard.open();
  formValidators['popup-addCard'].resetValidation();
});
popupAddCard.setEventListeners();
// .......................
// .......................
infoEditBtn.addEventListener('click', () => {
  popupUserInfo.open();
  popupUserInfo.setInputValue(userInfo.getUserInfo());
  formValidators['popup-editUser'].resetValidation();
});
popupUserInfo.setEventListeners();
// .......................
// .......................
changeAvatarBtn.addEventListener('click', () => {
  popupAvatar.open();
  formValidators['popup-update'].resetValidation();
});
popupAvatar.setEventListeners();
