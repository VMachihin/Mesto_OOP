import { initialCards } from './data.js';
import { showPopup } from './index.js';

export class Card {
  constructor(title, urlImg, templateSelector) {
    this._title = title;
    this._urlImg = urlImg;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const itemCard = document.querySelector(this._templateSelector)
      .content.querySelector('.gallery__item')
      .cloneNode(true);

    return itemCard;
  }

  createCard() {
    this._cardElement = this._getTemplate();

    const cardImg = this._cardElement.querySelector('.card__img');
    cardImg.src = this._urlImg;
    cardImg.alt = `Картинка с красивым видом на ${this._title}`;

    this._cardElement.querySelector('.card__title').textContent = this._title;

    this._setEventListener(this._cardElement);

    return this._cardElement;
  }

  _toggleLike(elem) {
    elem.target.classList.toggle('card__btn_like_liked');
  }

  _deleteCard(elem) {
    // Удаление карточки
    elem.target.closest('.gallery__item').remove();
  }

  _setEventListener() {
    //   //Лайк карточки
    this._cardElement.querySelector('.card__btn_like').addEventListener('click', (evt) => {
      this._toggleLike(evt);
    });

    // Удаление карточки
    this._cardElement.querySelector('.card__btn_backet').addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });

    // Попап с большой картинкой
    this._cardElement.querySelector('.card__img').addEventListener('click', (evt) => {
      this._showBigImg(evt);
    });
  }

  _showBigImg(elem) {
    const popupBigImg = document.querySelector('.popup_bigImg');
    const popupImages = document.querySelector('.popup__image');
    const popupTitleBigImg = document.querySelector('.popup__title_bigImg');

    if (elem.target.className === 'card__img') {
      showPopup(popupBigImg);

      popupImages.src = elem.target.src;
      popupImages.alt = elem.target.alt;
      popupTitleBigImg.textContent = elem.target.nextElementSibling.textContent;
    }
  }
}

initialCards.forEach(item => {
  const card = new Card(item.name, item.link, '#templateCard');
  document.querySelector('.gallery__list').prepend(card.createCard());
});