const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__text-error_active'
};

// Запуск валидации
function enableValidation(settings) {
  const formSelector = Array.from(document.querySelectorAll(settings.formSelector));

  formSelector.forEach(form => {
    setEventListeners(form);
  });

  // Вешаем обработчик события на все инпуты
  function setEventListeners(formSelector) {
    const inputSelector = Array.from(formSelector.querySelectorAll(validationSettings.inputSelector));
    const popupBtn = formSelector.querySelector(validationSettings.submitButtonSelector);

    changeButtonStyle(inputSelector, popupBtn);

    inputSelector.forEach(popupInput => {
      popupInput.addEventListener('input', () => {
        checkInputValidity(formSelector, popupInput);
        changeButtonStyle(inputSelector, popupBtn);
      });
    });
  }

  // Проверка валидации инпута через интерфейс ValidityState
  function checkInputValidity(popupForm, popupInput) {
    if (!popupInput.validity.valid) {
      showError(popupForm, popupInput, popupInput.validationMessage);
    } else {
      hideError(popupForm, popupInput);
    }
  }

  // Функция для вывода сообщения об ошибке
  function showError(popupForm, popupInput, errorMessage) {
    const popupErrorText = popupForm.querySelector(`.${popupInput.id}-error`);

    popupInput.classList.add(validationSettings.inputErrorClass);

    popupErrorText.textContent = errorMessage;
    popupErrorText.classList.add(validationSettings.errorClass);
  }

  // Функция скрытия сообщения об ошибке
  function hideError(popupForm, popupInput) {
    const popupErrorText = popupForm.querySelector(`.${popupInput.id}-error`);

    popupInput.classList.remove(validationSettings.inputErrorClass);

    popupErrorText.textContent = '';
    popupErrorText.classList.remove(validationSettings.errorClass);
  }

  // Проверка массива инпутов на то, что все они прохотят валидацию или нет.
  function checkInputItems(popupInputs) {
    return popupInputs.some(input => {
      return !input.validity.valid;
    });
  }

  // Изменение состояния кнопки, в зависимости от валидности инпутов.
  function changeButtonStyle(popupInputs, popupBtn) {
    if (!checkInputItems(popupInputs)) {
      popupBtn.classList.remove(validationSettings.inactiveButtonClass);
      popupBtn.removeAttribute('disabled', 'disabled');
    } else {
      popupBtn.classList.add(validationSettings.inactiveButtonClass);
      popupBtn.setAttribute('disabled', 'disabled');
    }
  }
}
enableValidation(validationSettings);
