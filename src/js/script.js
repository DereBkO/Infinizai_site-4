import * as flsFunctions from "./modules/functions.js";
import * as Burger from "./modules/main.js";
import * as Menu from "./modules/main.js";
import * as MenuLinks from "./modules/main.js";

flsFunctions.isWebp();
Burger.menuBurger();
Menu.menu();
MenuLinks.menuLinks();

// Custom script
/* @@include("./modules/main.js") */

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();