import Popup from "./Popup.js";
import { userTitle, textAboutMe, inputName, inputAboutMe } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor({ selector, handleFormSubmit }) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = document.querySelectorAll('.popup__input');
    this._formElement = selector.querySelector('.popup__form');
  }

  _getInputValues() {
    this.inputValues = {};

    this._inputList.forEach(input => {
      this.inputValues[input.name] = input.value;
    });

    return this.inputValues;
  }

  open() {
    inputName.value = userTitle.textContent;
    inputAboutMe.value = textAboutMe.textContent;

    super.open();
  }

  close() {
    if (this._formElement.name === 'popup-addCard') {
      this._formElement.reset();
    }

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