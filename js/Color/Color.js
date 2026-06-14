import { $, on, setCSSVar } from '../utils/dom.js';
import { ICON_MOON_BLACK, ICON_SUN } from '../utils/icons.js';

let colorName=["--color-background-cero","--color-background-one","--color-background-two","--color-background-three","--color-background-four","--color-background-five"];
let colorVar=[["#0d1117","#161b22","#21262d","#f0f6fc","#8b949e","#30363d"],
["#ffffff","#f6f8fa","#f6f8fa","#24292f","#586069","#d0d7de"]];

function applyColorScheme(schemeIndex) {
   for(let i=0;i<6;i++) setCSSVar(colorName[i], colorVar[schemeIndex][i]);
}

export default function Color(){
   const color=$(".button-color");
   on(color,"click",(e)=>{
     if(color.classList.contains("active-color-menu")){
      applyColorScheme(1);
      color.innerHTML=ICON_MOON_BLACK;
     }else{
      applyColorScheme(0);
      color.innerHTML=ICON_SUN;
     }
     color.classList.toggle("active-color-menu");
     color.classList.toggle("active-b-c");
   });
}
