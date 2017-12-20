/*LLAMANDO AL CONTENEDOR*/
var container = document.getElementById('container');
//llamando a contenedor del menú
var menu = document.getElementById('menu');

/*CREANDO ELEMENTOS*/

//barra de navegción
var navBar = document.createElement('header');
var logoSection = document.createElement('div');
var userSection = document.createElement('div');
var logo = document.createElement('img');
//elementos de botones
var buttonLogOut = document.createElement('a');
var buttonSettings = document.createElement('a');
var settingsIcon = document.createElement('i');
//main
var mainSide = document.createElement('section');
var mainBody = document.createElement('section');
//barra de opciones(select)
var sideContainer = document.createElement('section');
//seccion enrollment
var firstSection = document.createElement('section');
var enrollment = document.createElement('div');
var enrollmentTitle = document.createElement('h3');
var enrollmentRule = document.createElement('div');
var enrollmentContainerOne = document.createElement('div');
var enrollmentContainerTwo = document.createElement('div');
var enrollmentDescriptionOne = document.createElement('p');
var enrollmentDescriptionTwo = document.createElement('p');
//sección achievement
var achievement = document.createElement('div');
var achievementTitle = document.createElement('h3');
var achievementRule = document.createElement('div');
var achievementContainerOne = document.createElement('div');
var achievementContainerTwo = document.createElement('div');
var achievementDescriptionOne = document.createElement('p');
var achievementDescriptionTwo = document.createElement('p');
//sección nps
var nps = document.createElement('div');
var npsTitle = document.createElement('h3');
var npsRule = document.createElement('div');
var npsContainerOne = document.createElement('div');
var npsDescriptionOne = document.createElement('p');

//sección skills
var secondSection = document.createElement('section');
var skills = document.createElement('div');
var skillsTech = document.createElement('h3');
var skillsBySprint1 = document.createElement('div');
var skillsLife = document.createElement('h3');
var skillsBySprint2 = document.createElement('div');
var skillsTwo = document.createElement('div');
var skillsContainerOne = document.createElement('div');
var skillsTechText= document.createElement('p');
var skillsContainerTwo = document.createElement('div');
var skillsContainerThree = document.createElement('div');
var skillsHseText= document.createElement('p');
var skillsContainerFour = document.createElement('div');
var skillsRuler = document.createElement('div');
//sección students satisfaction
var thirdSection = document.createElement('section');
var satisfaction = document.createElement('div');
var satisfactionTitle = document.createElement('h3');
var satisfactionRule = document.createElement('div');
var satisfactionContainerOne = document.createElement('div');
var satisfactionDescriptionOne = document.createElement('p');
//sección teacher ratings
var teacher = document.createElement('div');
var teacherTitle = document.createElement('h3');
var teacherRule = document.createElement('div');
var teacherContainerOne = document.createElement('div');
var teacherDescriptionOne = document.createElement('p');
//seccióm jedi ratings
var jedi = document.createElement('div');
var jediTitle = document.createElement('h3');
var jediRule = document.createElement('div');
var jediContainerOne = document.createElement('div');
var jediDescriptionOne = document.createElement('p');


/*AGREGANDO ATRIBUTOS A LOS ELEMENTOS*/

//barra de navegación
navBar.classList.add('nav-bar');
logoSection.classList.add('logo-section');
userSection.classList.add('user-section');
logo.setAttribute('src', 'assets/images/logo-laboratoria.svg');
logo.classList.add('logo');

//agregando atributos de botones
buttonLogOut.classList.add('log-out-button');
buttonLogOut.innerText = 'LOG OUT';
buttonLogOut.setAttribute("href", "#");
buttonSettings.classList.add('settings-button');
buttonSettings.innerText = 'SETTINGS';
buttonSettings.setAttribute("href", "#");
settingsIcon.classList.add('fa');
settingsIcon.classList.add('fa-cog');
settingsIcon.setAttribute('area-hidden', 'true');

