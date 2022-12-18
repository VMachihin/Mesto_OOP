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

  _showError(inputElem) {
    const textError = this._formElem.querySelector(`.${inputElem.id}-error`);

    inputElem.classList.add(this._settings.inputErrorClass);

    textError.textContent = inputElem.validationMessage;
    textError.classList.add(this._settings.errorClass);
  }

  _hideError(inputElem) {
    const textError = this._formElem.querySelector(`.${inputElem.id}-error`);

    inputElem.classList.remove(this._settings.inputErrorClass);

    textError.textContent = '';
    textError.classList.remove(this._settings.errorClass);
  }

  _checkInputValidity(inputElem) {
    if (!inputElem.validity.valid) {
      this._showError(inputElem);
    } else {
      this._hideError(inputElem);
    }
  }

  _checkInputItems() {
    const popupInputs = Array.from(this._formElem.querySelectorAll(validationSettings.inputSelector));
    return popupInputs.some(input => {
      return !input.validity.valid;
    });
  }

  _setEventListeners() {
    const inputs = Array.from(this._formElem.querySelectorAll(this._settings.inputSelector));

    this.changeButtonStyle();

    inputs.forEach(popupInput => {
      popupInput.addEventListener('input', () => {
        this._checkInputValidity(popupInput);
        this.changeButtonStyle();
      });
    });
  }

  changeButtonStyle() {
    const popupBtn = this._formElem.querySelector(this._settings.submitButtonSelector);

    if (!this._checkInputItems()) {
      popupBtn.classList.remove(this._settings.inactiveButtonClass);
      popupBtn.removeAttribute('disabled', 'disabled');
    } else {
      popupBtn.classList.add(this._settings.inactiveButtonClass);
      popupBtn.setAttribute('disabled', 'disabled');
    }
  }

  enableValidation() {
    this._setEventListeners();
  }
}

