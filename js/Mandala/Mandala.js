function generateHTML(character, pos, isAlternate, radius, inputClass) {
  const directions = [[1, 1], [-1, -1], [-1, 1], [1, -1]];
  const anglesA = [180, 360, 180, 0];
  const anglesB = [180, 360, 0, 180];
  const angleMultiplier = [-1, -1, 1, 1];

  let x = directions[pos][0];
  let y = directions[pos][1];
  let startAngle = isAlternate ? anglesA[pos] : anglesB[pos];
  let angleFactor = angleMultiplier[pos];

  let circleProps = {
      angleIncrement: 360 / character.length,
      radiusIncrement: radius / character.length
  };

  let fragment = document.createDocumentFragment();

  for (let i = 0, angle = startAngle; i < character.length; i++, angle += circleProps.angleIncrement) {
      const radians = angle * (Math.PI / 180);
      const valueX = radius * Math.cos(radians);
      const valueY = radius * Math.sin(radians);

      let p = document.createElement('p');
      p.textContent = character[i];
      p.style.transform = `translate3d(${valueX}px, ${valueY}px, 0px) rotate(${angle + 90}deg)`;
      p.classList.add('colorItem', `cInput${inputClass}`);
      fragment.appendChild(p);
  }

  return { type: true, fragment: fragment, tag: '' };
}

export default function createMandala() {
  const container = document.querySelector(".containerTitleA");

  const patterns = [
      '{{ {{ << {{ }} >> }} }} {{ {{ << {{ }} >> }} }}',
      ' + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +',
      '/////////////////////////////////////////////////////////////////////'
  ];
  const radii = [110, 150, 190];

  patterns.forEach((pattern, index) => {
      for (let i = 0; i < 4; i++) {
          const result = generateHTML(pattern, i, false, radii[index], "header");
          container.append(result.fragment);
      }
  });
}

/*
  export default function createMandala(){
      //para el titulo
  const A=document.querySelector(".containerTitleA");
  for(let i=0;i<4;i++){
    const rep=genertionHTML('{{ {{ << {{ }} >> }} }}',i,false,110,"header");
    A.append(rep.rep);
  }
  for(let i=0;i<4;i++){
    const rep=genertionHTML(' + + + + + + + + + + + + + + + ',i,false,150,"header");
    A.append(rep.rep);
  }
  for(let i=0;i<4;i++){
    const rep=genertionHTML('///////////////////////',i,false,190,"header");
    A.append(rep.rep);
  }
  /*
  setInterval(()=>{
    const lista=document.querySelectorAll(".colorItem");
    let aux=Math.floor(Math.random()*(lista.length-1));
    if(!lista[aux].classList.contains("active-mand")){
       lista[aux].classList.add("active-mand");
    }
  },10);*/
  /*
  setInterval(()=>{
    const pageWidth  = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;
    console.log(pageWidth,pageHeight);
  },100)
  */
  /*
  const B=document.querySelector(".containerTitleB");
  for(let i=0;i<4;i++){
    const rep=genertionHTML('¿? ¿?',i,true,170);
    B.append(rep.rep);
  }
  
  }
  */
