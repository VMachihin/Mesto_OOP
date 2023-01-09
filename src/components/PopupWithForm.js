import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ selector, handleFormSubmit }) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = document.querySelectorAll('.popup__input');
    this._formElement = selector.querySelector('.popup__form');
    this._userTitle = document.querySelector('.info__title');
    this._textAboutMe = document.querySelector('.info__subtitle');
    this._inputName = document.querySelector('#name');
    this._inputAboutMe = document.querySelector('#aboutMe');
  }

  _getInputValues() {
    this.inputValues = {};

    this._inputList.forEach(input => {
      this.inputValues[input.name] = input.value;
    });

    return this.inputValues;
  }

  open() {
    this._inputName.value = this._userTitle.textContent;
    this._inputAboutMe.value = this._textAboutMe.textContent;

    super.open();
  }

  close() {
    this._formElement.reset();

    super.close();
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });

    super.setEventListeners();
  }
}