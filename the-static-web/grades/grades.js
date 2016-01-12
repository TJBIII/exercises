var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var minScore = Math.min.apply(Math, scores);
var maxScore = Math.max.apply(Math, scores);

//Create grades array that lists the number of each letter grade in scores.
//index 0 represents the number of A's
//index 1 represents the number of B's ... etc
var grades = [0,0,0,0,0];
var current;

for(var score in scores) {
  current = scores[score];

  switch (true){
    case (current >= 91):
      grades[0] += 1;
      break;
    case (current >= 81):
      grades[1] += 1;
      break;
    case (current >= 71):
      grades[2] += 1;
      break
    case (current >= 61):
      grades[3] += 1;
      break;
    default:
      grades[4] += 1;
  }
}


console.log("A:", grades[0]);
console.log("B:", grades[1]);
console.log("C:", grades[2]);
console.log("D:", grades[3]);
console.log("F:", grades[4]);

console.log("Min score:", minScore);
console.log("Max score:", maxScore);