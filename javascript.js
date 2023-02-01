

document.getElementById('boton').addEventListener('click', function () {
    
    document.getElementById('interes').innerHTML = "Leer | Jugar Videojuegos | Hacer Deporte | Cantar";
 })

 document.getElementById('boton-cursos').addEventListener('click', function () {
  
    document.getElementById('cursos').innerHTML = "2020 - Manejo y Diseño de Bases de Datos", "2021 - Ingles";
 })

 document.getElementById('boton-ref').addEventListener('click', function () {
 
    document.getElementById('referencias').innerHTML = "Julio Gabron |   Cargo: Senior |   Empresa: Google |   juiliogabron43@gmail.com"  ;
 })

 
 window.onload = function () {


    elemH = document.getElementsByClassName('c');

    for (var i = 0; i < elemH.length; i++) {
        elemH[i].onmouseover = function () {return this.style.fontSize = '1.5em'}
        elemH[i].onmouseout = function() {return this.style.fontSize = '1em'}
    }
}

