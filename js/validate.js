export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__text-error_active'
};

// Запуск валидации
function enableValidation(settings) {
  const forms = Array.from(document.querySelectorAll(settings.formSelector));

  forms.forEach(form => {
    setEventListeners(form, settings);
  });
}

// Вешаем обработчик события на все инпуты
function setEventListeners(formSelector, settings) {
  const inputs = Array.from(formSelector.querySelectorAll(settings.inputSelector));
  const popupBtn = formSelector.querySelector(settings.submitButtonSelector);

  changeButtonStyle(inputs, popupBtn, settings);

  inputs.forEach(popupInput => {
    popupInput.addEventListener('input', () => {
      checkInputValidity(formSelector, popupInput, settings);
      changeButtonStyle(inputs, popupBtn, settings);
    });
  });
}

// Проверка валидации инпута через интерфейс ValidityState
function checkInputValidity(popupForm, popupInput, settings) {
  if (!popupInput.validity.valid) {
    showError(popupForm, popupInput, popupInput.validationMessage, settings);
  } else {
    hideError(popupForm, popupInput, settings);
  }
}

// Функция для вывода сообщения об ошибке
function showError(popupForm, popupInput, errorMessage, settings) {
  const textError = popupForm.querySelector(`.${popupInput.id}-error`);

  popupInput.classList.add(settings.inputErrorClass);

  textError.textContent = errorMessage;
  textError.classList.add(settings.errorClass);
}

// Функция скрытия сообщения об ошибке
function hideError(popupForm, popupInput, settings) {
  const textError = popupForm.querySelector(`.${popupInput.id}-error`);

  popupInput.classList.remove(settings.inputErrorClass);

  textError.textContent = '';
  textError.classList.remove(settings.errorClass);
}

// Проверка массива инпутов на то, что все они прохотят валидацию или нет.
function checkInputItems(popupInputs) {
  return popupInputs.some(input => {
    return !input.validity.valid;
  });
}

// Изменение состояния кнопки, в зависимости от валидности инпутов.
function changeButtonStyle(popupInputs, popupBtn, settings) {
  if (!checkInputItems(popupInputs)) {
    removeBtnClass(popupBtn, settings);
  } else {
    addBtnClass(popupBtn, settings);
  }
}
export function removeBtnClass(popupBtn, settings) {
  popupBtn.classList.remove(settings.inactiveButtonClass);
  popupBtn.removeAttribute('disabled', 'disabled');
}
export function addBtnClass(popupBtn, settings) {
  popupBtn.classList.add(settings.inactiveButtonClass);
  popupBtn.setAttribute('disabled', 'disabled');
}



enableValidation(validationSettings);
