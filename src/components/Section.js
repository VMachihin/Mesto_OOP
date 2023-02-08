export default class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  addItem(myId, item) {
    const card = this._renderer(item, myId)
    this._container.prepend(card);
  }

  // Проход по массиву данных и отрисовка всех карточек
  renderCards(myId, cards) {
    cards.forEach(item => {
      const card = this._renderer(item, myId)
      this._container.append(card);
    });
  }
}
