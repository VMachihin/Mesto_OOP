import './index.css';

import {
  templateCard,
  infoEditBtn,
  profileAddBtn,
  changeAvatarBtn,
  popupUserContent,
  popupAddCards,
  popupDeleteCard,
  popupChangeAvatar,
  popupBigImg,
  inputName,
  inputAboutMe,
  userTitle,
  textAboutMe,
  profileImg,
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

// экземпляр класса Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '7c807b84-450d-4868-9be8-1ddb6e4753bd',
    'Content-Type': 'application/json',
  },
});

// Редактирование профиля
const userInfo = new UserInfo({ inputName, inputAboutMe });

const popupUserInfo = new PopupWithForm({
  selector: popupUserContent,
  handleFormSubmit: (inputData, submitBtn) => {
    userInfo.setUserInfo();

    api.editingProfile(userInfo.setUserInfo())
      .finally(() => submitBtn.textContent = 'Сохранить');
    submitBtn.textContent = 'Сохранение...';

    popupUserInfo.close();
  },
});

// Редактирование аватара
const popupAvatar = new PopupWithForm({
  selector: popupChangeAvatar,
  handleFormSubmit: (linkAvatar, submitBtn) => {
    const newAvatar = {
      avatar: linkAvatar.linkAvatar,
    };

    api.changeAvatar(newAvatar)
      .finally(() => submitBtn.textContent = 'Сохранить');
    submitBtn.textContent = 'Сохранение...';

    profileImg.src = newAvatar.avatar;

    popupAvatar.close();
  },
});

// попап с большой картинкой
function handleCardClick(name, link) {
  const popupWithImage = new PopupWithImage(popupBigImg, name, link);

  popupWithImage.open();
  popupWithImage.setEventListeners();
}

// попап удаления карточки
function handleDeleteCard(cardId, element, card) {
  const popupDelCard = new PopupWithConfirmation({
    selector: popupDeleteCard,
    handleFormSubmit: () => {
      api.deleteCardApi(cardId);

      card.deleteCard(element);

      popupDelCard.close();
    },
  });

  popupDelCard.open();
  popupDelCard.setEventListeners();
}

// Лайк карточки
function handleLikeCard(cardId, card) {
  api.likeCard(cardId)
    .then(data => {
      card.toggleLike();
      card.changeCounterLikes(data);
    });
}
// Дисклайк карточки
function handleDislikeCard(cardId, card) {
  api.dislikeCard(cardId)
    .then(data => {
      card.toggleLike();
      card.changeCounterLikes(data);
    });
}

// Добавление карточки
const popupAddCard = new PopupWithForm({
  selector: popupAddCards,
  handleFormSubmit: (inputsData, submitBtn) => {
    const newUserCards = {
      name: inputsData.place,
      link: inputsData.linkImg,
    };

    api.addNewCard(newUserCards)
      .then(userCardApi => {
        cardsListItem.prepend(createCard(userCardApi, userCardApi.owner._id));
      })
      .finally(() => submitBtn.textContent = 'Создать');
    submitBtn.textContent = 'Сохранение...';

    popupAddCard.close();
  },
});

// Получаем информации о пользователе
api.getUserInfo()
  .then(data => {
    const myId = data._id;

    profileImg.src = data.avatar;
    userTitle.textContent = data.name;
    textAboutMe.textContent = data.about;

    if (myId) {
      /* Получаем карточки с сервера */
      api.getCards()
        .then(data => {
          const cardList = new Section(
            {
              data,
              renderer: item => {
                cardList.addItem(createCard(item, myId));
              },
            },
            cardsListItem,
          );
          cardList.renderCards(myId);
        });
    }

    return null;
  });

// Функция для создания карточки
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

profileAddBtn.addEventListener('click', () => {
  popupAddCard.open();
  formValidators['popup-addCard'].resetValidation();
});
popupAddCard.setEventListeners();

infoEditBtn.addEventListener('click', () => {
  popupUserInfo.open();
  userInfo.getUserInfo();
  userInfo.setUserInfo();
  formValidators['popup-editUser'].resetValidation();
});
popupUserInfo.setEventListeners();

changeAvatarBtn.addEventListener('click', () => {
  popupAvatar.open();
  formValidators['popup-update'].resetValidation();
});
popupAvatar.setEventListeners();
