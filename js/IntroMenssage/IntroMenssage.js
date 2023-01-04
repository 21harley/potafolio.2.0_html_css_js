export default function IntroMenssage(){
    let data=["F","u","l","l"," ","s","t","a","c","k"," ","D","e","v","e","l","p","e","r"];
    let cursor=5;
    let iterador=0;
    const total=data.length;
    let tecleado=setInterval(()=>{
       let item=document.querySelector("#title");
       
       let aux=item.innerHTML.split('');

       aux[cursor]=data[iterador];

       item.innerHTML=aux.join("");

       cursor+=1; iterador+=1;

       if(iterador==total){
        clearInterval(tecleado);
        item.innerHTML+=`<span class="cursor-class">_</span>`;
       };
    },70,total);
}