//main
mainSide.classList.add('main-side');
mainBody.classList.add('main-body');
//barra de opciones(select)
sideContainer.classList.add('side-container');
//seccion enrollment
firstSection.classList.add('first-section');
enrollment.classList.add('enrollment');
enrollmentTitle.innerText = 'ENROLLMENT';
enrollmentTitle.classList.add('enrollment-title');
enrollmentRule.classList.add('enrollment-rule');
enrollmentContainerOne.classList.add('enrollment-container-one');
enrollmentContainerTwo.classList.add('enrollment-container-two');
enrollmentDescriptionOne.classList.add("enrollment-desc-one");
enrollmentDescriptionTwo.classList.add("enrollment-desc-two");
enrollmentDescriptionOne.innerText = '#ENROLLED STUDENTS';
enrollmentDescriptionTwo.innerText = 'DROPOUT %';
//sección achievement
achievement.classList.add('achievement');
achievementTitle.innerText = 'ACHIEVEMENT';
achievementTitle.classList.add('achievement-title');
achievementRule.classList.add('achievement-rule');
achievementContainerOne.classList.add('achievement-container-one');
achievementContainerTwo.classList.add('achievement-container-two');
achievementDescriptionOne.classList.add("achievement-desc-one");
achievementDescriptionTwo.classList.add("achievement-desc-two");
achievementDescriptionOne.innerText = '#THAT MEET THE TARGET';
achievementDescriptionTwo.innerText = '%OF TOTAL';
//sección nps
nps.classList.add('nps');
npsTitle.innerText = 'NPS';
npsTitle.classList.add('nps-title');
npsRule.classList.add('nps-rule');
npsContainerOne.classList.add('nps-container-one');
npsDescriptionOne.classList.add("nps-desc-one");
npsDescriptionOne.innerText = ' % NPS CUMULATIVE';

//sección skills
secondSection.classList.add('second-section');
skills.classList.add('skills');
skillsTech.classList.add('skills-tech');
skillsLife.classList.add('skills-life');
skillsTech.innerText = 'TECH SKILLS'
skillsLife.innerText = 'LIFE SKILLS'
skillsBySprint1.classList.add('skills-by-sprint-1');
skillsBySprint2.classList.add('skills-by-sprint-2');
skillsTwo.classList.add('skills-two');
skillsContainerOne.classList.add('skills-container-one');
skillsTechText.classList.add('skill-tech-text');
skillsTechText.innerText = '# & % THAT MEET THE TARGET';
skillsContainerTwo.classList.add('skills-container-two');
skillsContainerThree.classList.add('skills-container-three');
skillsHseText.classList.add('skill-hse-text');
skillsHseText.innerText = '# & % THAT MEET THE TARGET';
skillsContainerFour.classList.add('skills-container-four');
skillsRuler.classList.add('skills-ruler');
//sección students satisfaction
thirdSection.classList.add('third-section');
satisfaction.classList.add('satisfaction');
satisfactionTitle.innerText = 'STUDENT SATISFACTION';
satisfactionTitle.classList.add('satisfaction-title');
satisfactionRule.classList.add('satisfaction-rule');
satisfactionContainerOne.classList.add('satisfaction-container-one');
satisfactionDescriptionOne.classList.add("satisfaction-desc-one");
satisfactionDescriptionOne.innerText = 'MEETING OR ECXEEDING EXPECTATIONS';
//sección teacher ratings
teacher.classList.add('teacher');
teacherTitle.innerText = 'TEACHER RATING';
teacherTitle.classList.add('teacher-title');
teacherRule.classList.add('teacher-rule');
teacherContainerOne.classList.add('teacher-container-one');
teacherDescriptionOne.classList.add("teacher-desc-one");
teacherDescriptionOne.innerText = 'OVERALL TEACHER RATING';
//seccióm jedi ratings
jedi.classList.add('jedi');
jediTitle.innerText = 'JEDI RATING';
jediTitle.classList.add('jedi-title');
jediRule.classList.add('jedi-rule');
jediContainerOne.classList.add('jedi-container-one');
jediDescriptionOne.classList.add("jedi-desc-one");
jediDescriptionOne.innerText = 'OVERALL JEDI RATING';


/*COLOCANDO LOS ELEMENTOS EN EL HTML*/

//barra de navegación

