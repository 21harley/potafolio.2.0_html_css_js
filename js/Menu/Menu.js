
export default function menu(){
    const menu=document.querySelector("#menu-Button");
    const menuMovil=document.querySelector(".nav-ul-movil");
    
    menu.addEventListener("click",(e)=>{
        console.log("Hola");
       e.preventDefault();
       menuMovil.classList.toggle("active");
       if(menuMovil.classList.contains("active")){
        menu.innerHTML=`<svg viewBox="0 0 48 48" fill="black" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"> <title>close</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M26.8,24,37.4,13.5a2.1,2.1,0,0,0,.2-2.7,1.9,1.9,0,0,0-3-.2L24,21.2,13.4,10.6a1.9,1.9,0,0,0-3,.2,2.1,2.1,0,0,0,.2,2.7L21.2,24,10.6,34.5a2.1,2.1,0,0,0-.2,2.7,1.9,1.9,0,0,0,3,.2L24,26.8,34.6,37.4a1.9,1.9,0,0,0,3-.2,2.1,2.1,0,0,0-.2-2.7Z"></path> </g> </g> </g></svg>`;
       }else{
        menu.innerHTML=`<svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_iconCarrier"><path d="M6 8H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M6 16H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg>`;
       }
    })
    menuMovil.addEventListener("click",(e)=>{
        //e.preventDefault()
        if( e.target.matches(".nav-ul__a") ){
            document.querySelector("#menu-Button").click();
        }
    })
}

