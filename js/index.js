import Menu from "./Menu/Menu.js";
import {Languages,LanguagesChange} from "./Languages/Languages.js";
let lang="";
const d=document;
/*DOMContentLoaded es la primera carga del documento
mas rapido que load */
d.addEventListener("DOMContentLoaded",(e)=>{
    Languages("english");
    LanguagesChange(lang);
    Menu();
})
const listaIdioma=document.querySelectorAll(".idioma");
console.log(listaIdioma);