container.appendChild(navBar);
navBar.appendChild(logoSection);
navBar.appendChild(userSection);
logoSection.appendChild(logo);
userSection.appendChild(menu);
userSection.appendChild(buttonSettings);
userSection.appendChild(buttonLogOut);
buttonSettings.appendChild(settingsIcon);
//main
container.appendChild(mainSide);
container.appendChild(mainBody);
//barra de opciones(select)
mainSide.appendChild(sideContainer);
//seccion enrollment
mainBody.appendChild(firstSection);
firstSection.appendChild(enrollment);
enrollment.appendChild(enrollmentTitle);
enrollment.appendChild(enrollmentRule);
enrollment.appendChild(enrollmentContainerOne);
enrollment.appendChild(enrollmentContainerTwo);
enrollment.appendChild(enrollmentDescriptionOne);
enrollment.appendChild(enrollmentDescriptionTwo);
//sección achievement
firstSection.appendChild(achievement);
achievement.appendChild(achievementTitle);
achievement.appendChild(achievementRule);
achievement.appendChild(achievementContainerOne);
achievement.appendChild(achievementContainerTwo);
achievement.appendChild(achievementDescriptionOne);
achievement.appendChild(achievementDescriptionTwo);
//sección nps
firstSection.appendChild(nps);
nps.appendChild(npsTitle);
nps.appendChild(npsRule);
nps.appendChild(npsContainerOne);
nps.appendChild(npsDescriptionOne);
//sección skills
mainBody.appendChild(secondSection);
secondSection.appendChild(skills);
skills.appendChild(skillsTech);
skills.appendChild(skillsBySprint1);
skills.appendChild(skillsLife);
skills.appendChild(skillsBySprint2);
secondSection.appendChild(skillsTwo);
skillsTwo.appendChild(skillsContainerOne);
skillsTwo.appendChild(skillsContainerTwo);
skillsTwo.appendChild(skillsTechText);
skillsTwo.appendChild(skillsRuler);
skillsTwo.appendChild(skillsContainerThree);
skillsTwo.appendChild(skillsContainerFour);
skillsTwo.appendChild(skillsHseText);
//sección students satisfaction
mainBody.appendChild(thirdSection);
thirdSection.appendChild(satisfaction);
satisfaction.appendChild(satisfactionTitle);
satisfaction.appendChild(satisfactionRule);
satisfaction.appendChild(satisfactionContainerOne);
satisfaction.appendChild(satisfactionDescriptionOne);
//sección teacher ratings
thirdSection.appendChild(teacher);
teacher.appendChild(teacherTitle);
teacher.appendChild(teacherRule);
teacher.appendChild(teacherContainerOne);
teacher.appendChild(teacherDescriptionOne);
//seccióm jedi ratings
thirdSection.appendChild(jedi);
jedi.appendChild(jediTitle);
jedi.appendChild(jediRule);
jedi.appendChild(jediContainerOne);
jedi.appendChild(jediDescriptionOne);

//Creando elementos div y select, y agregandoles Ids
var containerSelect = document.createElement('div');
var selectSedesD = document.createElement('select');
var option = document.createElement('option');
containerSelect.setAttribute('id', 'container-select')
selectSedesD.setAttribute('id', 'sedes')
option.setAttribute('value', 'null');
option.innerText = 'Sede';
//Agregando select a sideContainer padre
sideContainer.appendChild(containerSelect);
containerSelect.appendChild(selectSedesD);
selectSedesD.appendChild(option);



//creando variables globales, para accesar a las keys,
var selectSedes = null;
var generationGlobal = null;
var selectedStudents = null;

//Creando primera función,  mapSedes (mapea data de sedes)
var mapSedes = function(data) {
  //variables locales que conectan con data
  var sedeList = Object.keys(data);
  //definiendo el elemento <select> por medio de su Id 'sedes'
  var selectSedes = document.getElementById('sedes');

  for (var i = 0; i < sedeList.length; i++) {
    //En este caso se agregó manualmente el nombre de las sedes, al no tener un identificador dentro de data
    var nameSede;
    if (sedeList[i] === 'AQP') {
      nameSede = 'Arequipa';
    } else if (sedeList[i] === 'CDMX') {
      nameSede = 'Ciudad de México';
    } else if (sedeList[i] === 'LIM') {
      nameSede = 'Lima';
    } else if (sedeList[i] === 'SCL') {
      nameSede = 'Santiago de Chile';
    } else {
      nameSede = sedeList[i];
    }

    //Creando las <option> del Select y agregándolas al DOM
    var optionSede = document.createElement('option');
    //en cada <option> contedrá el valor/value, y el sedeList, tomando en cuenta la variable local
    optionSede.setAttribute('value', sedeList[i]);
    optionSede.classList.add('sedes');
    //Imprime el nameSede de la iteración sedeList
    optionSede.innerText = nameSede;
    //Se le agrega <option> como hijo al <select>
    selectSedes.appendChild(optionSede);
  }
}
mapSedes(data);

