import languages from "./ListLangues.js";


export function LanguagesChange(langV){
    const seletIdioma=document.querySelectorAll(".idioma");
  
     seletIdioma.forEach((el)=>{
        el.addEventListener("change",(e)=>{
            let lang=e.target.value;
            langV=lang;
            Languages(lang);
            document.querySelector("#menu-Button").click();
            console.log(langV);
        })
     })
 
}
export function Languages(lang){
    let listaItem=document.querySelectorAll(".lang");
    for(let i=0;i<listaItem.length;i++){
        listaItem[i].innerHTML=languages[lang].text[ parseInt(listaItem[i].getAttribute("lang"))-1];
    }
}