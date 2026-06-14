import { $, on } from '../utils/dom.js';
import { ICON_MENU_CLOSE, ICON_MENU_HAMBURGER } from '../utils/icons.js';

export default function menu(){
    const menu=$("#menu-Button");
    const menuMovil=$(".nav-ul-movil");
    
    on(menu,"click",(e)=>{
        console.log("Hola");
       e.preventDefault();
       menuMovil.classList.toggle("active");
       if(menuMovil.classList.contains("active")){
        menu.innerHTML=ICON_MENU_CLOSE;
       }else{
        menu.innerHTML=ICON_MENU_HAMBURGER;
       }
    })
    on(menuMovil,"click",(e)=>{
        //e.preventDefault()
        if( e.target.matches(".nav-ul__a") ){
            $("#menu-Button").click();
        }
    })
}
