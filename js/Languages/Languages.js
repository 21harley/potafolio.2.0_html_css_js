import { $, $$ } from '../utils/dom.js';
import languages from './ListLangues.js';

export function LanguagesChange(){
    const seletIdioma=$$('.idioma');
    const menuMovil=$('.nav-ul-movil');
     seletIdioma.forEach((el)=>{
        el.addEventListener('change',(e)=>{
            let lang=e.target.value;
            Languages(lang);
            if(menuMovil.classList.contains('active')){
                $('#menu-Button').click();
            }
            const cv=$('.link-cv-download');

           cv.setAttribute('href','./assect/CV/CV_John_Llanes_'+lang+'.pdf');
           cv.setAttribute('download','CV_John_Llanes_'+lang+'.pdf');
        })
     })
     $('.button-color').click();
}
export function Languages(lang){
    let listaItem=$$('.lang');
    for(let i=0;i<listaItem.length;i++){
        listaItem[i].innerHTML=languages[lang].text[ parseInt(listaItem[i].getAttribute('lang'))-1];
    }
}
