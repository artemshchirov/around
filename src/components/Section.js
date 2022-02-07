export default class Section {
  /**
   * Draw incoming elements on page.
   * It receives the markup via a callback function and insert it into the container.
   * 
   * @constructor
   * @param  {object} renderer - callback function for creating and drawing elements on page.
   * @param  {string} containerSelector - html-container to put in items.
   */
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  /**
   * @param  {object} element - element to be added in container == on the page
   */
  addItem(element, first=false) {
    if (!first) {
      this._container.append(element) 
    } else {
      this._container.prepend(element);
    }
  }

  /** Draw all elements on page by callback func. */
  renderItems(items) {
    items.forEach(item => this._renderer(item));
  }
}