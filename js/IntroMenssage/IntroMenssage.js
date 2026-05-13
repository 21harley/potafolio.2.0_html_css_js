function relojClearMessage(){
    let item=document.querySelector("#title");
    let currentText = item.innerHTML;
    let total = currentText.length - 5; // Restar los 5 caracteres iniciales "Hola "
    let cursor=5;
    let iterador=0;
    let tecleado2=setInterval(()=>{
        let aux=item.innerHTML.split('');

        if(cursor ) {
            aux[cursor]=' ';
        }
 
        item.innerHTML=aux.join("");
 
        cursor+=1; iterador+=1;
 
        if(iterador>=total){
         clearInterval(tecleado2);
        };
     },70);
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
    let data=[
        ["F","u","l","l"," ","s","t","a","c","k"," ","D","e","v","e","l","o","p","e","r"],
        ["F","r","o","n","t","e","n","d"," ","W","e","b"," ","D","e","v","e","l","o","p","e","r"],
        ["B","a","c","k","e","n","d"," ","D","e","v","e","l","o","p","e","r"],
        ["S","o","f","t","w","a","r","e"," ","E","n","g","i","n","e","e","r"]
    ];
    let currentIndex = 0;
    
    function cycleWords() {
        let total = data[currentIndex].length;
        
        // Primero borra la palabra actual
        relojClearMessage();
        
        // Luego escribe la nueva palabra después de un breve delay
        setTimeout(() => {
            relojMenssage(data[currentIndex]);
            
            // Prepara el siguiente ciclo
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % data.length;
                cycleWords();
            }, total * 70 + 1000); // Espera a que termine de escribir y un segundo extra
        }, total * 70);
    }
    
    // Inicia el ciclo
    cycleWords();
}