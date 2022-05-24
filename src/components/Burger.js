import { buttonBurgerHeader } from "../utils/constants.js";
import Menu from "./Menu.js";

export default class Burger extends Menu  {
  constructor(menuSelector, openSelector) {
    super(menuSelector, openSelector);
  }

  setEventListeners() {
    super.setEventListeners();
    buttonBurgerHeader.addEventListener('click', () => {
      buttonBurgerHeader.classList.toggle('header__burger-button_opened');
    });
  }
}