//Primer evento click
//Creando función del evento Click al <select>
var onButtonClick = function() {
  var sedes = document.getElementById('sedes');

  /* Condicional para borrar el select cada vez que suceda el evento,
  Porque se creaba un <select> generacion por cada click */
  var selectAvailable = document.getElementById('generation');
  if (selectAvailable !== null) {
    selectAvailable.remove();
  }

  var valueSede = document.getElementById('sedes');
  //console.log(valueSede.value);
  //accesando al objeto(key) seleccionado en el select
  var generation = data[valueSede.value];

  //agregando en esta variable la ruta de acceso a la información a la que llega var generation,
  selectSedes = valueSede.value;
  //console.log(selectSedes)
  mapGeneration(generation);
}
sedes.addEventListener('click', onButtonClick);


//Creando funcion para generaciones
var mapGeneration = function(data) {
  var generationList = Object.keys(data);
  var selectGeneration = document.createElement('select');
  selectGeneration.setAttribute('id', 'generation');

  //llamando a un evento al click de generation
  selectGeneration.addEventListener('click', onButtonClickGeneration);

  //creando div nuevo para que generacion sea div hermano de sede
  var containerGeneration = document.createElement('div');
  sideContainer.appendChild(containerGeneration);

  //Este div se tuvo que omitir, al llegar el nuevo containerGeneration
  //var containerSelect = document.getElementById('container-select');
  //Agregando la primera opcion vacía de generaciones, afuera del for
  var optionDefault = document.createElement('option');
  optionDefault.setAttribute('value', 'null');
  optionDefault.innerText = 'Generación';
  selectGeneration.appendChild(optionDefault);

  for (var i = 0; i < generationList.length; i++) {
    //Creando las opciones del Select y agregándolas al DOM
    var optionGeneration = document.createElement('option');
    optionGeneration.setAttribute('value', generationList[i]);
    optionGeneration.innerText = generationList[i];
    selectGeneration.appendChild(optionGeneration);
  }
  containerGeneration.appendChild(selectGeneration);
}

//Creando evento principal, click en generación, que desplegará el conjunto de data requerida, y en el que se llamará a las demás funciones.
var onButtonClickGeneration = function() {
  var generation = data[selectSedes];
  var selectInput = document.getElementById('generation');
  // En esta variable Se actualiza la generación seleccionada en cada click al select
  generationGlobal = selectInput.value;

  /*En esta función se van a activar las demás funciones que presentan la información.
  var updateDashboard = function() */
  //llamando a las funciones que mapean la data, al suceder evento click en generación
  totalEnrolledStudents(data[selectSedes][generationGlobal]['students']);
  dropoutPercent(data[selectSedes][generationGlobal]['students']);
  meetTheTarget(data[selectSedes][generationGlobal]['ratings']);
  superaPercent(data[selectSedes][generationGlobal]['ratings'], data[selectSedes][generationGlobal]['students']);
  promotersPercent(data[selectSedes][generationGlobal]['ratings']);
  studentPercentSatisfaction(data[selectSedes][generationGlobal]['ratings']);
  teacherRating(data[selectSedes][generationGlobal]['ratings']);
  jediRating(data[selectSedes][generationGlobal]['ratings']);
  techSkillsNumber(data[selectSedes][generationGlobal]['students']);
  hseSkillsNumber(data[selectSedes][generationGlobal]['students']);
}


