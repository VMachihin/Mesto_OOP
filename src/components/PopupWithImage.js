import Popup from "./Popup.js";

import { popupImages, popupTitleBigImg } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(selector, name, link) {
    super(selector);
    this._name = name;
    this._link = link;
  }

  open() {
    popupImages.src = this._link;
    popupImages.alt = this._name;
    popupTitleBigImg.textContent = this._name;

    super.open();
  }
}