/*post de comentario*/
function add() {
  // Tomar el valor y almacenarlo en una variable que contenga esa valor
  // para tomar elmento me voy al index, agarro el valor y lo almaceno ..
  // la logica es que tomamos el valor y lo almacenamos para poder mostrarlo en otra parte
  var comments = document.getElementById("comment").value;
  // Para limpiar : tomo el elemento y lo igualo a un espacio vacío pidiendo que limpie el contenedor
  document.getElementById("comment").value = "";
  var newComments = document.createElement('div');//ahora crearé un espacio para almacenar y mostrar los datos que tomé
  var cont = document.getElementById('cont');//ahora llamaré
  
 var paragraph = document.createElement ('p'); //Crao caja de texto para mostrar el contenido que rescate con anterioridad.
  paragraph.classList.add('color');
  var nodoText = document.createTextNode(comments)//crearemos nodo de texto, y le indicamos que es hijo de p
  paragraph.appendChild(nodoText);

 var heart = document.createElement ('i');//Creo elemento iconico (corazón)
  heart.classList.add ('fa', 'fa-tag', 'heart',);
  
 var trash = document.createElement ('i');//Creo elemento iconico (tag)
  trash.classList.add ('fa', 'fa-trash', 'trash',);
  
 var cDiv = document.createElement('div');
 cDiv.className="card"
 //newComments adopta a todos los elementos quee estan flotando
  cDiv.appendChild(paragraph);
  cDiv.appendChild(heart);
  cDiv.appendChild(trash);
  
 cont.appendChild(cDiv);

 check.addEventListener('click', function() {
    paragraph.classList.toggle('strike-out');
  })

 trash.addEventListener('click', function() {
    cont.removeChild(cDiv);//Remueve el contenido del contenedor
  })

 heart.addEventListener('click', function() {
    heart.classList.toggle('red');//corazoncito rojo
  })


 }