
let cadena=["bi bi-bootstrap","bi bi-braces","bi bi-code-slash","bi bi-dribbble","bi bi-stack","bi bi-git","bi bi-github","bi bi-gem"];

function colorFecha(){

  let colorName=["--color-one","--color-two","--color-three","--color-four"];
  let colorVar=[null,null,null,null,null,null,null,null,null,["#000000","#ff7b00","#ffffff","#ff5e00"],null,["#000000","#cb3939","#ffffff","#368f0d"]];
  let today=new Date();
  let fechaEspecial=-1;

switch(today.getMonth()+1){
  case 10:fechaEspecial=9;break;
  case 12:fechaEspecial=11;break;
}

if(fechaEspecial!=-1) for(let i=0;i<4;i++) document.documentElement.style.setProperty(colorName[i], colorVar[fechaEspecial][i]);

}
let lenguajes_herramientas={
  bootstrap:"bootstrap.svg",
  csharp:"c--4.svg",
  cplusplus:"c.svg",
  c:"c-1.svg",
  css:"css-3.svg",
  duolingo:"duolingo.svg",
  html:"html.svg",
  java:"java.svg",
  javascript:"javascript.svg",
  js:"javascript.svg",
  jquery:"jquery.svg",
  laravel:"laravel.svg",
  git:"git.svg",
  logoJavascript:"logoJavascript.svg",
  mongodb:"mongodb.svg",
  mysql:"mysql.svg",
  node:"nodejs.svg",
  oracle:"oracle.svg",
  php:"php.svg",
  postgresql:"postgresql.svg",
  python:"python.svg",
  react:"react.svg",
  sass:"sass.svg",
  sololearn:"sololearn.svg",
  sqlite:"sqlite.svg",
  wordpress:"wordpress.svg",
  vue:"vue.svg"
}

colorFecha();
let prin=document.querySelector("#body-articul");
prin.innerHTML=`
<div class="cargar-animate">
  <div class="animate-load">
    <div class="boll-load"></div>
  </div>
  <h3>Loading...</h3>
</div>`;

fetch("https://api.github.com/users/21harley/repos?page=1&per_page=100")
  .then(response => response.json())
  .then(data =>{
    //ordenar por fecha
    data.sort((item,item1)=>{
      let aux=new Date(item["created_at"]);
      let aux1=new Date(item1["created_at"]);
      if(aux.getFullYear()==aux1.getFullYear()){
         if(aux.getMonth()==aux1.getMonth()){
           if(aux.getDate()<aux1.getDate()){
             return 1;
           }else{
             return -1;
           }
           return 0;
         }else if(aux.getMonth()<aux1.getMonth()){
           return 1;
         }else{
           return -1;
         }
      }else if(aux.getFullYear()<aux1.getFullYear()){
         return 1;
      }else{
        return -1;
      }
    });
    //console.log(data)
    let cadena="";
    for(let i=0;i<data.length;i++){
      if(data[i]["description"]!=null){
      let lista=data[i]["name"].toLowerCase().split(/[^A-Za-z]/);
      cadena+=`<div class="row"><div class="item_card col-10" ><div class="d-flex">`;
      
      for(let j=0;j<lista.length;j++){
        if(lenguajes_herramientas[lista[j]]!==undefined){
          cadena+=`<img src="assest/svg/${lenguajes_herramientas[lista[j]]}" class="card_img d-none d-sm-block " alt="...">`;
        }
      }
      for(let i=0;i<lista.length;i++){
        if(lista[i]!=""){
          lista[i]=lista[i].replace(lista[i][0],lista[i][0].toUpperCase());
        }
      }
      let aux1=new Date(data[i]["created_at"]);
      cadena+=`</div>`;
      cadena+=`<h6>${lista.join(" ")}  ${aux1.getDate()}/${aux1.getMonth()+1}/${aux1.getFullYear()}</h6>`;
      cadena+=`<p class="textC ">${data[i]["description"]}</p>`;
      cadena+=`<div class="flex" ><a target="_blank" href="${data[i]["html_url"]}"><button type="button" class="btn boton_pre">Ver codigo.</button></a>`;
      if(data[i]['homepage']){
        cadena+=`<a target="_blank" href="${data[i]['homepage']}"><button type="button" class="btn boton_pre">Ver paguina.</button></a>`;
      }
      cadena+=`</div>`
      cadena+=`</div"></div></div>`;
      }

    }
       
    let principal=document.querySelector("#body-articul");
    principal.innerHTML=cadena;
  });

  var boton = document.querySelector("#copiador");
  boton.addEventListener("click", copiarAlPortapapeles, false);

  var boton = document.querySelector("#copiador1");
  boton.addEventListener("click", copiarAlPortapapeles, false);

  function copiarAlPortapapeles() {
    
    var inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", "john.llanes.1996@gmail.com");
  
    document.body.appendChild(inputFalso);
  
    inputFalso.select();
  
    document.execCommand("copy");
  
    document.body.removeChild(inputFalso);
    alert("Se ha copiado el correo");
  }
  

  setInterval(()=>{
    let item=document.querySelector("#icon_center");
    item.className="";
     item.className=cadena[Math.floor(Math.random()*(cadena.length-1))];
    item.className+=" icon-center";
  },5000);

  