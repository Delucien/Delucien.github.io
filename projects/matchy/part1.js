// Use this file to implement Part One of your project

var animal = {};
animal.species = 'Seamonkey';
console.log(animal.species);
animal['tagline'] = 'Swim to warmer waters with me, baby';
console.log(animal['tagline']);
animal.noises = null ;
var noiseArray = ['blub', 'meow'];
noiseArray.push('zeep');
noiseArray.unshift('bark');
console.log(noiseArray);
console.log(noiseArray.length);
console.log(noiseArray[noiseArray.length - 1]);
console.log(noiseArray);
var noises = 'noises';
animal.noises = null;
console.log(animal.noises);
animal.noises = noiseArray;
console.log(animal);

var animals = [];
animals.push(animal);

var quackers = {};
quackers.species = 'duck';
quackers['tagline'] = 'Aflack';
quackers.noises = ['quack', 'honk', 'sneeze', 'growl'];
animals.unshift(quackers);

var hoppy = {};
hoppy.species = "Rabbit";
hoppy['tagline'] = "Of course you know this means war!";
hoppy.noises = ["what's", "up", "doc", "hey"];

var dog = {};
dog.species = "wolf";
dog['tagline'] = "I've got a bone for you!";
dog.noises = ["bark", "howl", "yip", "grr"];

animals.unshift(hoppy);
animals.unshift(dog);

console.log(animals.length);

//friends//
var friends = [];

var friendOne = dog.species;
var friendTwo = hoppy.species;

friends.push(friendOne);
friends.push(friendTwo);


//relationships//
var relationships = {};
relationships.friends = friends  //key is synonomus with propertyname
var matches = [];
relationships.matches = matches;


var friendThree = animal.species;
var friendFour = quackers.species;

matches.push(friendThree);
matches.push(friendFour);


for (var i = 0; i < animals.length; i++) {
   animals[i].relationships = relationships;
}
