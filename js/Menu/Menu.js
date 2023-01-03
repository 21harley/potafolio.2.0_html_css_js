
export default function menu(){
    const menu=document.querySelector("#menu-Button");
    const menuMovil=document.querySelector(".nav-ul-movil");
    
    menu.addEventListener("click",(e)=>{
        console.log("Hola");
       e.preventDefault();
       menuMovil.classList.toggle("active");
       if(menuMovil.classList.contains("active")){
        menu.innerHTML="Cerrar";
       }else{
        menu.innerHTML="Menu";
       }
    })
    menuMovil.addEventListener("click",(e)=>{
        //e.preventDefault()
        if( e.target.matches(".nav-ul__a") ){
            document.querySelector("#menu-Button").click();
        }
    })
}

