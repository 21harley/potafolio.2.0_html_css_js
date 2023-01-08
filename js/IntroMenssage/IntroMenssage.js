
function relojClearMessage(total){
    let cursor=5;
    let iterador=0;
    let tecleado2=setInterval(()=>{
        let item=document.querySelector("#title");
        
        let aux=item.innerHTML.split('');

        aux[cursor]='_';
 
        item.innerHTML=aux.join("");
 
        cursor+=1; iterador+=1;
 
        if(iterador==total){
         clearInterval(tecleado2);
        };
     },70,total);
}

function relojMenssage(data){
    let iterador=0;
    let cursor=5;
    const total=data.length;
    let tecleado=setInterval(()=>{
       let item=document.querySelector("#title");
       
       let aux=item.innerHTML.split('');

       aux[cursor]=data[iterador];

       item.innerHTML=aux.join("");

       cursor+=1; iterador+=1;

       if(iterador==total){
        clearInterval(tecleado);
       };
    },70,total);
}

export default function IntroMenssage(){
    let data=[["F","u","l","l"," ","s","t","a","c","k"," ","D","e","v","e","l","p","e","r"],
    ["F","r","o","n","t","e","n","d"," ","W","e","b"," ","D","e","v","e","l","o","p","e","r"]];

    let tiem=data[0].length*70*2;
    let total=data[0].length;
    let iterador=0;
    let tecleado=setTimeout(()=>{
        let numero=0;
        if(iterador!=0) numero=Math.floor(Math.random() * 2);
        relojMenssage(data[numero]);
        iterador++;
    },0,total,data[0]);
}