export default class Card {
  constructor({ name, link }, templateSelector, handleCardClick) {
    this._title = name;
    this._urlImg = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    this._itemCard = document.querySelector(this._templateSelector)
      .content.querySelector('.gallery__item')
      .cloneNode(true);

    return this._itemCard;
  }

  makeCard() {
    this._cardElement = this._getTemplate();

    this._cardImg = this._cardElement.querySelector('.card__img');
    this._cardImg.src = this._urlImg;
    this._cardImg.alt = `Картинка с красивым видом на ${this._title}`;

    this._cardElement.querySelector('.card__title').textContent = this._title;

    this._setEventListener();

    return this._cardElement;
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('card__btn_like_liked');
  }

  _deleteCard(evt) {
    evt.target.closest('.gallery__item').remove();
  }

  _setEventListener() {
    //   //Лайк карточки
    this._cardElement.querySelector('.card__btn_like').addEventListener('click', (evt) => {
      this._toggleLike(evt);
    });

    // Удаление карточки
    this._cardElement.querySelector('.card__btn_basket').addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });

    // Попап с большой картинкой
    this._cardImg.addEventListener('click', () => {
      this._handleCardClick(this._title, this._urlImg);
    });
  }
}