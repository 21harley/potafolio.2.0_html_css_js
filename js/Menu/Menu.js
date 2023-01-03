export default function menu(){
    const menu=document.querySelector("#menu-Button");
    const menuMovil=document.querySelector(".nav-ul-movil");
    
    menu.addEventListener("click",(e)=>{
        console.log("Hola");
       e.preventDefault();
       menuMovil.classList.toggle("active");
    })
    menuMovil.addEventListener("click",(e)=>{
        //e.preventDefault()
        if( e.target.matches(".nav-ul__a") ){
            document.querySelector("#menu-Button").click();
        }
    })
}

