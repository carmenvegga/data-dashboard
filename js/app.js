//var sede = Object.keys(data);
//console.log(sede);
//var generation = Object.keys(sede[]); //va dentro de la función [i]
//var sedeLength = sede.length;
//var generationLength = generation.length;
//console.log(generationLength)
/*
var totalStudentsBySede= function(){
  for (var i= 0; i<=sedeLength; i++){
  //  for (var j= 0; j<=generationLength; i++);
  }
}
*/

var mapSedes = function(data) {
  var sedeList = Object.keys(data);
  var selectSedes = document.getElementById('sedes');

  for (var i = 0; i < sedeList.length; i++) {

//En este caso se agregó manualmente el nombre de las sedes, al no tener un identificador dentro de data
    var nameSede;
    if (sedeList[i] === 'AQP') {
      nameSede = 'Arequipa';
    }
    else if (sedeList[i] === 'CDMX') {
      nameSede = 'Ciudad de México';
    }
    else if (sedeList[i] === 'LIM') {
      nameSede = 'Lima';
    }
    else if (sedeList[i] === 'SCL') {
      nameSede = 'Santiago de Chile';
    }
    else {
      nameSede = sedeList[i];
    }

//Creando las opciones del Select y agregándolas al DOM
    var optionSede = document.createElement('option');
    optionSede.setAttribute('value',sedeList[i]);
    optionSede.innerText= nameSede;
    selectSedes.appendChild(optionSede);
  }
}
mapSedes(data);

//Creando función del evento Click a la opción
var sedes = document.getElementById('sedes');

var onButtonClick = function(){
//Condicional para borrar el select cada vez que suceda el evento
//Porque se creaba un select generacion por cada click
  var selectAvailable = document.getElementById('generation');
  if (selectAvailable !== null){
    selectAvailable.remove();
  }

  var valueSede = document.getElementById('sedes');
  //console.log(valueSede.value);
  //accesando al objeto(key) seleccionado en el select
  var generation = data[valueSede.value];
  //console.log(generation);
//agregando con este evento las opciones de generacion

mapGeneration(generation);
}
sedes.addEventListener('click', onButtonClick);

//Creando funcion para generaciones

var mapGeneration = function(data) {
  var generationList = Object.keys(data);
  var selectGeneration = document.createElement('select');
  selectGeneration.setAttribute('id','generation');

//llamando al div que contendrá el segundo select, para poder agregar un appendChild
var containerSelect = document.getElementById('container-select');
//Agregando la primera opcion vacía de generaciones, afuera del for
var optionDefault = document.createElement('option');
optionDefault.setAttribute('value', 'null');
optionDefault.innerText= 'Generación';
selectGeneration.appendChild(optionDefault);

  for (var i = 0; i < generationList.length; i++) {
//Creando las opciones del Select y agregándolas al DOM
    var optionGeneration = document.createElement('option');
    optionGeneration.setAttribute('value',generationList[i]);
    optionGeneration.innerText= generationList[i];
    selectGeneration.appendChild(optionGeneration);
  }
containerSelect.appendChild(selectGeneration);
}
