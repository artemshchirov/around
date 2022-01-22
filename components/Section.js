export default class Section {
    /**
     * Draw incoming elements on page.
     * It receives the markup via a callback function and inserts it into the container.
     *
     * @constructor
     * @this   {Section}
     * @param  {array} items - elements to be rendered.
     * @param  {function} renderer - callback func for creating and drawing elements on page.
     * @param  {string} containerSelector - html-container to put in items.
     */
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    /**
     * @param  {string} element - markup to be added in container 
     */
    addItem(element) {
        this._container.append(element);
    }

    /** Delete all drawn elements on the page. */
    clear() {
        this._container.innerHTML = '';
    }

    /** Draw all elements on page by call-back. */
    renderItems() {
        this.clear();
        this._renderedItems.forEach(item => this._renderer(item));
    }
}