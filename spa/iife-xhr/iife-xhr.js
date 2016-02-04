function showCarnivores (carnivores) {
  var carnivoreHTML= "";
  var carnivoreEl = document.getElementById('carnivore');
  carnivores.forEach(function (currentCarnivore){
    carnivoreHTML += `<div>${currentCarnivore}</div>`;
  })
  carnivoreEl.innerHTML = carnivoreHTML;
}

function showHerbivores (herbivores) {
  var herbivoreHTML= "";
  var herbivoreEl = document.getElementById('herbivore');
  herbivores.forEach(function (currentherbivore){
    herbivoreHTML += `<div>${currentherbivore}</div>`;
  })
  herbivoreEl.innerHTML = herbivoreHTML;
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);
