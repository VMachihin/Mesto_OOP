import { popups } from '../utils/constants.js';

export default class Popup {
  constructor(selector) {
    this._selector = selector;
  }

  open() {
    this._selector.classList.add('popup_opened');
  }

  close() {
    this._selector.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    popups.forEach(popup => {
      popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
          this.close();
        }
        if (evt.target.classList.contains('popup__close')) {
          this.close();
        }
      });
    });

    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  }
}

