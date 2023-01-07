export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._items = data;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  // Проход по массиву данных и отрисовка всех карточек
  renderCards() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  // Добавление карточки в DOM
  addItem(element) {
    this._containerSelector.prepend(element);
  }
}