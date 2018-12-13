'use strict';

let skillsList = document.querySelector('#container-checkboxes');
console.log(skillsList);

function init () {
  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
  .then(response => response.json())
  .then(function (data){
    console.log(data);
      let skillsArr = data.skills; // Objeto con un array de strings
      console.log(skillsArr);
      let skillsList = document.querySelector('#container-checkboxes');

      // Reseteamos contenido de lista de skills
      skillsList.innerHTML = '';

      // Print de las skills en el FORMULARIO
      for (let i = 0; i < skillsArr.length; i++) {
          // Objeto de skill
          let currentSkill = skillsArr[i];
          console.log(currentSkill);

          // Creamos un elemento <li> 
          let listItemElem = document.createElement('li');
          listItemElem.innerHTML = `<input type="checkbox">`; // Para poner checkbox delante de cada skill.
          listItemElem.style = `list-style-type: none`; // Para quitar el punto de cada 'li' que sale por defecto.
    
          // Añadimos el nombre de la skill como texto hijo del <li>
          let listItemContent = document.createTextNode(`${currentSkill}`);
          listItemElem.appendChild(listItemContent);

          // Finalmente, añadimos el <li> a la lista
          skillsList.appendChild(listItemElem);
          }
})
}

init();
