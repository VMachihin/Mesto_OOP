import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selector, name, link) {
    super(selector);
    this._name = name;
    this._link = link;
    this._popupImages = selector.querySelector('.popup__image');
    this._popupTitleBigImg = selector.querySelector('.popup__title_bigImg');
  }

  open() {
    this._popupImages.src = this._link;
    this._popupImages.alt = this._name;
    this._popupTitleBigImg.textContent = this._name;

    super.open();
  }
}
