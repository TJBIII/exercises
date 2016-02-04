var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.json");
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText).carnivoresList;

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(carnivores);
      });
    },
    loadHerbivores: function (callbackToInvoke) {

      var loader = new XMLHttpRequest();
      loader.open("GET", "herbivores.json");
      loader.send();

      loader.addEventListener("load", function(){
        herbivores = JSON.parse(this.responseText).herbivoresList;

        callbackToInvoke(herbivores);

    });
  }
}
})();