import { overlay } from "../utils/constants.js";

export default class Menu {
  constructor(menuSelector, openSelector) {
    this._menuSelector = menuSelector;
    this._openSelector = openSelector;
    this._menu = document.querySelector(this._menuSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    overlay.classList.add('overlay_opened');

    if (!this._menu.classList.contains(this._openSelector)) {
      this._menu.classList.add(this._openSelector);
    } 
    else {
      this.close();
    }
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    overlay.classList.remove('overlay_opened');
    
    this._menu.classList.remove(this._openSelector);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  setEventListeners() {
    overlay.addEventListener('click', () => {
      this.close();
    });
  }
}