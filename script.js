// Wining score
// var heightJohn = 220;
// var heightMike = 124;
// var ageJohn = 30;
// var ageMike = 31;
//
// var scoreJohn = heightJohn + 5 * ageJohn;
// var scoreMike = heightMike + 5 * ageMike;
//
// if (scoreJohn > scoreMike){
//   alert("John is the winner and his score is: " + scoreJohn)
// }else if(scoreJohn < scoreMike){
//   alert("Mike is the winner and his score is: " + scoreMike)
// }else{
//   alert("Bothe of your score in equal")
// }

// Using function in another Function

function calculateAge(birthDate) {
  var age = 2016 - birthDate;
  return age;
}

function retire(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + " will retire after " + retirement + " years.")
  } else {
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
    return this.age = 2018 - this.yearOfBirth;
  }
};

john.calculateAge()
console.log(john)


var years = [1970, 1986, 2002, 2007, 2008];
var age = [];

for (var i = 0; i < years.length; i++) {
  age[i] = 2018 - years[i];
}

for (i = 0; i < age.length; i++) {
  if (age[i] <= 18) {
    console.log(
      "You are not older enough to enter in the hall"
    );
    console.log(years.push(false));

  } else {
    console.log(
      "You can enter in the Hall"
    );
    console.log(years.push(true))
  }
}

// hoisting with statements function and Express Function

function myAge(year) {
  console.log(2018 - year);
}
myAge(1986)

// express function
var herRetirement = function(year) {
  console.log(65 - (2018 - year))
}
herRetirement(1986);

// below has shown how Scope Chain ( Bottom to Up) works in javascripts

var a = "Hello!!";

first();

function first() {
  var b = "HI!!";
  second();

  function second() {
    var c = "Hey!!";
    console.log(a + b + c);
  }
}

// Method in a Object can be borrowed to use in another object

var brian = {
  name: "Brian",
  yearOfBirth: 1940,
  calculateAge: function(year) {
    console.log(2018 - this.yearOfBirth);
  }
};

brian.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1945
};

mike.calculateAge = brian.calculateAge;

mike.calculateAge();

// Prototype function

var Car = function(name, brand, years) {
  this.name = name;
  this.brand = brand;
  this.years = years;
};

Car.prototype.carAge = function() {
  return 2018 - this.years;
};

var myCar = new Car("Corolla Ce", "Toyota", 2004);

console.log("I have a car called: " + myCar.name + " which is: " + myCar.brand + " brand and it is " + myCar.carAge() + " years old.")

// Creating an object using Object.create Method

var person = {
  calculateAge: function() {
    return this.currentYear - this.bornYear;
  }
};

var myAge = Object.create(person);
myAge.name = "Shaf";
myAge.currentYear = 2018;
myAge.bornYear = 1986;

console.log("My name is " + myAge.name + " and I am " + myAge.calculateAge() + " years old man.")


// Or we can do make it this way

var jane = Object.create(person, {
  name: {
    value: "jane"
  },
  currentYear: {
    value: 2018
  },
  bornYear: {
    value: 1993
  }
});

console.log("My name is " + jane.name + " and I am " + jane.calculateAge() + " years old women.")


// Passing a function as argument

var years = [1920, 1945, 1980, 1975, 2002]

function calculateAge(array, func) {
  newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(func(array[i]))
  }
  return newArray;
}

function number(e) {
  return 2018 - e;
}

var myAge = calculateAge(years, number);
console.log(myAge);


function fullAge(el) {
  if (el >= 18) {
    return "you are at: " + el + " and you are adult";
  } else {
    return "You are young"
  }
  return 2018 - el;
}

var checkAge = calculateAge(myAge, fullAge);
console.log(checkAge)

// Function returning a function

function askQuestion(position) {
  if (position === "teacher") {
    return function(name) {console.log("What subject do you teach " + name + " ?")}
  } else if (position === "programmer"){
      return function(name) {console.log("Which programming language do you teach " + name + " ?")}
    } else if (position === "designer") {
      return function(name) {console.log("What do you design " + name + " ?")}
    }else{
    return function(name) {console.log("What do you do " + name + "?")}
  }
}

var myQuestion = askQuestion("teacher");
console.log(myQuestion("Shaf"))

// closures: An innier function that is able to access outer function and variables

function retirement(retirementAge){
  var yearsLeft = " years left to retire";
  return function(yearOfBirth){
    var age = 2016 - yearOfBirth;
    var result = retirementAge - age;
    console.log (result + yearsLeft)
  }
}

var myNums = retirement(66);
console.log(myNums(1986));

// another example of closures

function askQuestion(job){
  var age = " and how old are you ?"
  return function(name){
    if(job === "teacher"){
      console.log("What do you teach " + name + age)
    }else if(job === "programmer"){
      console.log("What programming language do you know " + name + age)
    }else if(job === designer){
      console.log("Hello " + name + " what do you design ?")
    }else{
      console.log("What do you do " + name + age)
    }
  }
}

var hello = askQuestion("teacher");
console.log(hello("John"));

var shaf = askQuestion("programmer")("Shafiq");
