export default class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  // Проход по массиву данных и отрисовка всех карточек
  renderCards(myId, cards) {
    cards.forEach(item => {
      const card = this._renderer(item, myId)
      this._container.prepend(card);
    });
  }
}
