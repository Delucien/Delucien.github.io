//Use this file to implement Part One of your project


$.getJSON('data/animals.json', function(animals) {
   // console.log(animals);
    
    var animal;
//     //scenerio 0
//     function objKeyPrinter(object) {
//         var output = [];
//         for (var key in object) {
//             output.push(key);
//         }
//     return output.join("");
//             var output = '';
//             for (var key in object) {
//                 output += key + ' '
//             }
//             return output.slice(-1);
//         }
    
//     var keyString = objKeyPrinter(animals[animals.length -1]);
//     objKeyPrinter(animals[animals.length -1]);
//     console.log(keyString);
    
    
//     function objValuePrinter(object) {
//       var output = [];
//       for (var key in object) {
//           if(typeof object[key] === 'string') {
//               output.push(object[key]);
//           }
//       } 
//       return output.join(" ");
//     };
//     console.log(objValuePrinter(animals[0]));

    
//     function arrValuePrinter(arr) {
//          return arr.join('  ');
        
//     };
//   console.log(arrValuePrinter(['quack', 'honk', 'sneeze', 'growl']));
    
//     function dataTypeChecker (collection) {
//         if(Array.isArray(collection)) {
//             return 'Array'; 
//         } else { 
//             return "Object";
//         }
//     };
//     console.log(dataTypeChecker({}));

var helper = { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
    function capitalizeVals (obj) {
        // in an object if the value is a string then capitalize the first letter
        for(var key in obj) {
            if(typeof obj[key] === 'string') 
              obj[key].charAt(0).toUpperCase() + obj[key].slice(1);
        }
       return
    };
    console.log(capitalizeVals(helper));
    
    
    
    
    
})
.fail(function(error) {
    console.log('There is a problem');
});

    