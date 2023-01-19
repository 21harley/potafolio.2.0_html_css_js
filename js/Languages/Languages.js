import languages from "./ListLangues.js";


export function LanguagesChange(langV){
    const seletIdioma=document.querySelectorAll(".idioma");
    const menuMovil=document.querySelector(".nav-ul-movil");
     seletIdioma.forEach((el)=>{
        el.addEventListener("change",(e)=>{
            let lang=e.target.value;
            langV=lang;
            Languages(lang);
            if(menuMovil.classList.contains("active")){
                document.querySelector("#menu-Button").click();
            }
            const cv=document.querySelector(".link-cv-download");
           //cv.href='assect/CV_John_Llanes_'+lang+".pdf";
           cv.setAttribute('href','./assect/CV/CV_John_Llanes_'+lang+".pdf");
           cv.setAttribute('download','CV_John_Llanes_'+lang+".pdf");
            console.log(langV,cv);
        })
     })
 
}
export function Languages(lang){
    let listaItem=document.querySelectorAll(".lang");
    for(let i=0;i<listaItem.length;i++){
        listaItem[i].innerHTML=languages[lang].text[ parseInt(listaItem[i].getAttribute("lang"))-1];
    }
}