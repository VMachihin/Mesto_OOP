export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__text-error_active'
};

export class FormValidator {
  constructor(formElem, settings) {
    this._settings = settings;
    this._formElem = formElem;
  }

  _showError(input) {
    this._textError = this._formElem.querySelector(`.${input.id}-error`);

    input.classList.add(this._settings.inputErrorClass);

    this._textError.textContent = input.validationMessage;
    this._textError.classList.add(this._settings.errorClass);
  }

  hideError(input) {
    this._textError = this._formElem.querySelector(`.${input.id}-error`);

    input.classList.remove(this._settings.inputErrorClass);

    this._textError.textContent = '';
    this._textError.classList.remove(this._settings.errorClass);
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this.hideError(input);
    }
  }

  _checkInputItems() {
    return this._inputs.some(input => {
      return !input.validity.valid;
    });
  }

  _setEventListeners() {
    this._inputs = Array.from(this._formElem.querySelectorAll(this._settings.inputSelector));
    this._popupBtn = this._formElem.querySelector(this._settings.submitButtonSelector);

    this._changeButtonStyle();

    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._changeButtonStyle();
      });
    });
  }

  resetValidation() {
    this._changeButtonStyle();

    this._inputs.forEach(input => {
      this.hideError(input);
    });
  }

  _changeButtonStyle() {
    if (!this._checkInputItems()) {
      this._popupBtn.classList.remove(this._settings.inactiveButtonClass);
      this._popupBtn.removeAttribute('disabled', 'disabled');
    } else {
      this._popupBtn.classList.add(this._settings.inactiveButtonClass);
      this._popupBtn.setAttribute('disabled', 'disabled');
    }
  }

  enableValidation() {
    this._setEventListeners();
  }
}

