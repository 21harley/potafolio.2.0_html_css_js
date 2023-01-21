import Menu from './Menu/Menu.js';
import {LanguagesChange} from './Languages/Languages.js';
import Color from './Color/Color.js';
import IntroMenssage from './IntroMenssage/IntroMenssage.js';
import createMandala from './Mandala/Mandala.js';
import { FilterProyects } from './FilterProyects/FilterProyects.js';

const d=document;
/*DOMContentLoaded es la primera carga del documento
mas rapido que load */

d.addEventListener('DOMContentLoaded',(e)=>{
    Color();
    LanguagesChange();
    Menu();
    IntroMenssage();
    createMandala();
    FilterProyects();
});

