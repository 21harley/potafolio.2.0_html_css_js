import Menu from "./Menu/Menu.js";
import {Languages,LanguagesChange} from "./Languages/Languages.js";
import Color from "./Color/Color.js";
import IntroMenssage from "./IntroMenssage/IntroMenssage.js";
import createMandala from "./Mandala/Mandala.js";

let lang="";
const d=document;
/*DOMContentLoaded es la primera carga del documento
mas rapido que load */

d.addEventListener("DOMContentLoaded",(e)=>{
    Color();
    document.querySelector(".button-color").click();
    Languages("english");
    LanguagesChange(lang);
    Menu();
    IntroMenssage();
    createMandala();
})
const listaIdioma=document.querySelectorAll(".idioma");
console.log(listaIdioma);

