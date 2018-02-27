// Wining score
var heightJohn = 220;
var heightMike = 124;
var ageJohn = 30;
var ageMike = 31;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

if (scoreJohn > scoreMike){
  alert("John is the winner and his score is: " + scoreJohn)
}else if(scoreJohn < scoreMike){
  alert("Mike is the winner and his score is: " + scoreMike)
}else{
  alert("Bothe of your score in equal")
}
