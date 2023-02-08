import Popup from './Popup';

export default class PopupWithConfirmation extends Popup {
  constructor({ selector, handleFormSubmit }) {
    super(selector);
    this._formContainer = document.querySelector(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._formContainer.querySelector('.popup__form');
  }

  open(cardId, cardElement, card) {
    this._cardId = cardId;
    this._card = card;
    this._cardElement = cardElement
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault();

      this._handleFormSubmit(this._cardId, this._cardElement, this._card);
    });
  }
}
