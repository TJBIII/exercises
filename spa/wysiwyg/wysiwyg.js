//get reference to container element in DOM
var containerEl = document.getElementById('output');

var title;
var name;
var bio;
var imgLink;
var lifespan;
var personHTML;

people.forEach(function(person) {
  //start with empty string
  personHTML = "";

  title = person.title;
  name = person.name;
  bio = person.bio;
  imgLink = person.image;
  lifespan = person.lifespan;

  personHTML += `<div class="person"><header>${name} - ${title}</header>`; 
  personHTML += `<section><img width="150px" src="${imgLink}"><p>${bio}</p></section>`;
  personHTML += `<footer>${lifespan.birth} - ${lifespan.death}</footer></div>`;

  containerEl.innerHTML += personHTML;
});

var personsEls = document.getElementsByClassName('person');



for (var i = 0; i < personsEls.length; i++){
  console.log("personsEls[i]",personsEls[i]);
  personsEls[i].addEventListener("click", function(e){
    focusedOn(e);
  });
}


function focusedOn(e){
  //console.log(e);
  e.target.classList.add("bordered");
  

  var inputEl = document.getElementById('text-input');

  inputEl.value = e.target.innerHTML;
  inputEl.focus();

}



