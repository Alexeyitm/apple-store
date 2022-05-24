import { buttonMenuHeader, buttonBurgerHeader, overlay } from "../../utils/constants.js";
import Menu from "../../components/Menu.js";
import Burger from "../../components/Burger.js";

const headerMenu = new Menu('.header__menu', 'header__menu_opened')
const burgerMenu = new Burger('.header__burger', 'header__burger_opened')

headerMenu.setEventListeners();
burgerMenu.setEventListeners();

buttonMenuHeader.addEventListener('click', () => {
  headerMenu.open();
});

buttonBurgerHeader.addEventListener('click', () => {
  burgerMenu.open();
});