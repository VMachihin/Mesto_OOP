export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonKey = 'Escape';
    this._handleEscClose = this._handleEscClose.bind(this); /* вручную привязываем функцию к this,
    что бы корректно добавлялся и удалялся обработчик */
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === this._buttonKey) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', evt => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }
}
