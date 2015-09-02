//Any code in part1.js is still accessible in this file! 
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.
console.log(animals);
var profileAnimal = animals[0];


//Loop through the properties of the animal, console.log the property name
//and if the property value is a string, also print that out.
//If the value is not a string, then just put a placeholder value of 
//'click here for data' (not actually a link)
//'species: dog, tagline: who let the dogs out?, noises:
//click here for more data, relationships: click here for more data' etc

for (var propertyName in profileAnimal) {
    // look in the object find the strings
    if(typeof profileAnimal[propertyName] === "string") {
        // print the object keys plus : and values
        console.log(propertyName + ' : ' + profileAnimal[propertyName]);
  
    }
    // else find the noises in the object and print the noises without the array
    else if (profileAnimal[propertyName] === profileAnimal[noises]){
        //print the list in the array in the object
        console.log(propertyName + ' : ' + profileAnimal[noises]);
    }
// else print this string
    else {
        console.log("click here for data");
    }
}

// console.log(key + ' : ' + data[key]);
// } else if(typeof profileAnimal[propertyName] != "string") {
//     console.log("click here for data");

// Animal relationship data friends
 console.log(relationships.friends);
  // print the matches
  console.log(relationships.matches);
  relationships.friends.pop();
  console.log(relationships.friends);
  
  //loop through the animals object print the species and tagline and number it
  for (var i = 0; i < animals.length; i++) {
      console.log((i + 1) + ' ' + animals[i].species + ' ' + animals[i].tagline);
  }
  
 // search for a species then put out their business
 //for(i = 0 ; i < animals.length; i++) {
   //  console.log(animals[1].species + animals[1]);
   
// }//loop through animals array pick an object species and print
 
 for (i = 3; i < animals.length; i++){
    console.log(animals[0].species);
}
// changing to another animal species
 for (i = 3; i < animals.length; i++){
    console.log(animals[1].species);
} 
// add a friend to the aninal
animals[3].push(animals[1]);
console.log(animals[3]);
  
  