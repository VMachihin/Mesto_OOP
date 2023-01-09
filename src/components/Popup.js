import { popups } from '../utils/constants.js';

export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._buttonKey = 'Escape';
  }

  open() {
    this._selector.classList.add('popup_opened');

    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  close() {
    this._selector.classList.remove('popup_opened');

    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === this._buttonKey) {
      this.close();
    }
  }

  setEventListeners() {
    popups.forEach(popup => {
      popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
          this.close();
        }
      });
    });
  }
}

