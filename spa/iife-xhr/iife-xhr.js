function showCarnivores (carnivores) {
  for (var animal in carnivores){
    console.log(carnivores[animal]);
  }

}

function showHerbivores (herbivores) {
  for (var animal in herbivores){
    console.log(herbivores[animal]);
  }


}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);
