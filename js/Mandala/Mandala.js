function genertionHTML(character,pos,ban,radio,inputs){
    const auxArry=[[1,1],[-1,-1],[-1,1],[1,-1]];
    const angulosA=[180,360,180,0];
    const ar=[-1,-1,1,1];
    const angulosB=[180,360,0,180];
    let x=1*auxArry[pos][0];
    let y=1*auxArry[pos][1];
    let cuadrante=(ban)?angulosA[pos]:angulosB[pos];
    let arg=ar[pos];
  
      let circle={
        gra:90/character.length,
        int:radio/character.length
      }
      let framen=document.createDocumentFragment();
      let valoresX=[],valoresY=[];
      for(let i=0,grados=circle.gra;i<character.length;i++,grados+=circle.gra){
        const valueY=Math.abs(Math.cos(grados)*radio);
        const valueX=Math.abs(Math.sin(grados)*radio);
        valoresX.push(valueX);
        valoresY.push(valueY);
      }
      valoresY=valoresY.sort((a,b)=>a - b)
      valoresX=(valoresX.sort((a,b)=>a - b)).reverse();
      for(let i=0,interval=circle.int,grados=cuadrante;
              i<character.length;
              i++,interval+=circle.int,grados+=circle.gra){
              
        const valueY=valoresY[i];
        const valueX=valoresX[i];
        const p=document.createElement('p');
        p.textContent=character[i];
        p.style.transform='translate3d('+(valueX*(x))+'px, '+(valueY*(y))+'px ,'+0+'px) rotate('+(90*arg-grados*arg)+'deg)';
        p.classList.add('colorItem'); 
        p.classList.add(`cInput${inputs}`);
        framen.appendChild(p);
      }  
      return {type:true,rep:framen,tag:''}
  }
  
  
  export default function createMandala(){
      //para el titulo
  const A=document.querySelector(".containerTitleA");
  for(let i=0;i<4;i++){
    const rep=genertionHTML('{{ {{ << {{ }} >> }} }}',i,false,150);
    A.append(rep.rep);
  }
  /*
  const B=document.querySelector(".containerTitleB");
  for(let i=0;i<4;i++){
    const rep=genertionHTML('¿? ¿?',i,true,170);
    B.append(rep.rep);
  }
  */
  }
