import Popup from './Popup';

export default class PopupWithConfirmation extends Popup {
  constructor({ selector, handleFormSubmit }) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = selector.querySelector('.popup__form');
  }

  open() {
    super.open();
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', evt => {
      evt.preventDefault();

      this._handleFormSubmit(this._formElement);
    });
  }
}
