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

// Using function in another Function

function calculateAge(birthDate){
  var age = 2016 - birthDate;
  return age;
}

function retire(name, year){
  var age = calculateAge(year);
  var retirement = 65 - age;

  if(retirement >= 0){
    console.log(name + " will retire after " + retirement + " years.")
  }else{
    console.log(name + " already retired. ")
  }
}

retire("john", 23);

// Function expression in the object

var john = {
         name: 'John',
         lastName: 'Smith',
         yearOfBirth: 1986,
         job: 'Software Eng',
         calculateAge: function() {
          return  this.age = 2018 - this.yearOfBirth;
        }
      };

    john.calculateAge()
    console.log(john)


var years = [1970, 1986, 2002, 2007, 2008];
var age = [];

for (var i = 0; i < years.length; i++){
  age[i] = 2018 - years[i];
}

for (i = 0; i< age.length; i++){
  if(age[i] <= 18){
    console.log(
      "You are not older enough to enter in the hall"
    );
    console.log(years.push(false));

  }else{
    console.log(
      "You can enter in the Hall"
    );
    console.log(years.push(true))
  }
}

// hoisting with statements function and Express Function

function myAge(year){
  console.log(2018 - year);
}
myAge(1986)

// express function
var herRetirement = function(year){
  console.log (65 - (2018 - year))
}
herRetirement(1986);

// below has shown how Scope Chain ( Bottom to Up) works in javascripts

var a = "Hello!!";

first();

function first(){
  var b = "HI!!";
  second();
  function second(){
    var c = "Hey!!";
    console.log(a + b + c);
  }
}
