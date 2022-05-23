import { overlay } from "../utils/constants.js";

export default class HeaderMenu {
  constructor(menuSelector) {
    this._menuSelector = menuSelector;
    this._menu = document.querySelector(this._menuSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._menu.classList.add('opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._menu.classList.remove("opened");
    document.removeEventListener('keydown', this._handleEscClose);
    overlay.classList.remove('overlay_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  setEventListeners() {
    overlay.addEventListener('click', (evt) => {
        this.close();
    }); 
  }
}