// # Número total de estudiantes presentes por sede y generación
var totalEnrolledStudents = function(totalStudents) {

  //Condicional para borrar el <p> con información cada vez que se seleccione generación o se cambie
  var totalNumberDisplay = document.getElementById('total-number');
  if (totalNumberDisplay !== null) {
    totalNumberDisplay.remove();
  }

  var studentsLength = totalStudents.length;
  //tomando la classe del container, para poder agregar el elemento <p>
  var totalNumberContainer = document.getElementsByClassName('enrollment-container-one');
  var totalNumber = document.createElement('p');
  totalNumber.setAttribute('id', 'total-number');
  totalNumber.classList.add('display-number'); //clases globales
  totalNumber.innerText = studentsLength;
  //añadiendo el parrafo que contendrá la cantidad de total estudiantes, al elemento contenedor.
  totalNumberContainer[0].appendChild(totalNumber);
}


// % Porcentaje de desertoras.
var dropoutPercent = function(totalStudents) {
  //console.log(totalStudents);
  var studentsLength = totalStudents.length;
  var dropoutStudents = 0;

  //Condicional para borrar el elemento contenedor de data
  var totalDropoutDisplay = document.getElementById('total-dropout');
  if (totalDropoutDisplay !== null) {
    totalDropoutDisplay.remove();
  }
  //iterando para el contador
  for (var i = 0; i < studentsLength; i++) {
    //Si students no es active, suma 1 a dropoutStudents
    if (!totalStudents[i].active) {
      dropoutStudents += 1;
    }
  }
  //console.log(dropoutStudents);

  //llamando al elemento que contendra el <p>, por nombre de clase
  var dropoutContainer = document.getElementsByClassName('enrollment-container-two');
  var totalDropoutPercent = document.createElement('p');
  //asignando un atributo id='total-dropout'
  totalDropoutPercent.setAttribute('id', 'total-dropout');
  totalDropoutPercent.classList.add('display-percent'); //estilos globales
  //Porcentaje de deserción
  var dropoutPercent = ((dropoutStudents * 100) / studentsLength).toFixed(1);
  //imprimiendo el p + string'%
  totalDropoutPercent.innerText = dropoutPercent + '%';
  //agregando hijo a contenedor padre
  dropoutContainer[0].appendChild(totalDropoutPercent);
}




// # Cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados
var meetTheTarget = function(totalRatings) {
  var targetExist = document.getElementById('students-meeting-target');
  if (targetExist !== null) {
    targetExist.remove();
  }
  var ratings = totalRatings;
  var ratingsLength = totalRatings.length;
  var sum = 0;
  for (var i = 0; i < ratingsLength; i++) {
    var studentSupera = ratings[i].student.supera;
    sum += studentSupera;
  }
  //creando el elemento
  var studentsThatMeetTheTarget = document.createElement('p');
  //agregando atributos
  studentsThatMeetTheTarget.setAttribute('id', 'students-meeting-target');
  studentsThatMeetTheTarget.classList.add('display-number'); //clases globales
  studentsThatMeetTheTarget.innerText = sum;
  //console.log(sum);
  //añadiendo elemento al html
  achievementContainerOne.appendChild(studentsThatMeetTheTarget);
}

// % Porcentaje total del dato anterior (Estudiantes que superan)
//totalRatings y totalStudents son necesarios para la operación
var superaPercent = function(totalRatings, totalStudents) {

  //1.revisando si existe el elemento con data
  var percentExist = document.getElementById('percent-mmeting-target');
  if (percentExist !== null) {
    percentExist.remove();
  }
  //2. operacion que calcula el porcentaje
  var sum = 0;
  for (var i = 0; i < totalRatings.length; i++) {
    var studentSupera = totalRatings[i].student.supera;
    sum += studentSupera;
  }
  var achivementPercent = ((sum * totalStudents.length) / 100).toFixed(1);
  //3. creando elemento y agregando un atributo Id
  var achievementRate = document.createElement('p');
  achievementRate.setAttribute('id', 'percent-mmeting-target');
  achievementRate.classList.add('display-percent'); //estilos globales
  //3.1 inner text con resultado de operación
  achievementRate.innerText = achivementPercent + '%';
  //4. agregando el elemento como child al div contenedor-padre
  achievementContainerTwo.appendChild(achievementRate);
}



