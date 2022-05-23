import { buttonBurgerHeader } from "../utils/constants.js";
import Menu from "./Menu.js";

export default class Burger extends Menu  {
  constructor(menuSelector, openSelector) {
    super(menuSelector, openSelector);
  }

  open() {
    super.open();
    //buttonBurgerHeader.addEventListener('click', () => {
    //  this.close();
    //});   
  }

  close() {
    super.close();
    //buttonBurgerHeader.removeEventListener('click', () => {
    //  this.close();
    //}); 
  }
}