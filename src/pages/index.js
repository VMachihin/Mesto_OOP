import './index.css';

import { FormValidator, validationSettings } from '../components/FormValidator.js';
import initialCards from '../utils/data.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  infoEditBtn,
  profileAddBtn,
  popupUserContent,
  popupAddCards,
  popupBigImg,
  inputName,
  inputAboutMe,
  cardsListItem,
} from '../utils/constants.js';

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

const popupUserInfo = new PopupWithForm({
  selector: popupUserContent, handleFormSubmit: () => {
    userInfo.setUserInfo();
    popupUserInfo.close();
  }
});

const editUserForm = {
  name: inputName,
  aboutMe: inputAboutMe
};
const userInfo = new UserInfo(editUserForm);

infoEditBtn.addEventListener('click', () => {
  popupUserInfo.open();
  userInfo.getUserInfo();
  userInfo.setUserInfo();
  formValidators['popup-editUser'].resetValidation();
});
popupUserInfo.setEventListeners();

const popupAddCard = new PopupWithForm({
  selector: popupAddCards, handleFormSubmit: (inputsData) => {

    const newInitialCards = {};
    newInitialCards.name = inputsData.place;
    newInitialCards.link = inputsData.linkImg;

    cardsListItem.prepend(createCard(newInitialCards));

    popupAddCard.close();
  }
});

profileAddBtn.addEventListener('click', () => {
  popupAddCard.open();
  formValidators['popup-addCard'].resetValidation();
});
popupAddCard.setEventListeners();

const cardList = new Section({
  data: initialCards, renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, cardsListItem);
cardList.renderCards();

function handleCardClick(name, link) {
  const popupWithImage = new PopupWithImage(popupBigImg, name, link);

  popupWithImage.open();
  popupWithImage.setEventListeners();
}

function createCard(element) {
  const card = new Card(element, '#templateCard', handleCardClick);
  const cardElemenent = card.makeCard();

  return cardElemenent;
}