// % Net Promoter Score (NPS) promedio de los sprints cursados
var promotersPercent = function(totalRatings) {

  //1.-revisar existencia del elemento
  var promotersExist = document.getElementById('nps-container-one');
  if (promotersExist !== null) {
    promotersExist.remove();
  }

  //2.-operación que calcula el porcentaje, inicia con iteración en promoters, passive y detractors
  var promotersSum = 0;
  var passiveSum = 0;
  var detractorsSum = 0;

  for (var i = 0; i < totalRatings.length; i++) {
    var promoters = totalRatings[i].nps.promoters;
    var passive = totalRatings[i].nps.passive;
    var detractors = totalRatings[i].nps.detractors;
    promotersSum += promoters;
    passiveSum += passive;
    detractorsSum += detractors;
  }
  //operación para sacar el promedio de los sprints cursados
  var totalNpsSum = promotersSum + passiveSum + detractorsSum; //total de alumnas
  var totalPromoters = (promotersSum / totalNpsSum) * 100;
  var totalPassive = (passiveSum / totalNpsSum) * 100;
  var totalDetractors = (detractorsSum / totalNpsSum) * 100;

  var nps = (totalPromoters - totalDetractors).toFixed(1);

  //3.-crear el elemento que lo contendrá, y agregar un atributo Id
  var npsRate = document.createElement('p');
  npsRate.setAttribute('id', 'nps-container-one');
  npsRate.classList.add('display-percent'); //estilos globales
  //3.1- Agregar innerText con el resultado de la operación.
  npsRate.innerText = nps + '%';
  //4.- agregar el elemento contenedor como appendChild al contenedor-padre
  npsContainerOne.appendChild(npsRate);
}
//Final-llamar a la función en el evento principal onButtonClickGeneration


/* # La cantidad que representa el total de estudiantes que superan la meta
de puntos técnicos en promedio */
var techSkillsNumber = function(students) {

  //1.-revisar existencia del elemento
  var techSkillsExist = document.getElementById('skills-container-one');
  if (techSkillsExist !== null) {
    techSkillsExist.remove();
  }
  //2.- Operación para sacar la cantidad de las que superan la meta,
  //iterando doble por student y por cada sprint del student
  //data["AQP"]["2016-2"]['students'][0]['sprints'][0]['score'].tech
  var sum = 0;
  for (var studentIndex = 0; studentIndex < students.length; studentIndex++) { //iteracion por objeto students
    for (var sprintIndex = 0; sprintIndex < students[studentIndex]['sprints'].length; sprintIndex++) //iteración objeto sprints
      var sprintsData = students[studentIndex]['sprints'][sprintIndex];
      if(students[studentIndex]['sprints'].length > 0){
        console.log(sprintsData['score'].tech);
        if (sprintsData['score'].tech > 1260) {
          sum++;
        }
      }
  }
  //3.- Creando elemento, asignando atributo Id, y clase
  var techSkills = document.createElement('p');
  techSkills.setAttribute('id', 'skills-container-one');
  techSkills.classList.add('display-percent');
  techSkills.innerText = sum;
  //4.- Agregando child a contenedor-padre
  skillsContainerOne.appendChild(techSkills);
}
//llamar función techSkillsNumber en evento

/*La cantidad que representa el total de estudiantes
que superan la meta de puntos de HSE en promedio*/

var hseSkillsNumber = function(students) {

  //1.-revisar existencia del elemento
  var hseSkillsNumber = document.getElementById('skills-container-three');
  if (hseSkillsNumber !== null) {
    hseSkillsNumber.remove();
  }
  //2.- Operación para sacar cantidad de las que superan la meta,
  //iterando doble por student y por cada sprint del student

  var sum = 0;
  for (var studentIndex = 0; studentIndex < students.length; studentIndex++) { //iteracion por objeto students
    for (var sprintIndex = 0; sprintIndex < students[studentIndex]['sprints'].length; sprintIndex++) //iteración objeto sprints
      var sprintsData = students[studentIndex]['sprints'][sprintIndex];
      if(students[studentIndex]['sprints'].length > 0){
        console.log(sprintsData['score'].hse);
        if (sprintsData['score'].hse > 840) {
          sum++;
        }
      }
  }
  //3.- Creando elemento, asignando atributo Id, y clase
  var hseSkills = document.createElement('p');
  hseSkills.setAttribute('id', 'skills-container-three');
  hseSkills.classList.add('display-percent');
  hseSkills.innerText = sum;
  //4.- Agregando child a contenedor-padre
  skillsContainerThree.appendChild(hseSkills);
}
//llamar en evento onButtonClickGeneration



