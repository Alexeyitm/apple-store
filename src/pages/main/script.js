import { buttonMenuHeader, buttonBurgerHeader, overlay } from "../../utils/constants.js";
import HeaderMenu from "../../components/HeaderMenu.js";

const headerMenu = new HeaderMenu('.header__menu')

headerMenu.setEventListeners();

buttonMenuHeader.addEventListener('click', () => {
  headerMenu.open();
  overlay.classList.add('overlay_opened');
});