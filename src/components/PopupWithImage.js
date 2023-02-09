import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupImages = this._popup.querySelector('.popup__image');
    this._popupTitleBigImg = this._popup.querySelector('.popup__title_bigImg');
  }

  open(name, link) {
    this._name = name;
    this._link = link;
    this._popupImages.src = this._link;
    this._popupImages.alt = this._name;
    this._popupTitleBigImg.textContent = this._name;

    super.open();
  }
}
