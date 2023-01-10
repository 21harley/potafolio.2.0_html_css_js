export function FilterProyects(){
    const list=document.querySelectorAll(".button-filter");
    list.forEach((el)=>{
      el.addEventListener("click",(e)=>{
        e.preventDefault();
        const list1=document.querySelector(".active-button-filter");
        list1.classList.remove("active-button-filter");
        e.target.classList.add("active-button-filter");
        const list2=document.querySelectorAll(".card-proyect");
        const ban=e.target.getAttribute("filter");
        //console.log(ban);
        list2.forEach((el)=>{
           if(ban=="All-items"){
             if(el.classList.contains('inactive-proyect')) el.classList.remove("inactive-proyect");
           }else{
              if(el.getAttribute("filter")!=ban){
                if(!el.classList.contains('inactive-proyect')) el.classList.add("inactive-proyect");
              }else{
                if(el.classList.contains('inactive-proyect')) el.classList.remove("inactive-proyect");
              }
           } 

        });
      })
    });
}