//% Porcentaje de Estudiantes Satisfechas
var studentPercentSatisfaction = function(ratings) {

  //1.-revisar existencia del elemento
  var studentPercentExist = document.getElementById('satisfaction-container-one');
  if (studentPercentExist !== null) {
    studentPercentExist.remove();
  }

  //2.- operación que calcula el Porcentaje
  var sumCumple = 0;
  var sumSupera = 0;
  var sumNoCumple = 0;
  //iterando en ratings
  for (var i = 0; i < ratings.length; i++) {
    var cumple = ratings[i].student.cumple; //Alumnas que cumple con el minimo requerido
    var supera = ratings[i].student.supera; //Alumnas que supera el minimo requerido
    var noCumple = ratings[i].student["no-cumple"]; //Alumnas que NO-cumple el minimo requerido

    sumCumple += cumple;
    sumSupera += supera;
    sumNoCumple += noCumple;
    var totalAlumnas = (sumCumple + sumSupera + sumNoCumple);
    var studentSatisfaction = ((sumCumple + sumSupera) * 100 / totalAlumnas).toFixed(1);
  }
  //3.- Crear elementos contenedores, y agregar atributo Id
  var percentSatisfaction = document.createElement('p');
  percentSatisfaction.setAttribute('id', 'satisfaction-container-one');
  percentSatisfaction.classList.add('display-percent');
  percentSatisfaction.innerText = studentSatisfaction + '%';
  //4.- Añadiendo child a contenedor-padre
  satisfactionContainerOne.appendChild(percentSatisfaction);
}
//Por ultimo, llamar a la función en el evento onButtonClickGeneration


// La puntuación promedio de l@s profesores.
var teacherRating = function(ratings) {

  //1.-revisar existencia del elemento
  var teacherRatingExist = document.getElementById('teacher-container-one');
  if (teacherRatingExist !== null) {
    teacherRatingExist.remove();
  }
  //2.- operacion que calcula el Porcentaje
  var sumTeacher = 0;
  for (var i = 0; i < ratings.length; i++) {
    var teacher = ratings[i].teacher; //Total teachers
    sumTeacher += teacher;
  }
  //puntuacion promedio de los profesores
  var promTeachers = (sumTeacher / ratings.length).toFixed(1);

  //3.- Creando elemento contenedor, más atributo Id, y clase
  var teacherRatingPercent = document.createElement('p');
  teacherRatingPercent.setAttribute('id', 'teacher-container-one');
  teacherRatingPercent.classList.add('display-percent');
  teacherRatingPercent.innerText = promTeachers + '%';
  //4.- Añadiendo como child a su contenedor-padre
  teacherContainerOne.appendChild(teacherRatingPercent);
}
//llamar a la función en evento principal

// La puntuación promedio de l@s jedi masters
var jediRating = function(ratings) {

    //1.-revisar existencia del elemento
    var jediRatingExist = document.getElementById('jedi-container-one');
    if (jediRatingExist !== null) {
      jediRatingExist.remove();
    }
    //2.-operación para obtener Porcentaje
    var sumJedis = 0;
    for (var i = 0; i < ratings.length; i++) {
      var jedi = ratings[i].jedi; //Total jedis
      sumJedis += jedi;
    }
    //puntuacion promedio de los jedis
    var promJedis = (sumJedis / ratings.length).toFixed(1);

    //3.- Creando elemento contenedor, atributo y clase global de estilos
    var jediRatingPercent = document.createElement('p');
    jediRatingPercent.setAttribute('id','jedi-container-one');
    jediRatingPercent.classList.add('display-percent');
    jediRatingPercent.innerText = promJedis + '%';
    //4.- Añadiendo a contenedor-padre
    jediContainerOne.appendChild(jediRatingPercent);
}
//llamar funcion en el evento


/*Creando función del evento Click al <select>
var onButtonClickStudents = function() {
  var studentsClick.setAttribute('id','studentsClick');
  var students = document.getElementById('studentsClick');
//cuando suceda click, muestra este div

}
sedes.addEventListener('click', onButtonClickStudents);*/
