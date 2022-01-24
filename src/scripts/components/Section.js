export default class Section {
  /**
   * Draw incoming elements on page.
   * It receives the markup via a callback function and inserts it into the container.
   * 
   * @constructor
   * @param  {array} items - elements to be rendered.
   * @param  {object} renderer - callback function for creating and drawing elements on page.
   * @param  {string} containerSelector - html-container to put in items.
   */
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  /**
   * @param  {object} element - element to be added in container = on the page
   */
  addItem(element) {
    this._container.prepend(element);
  }

  /** Draw all elements on page by callback func. */
  renderItems() {
    this._renderedItems.forEach(item => this._renderer(item));
  }
}