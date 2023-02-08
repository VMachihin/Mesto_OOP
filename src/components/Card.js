export default class Card {
  constructor(element, myId, templateSelector, handleCardClick, handleDeleteCard, handleLikeCard, handleDislikeCard) {
    this._element = element;
    this._title = element.name;
    this._urlImg = element.link;
    this._elementLikes = element.likes;
    this._myId = myId;
    this._cardOwnerId = element.owner._id;
    this._cardId = element._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
    this._handleDislikeCard = handleDislikeCard;
  }

  _getTemplate() {
    this._itemCard = document
      .querySelector(this._templateSelector)
      .content.querySelector('.gallery__item')
      .cloneNode(true);

    return this._itemCard;
  }

  toggleLike() {
    this._likeBtn.classList.toggle('card__btn_like_liked');
  }

  changeCounterLikes(arrLikes) {
    this._counterLikes.textContent = arrLikes.likes.length;
  }

  deleteCard() {
    this._cardElement.remove();
  }

  _setEventListener() {
    //   //Лайк карточки
    this._likeBtn.addEventListener('click', () => {
      if (this._likeBtn.classList.contains('card__btn_like_liked')) {
        this._handleDislikeCard(this._cardId, this);
      } else {
        this._handleLikeCard(this._cardId, this);
      }
    });

    // Удаление карточки
    this._basketBtn.addEventListener('click', () => {
      this._handleDeleteCard(this._cardId, this._cardElement, this);
    });

    // Попап с большой картинкой
    this._cardImg.addEventListener('click', () => {
      this._handleCardClick(this._title, this._urlImg);
    });
  }

  makeCard() {
    this._cardElement = this._getTemplate();

    this._cardImg = this._cardElement.querySelector('.card__img');
    this._cardImg.src = this._urlImg;
    this._cardImg.alt = `Картинка с красивым видом на ${this._title}`;
    this._cardElement.querySelector('.card__title').textContent = this._title;
    this._counterLikes = this._cardElement.querySelector('.card__counter-likes');
    this._likeBtn = this._cardElement.querySelector('.card__btn_like');
    this._basketBtn = this._cardElement.querySelector('.card__btn_basket');

    this._counterLikes.textContent = this._elementLikes.length;

    if (this._myId !== this._cardOwnerId) {
      this._basketBtn.style.display = 'none';
    }

    this._elementLikes.forEach(item => {
      if (item._id === this._myId) {
        this._likeBtn.classList.add('card__btn_like_liked');
      }
    });

    this._setEventListener();

    return this._cardElement;
  }
}
