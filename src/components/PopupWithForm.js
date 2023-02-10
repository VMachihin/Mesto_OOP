import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ selector, handleFormSubmit }) {
    super(selector);
    this._formContainer = document.querySelector(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._formContainer.querySelector('.popup__form');
    this._inputList = this._formContainer.querySelectorAll('.popup__input');
    this._submitBtn = this._formContainer.querySelector('.popup__btn');
    this._submitBtnText = this._formContainer.querySelector('.popup__btn').textContent;
  }

  _getInputValues() {
    this.inputValues = {};

    this._inputList.forEach((input) => {
      this.inputValues[input.name] = input.value;
    });

    return this.inputValues;
  }

  setInputValue(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    this._formElement.reset();
    super.close();
  }

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    if (isLoading) {
      this._submitBtn.textContent = loadingText;
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });

    super.setEventListeners();
  }
}
