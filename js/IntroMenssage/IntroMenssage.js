
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
    let data=[["F","u","l","l"," ","s","t","a","c","k"," ","D","e","v","e","l","o","p","e","r"],
    ["F","r","o","n","t","e","n","d"," ","W","e","b"," ","D","e","v","e","l","o","p","e","r"],
    ["B","a","c","k","e","n","d"," ","D","e","v","e","l","o","p","e","r"]];
    let numero=Math.floor(Math.random() * 3)
    let total=data[numero].length;
    let tecleado=setTimeout(()=>{
        relojMenssage(data[numero]);
    },0,total,data[numero],numero);
}