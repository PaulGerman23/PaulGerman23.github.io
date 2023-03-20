

document.getElementById('boton1').addEventListener('click', function () {
   
   document.getElementById('interes').style.display = 'block'  ;

 })

 document.getElementById('boton-cursos').addEventListener('click', function () {
  
    document.getElementById('cursos').innerHTML = "2014/2018 - Idioma Ingles | 2020 - Manejo y Diseño de Bases de Datos ";
    
 })

 document.getElementById('boton-ref').addEventListener('click', function () {
 
    document.getElementById('referencias').innerHTML = "Julio Gabrón | Cargo: SeniorDeveloper | Empresa: Google | juiliogabron43@gmail.com"  ;
 })

    elemH = document.getElementsByClassName('c');

    for (var i = 0; i < elemH.length; i++) {
        elemH[i].onmouseover = function () {return this.style.fontSize = '1.1em'}
        elemH[i].onmouseout = function() {return this.style.fontSize = '1em'}
    }

   elemI = document.getElementsByClassName('imagen');

   for (var i = 0; i < elemI.length; i++) {
       elemI[i].onmouseover = function () {return this.style.width = '250px', this.style.height = '250px'}
       elemI[i].onmouseout = function() {return this.style.height = '200px', this.style.width = '200px'}
   }


