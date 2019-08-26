"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      var foundPerson = searchByName(people);
      mainMenu(foundPerson, people);
      break;
       case 'no':
      var input;
      searchByTraits(people, input);
      break;
     default:
      app(people); // restart app
    break;
  }
}
// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // get person's info (done)
    displayPerson(person);
    break;
    case "family":
    searchByFamily(person);
    // TODO: get person's family
    // TODO: displayFamily() write function similar to displayPerson()
    break;
    case "descendants":
    // TODO: get person's descendants
    // TODO: displayDescendants() write function similar to displayPerson()
    break;
    case "restart":
    app(people); // restart (done)
    break;
    case "quit":
    return; // stop execution (done)
    default:
    return mainMenu(person, people); // ask again
  }
}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = person.firstName + " " + person.lastName + "\n";
  personInfo += "dob:" + person.dob + "\n";
  personInfo += "height:" + person.height + "\n";
  personInfo += "weight:" + person.weight + "\n";
  personInfo += "eyeColor:" + person.eyeColor + "\n";
  personInfo += "occupation:" + person.occupation + "\n";
  alert(personInfo);
  return personInfo;
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
 

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundPerson = people.filter(function(person){
    if(person.firstName === person.firstName && person.lastName === person.lastName){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson[0];
}// find the person using the name they entered (done)


// function whichTraitsToSearch(input){
//     var input = promptFor("Would you like to search by gender, eye color, height, weight, occupation, or date of birth?", chars);
//     return(input);
// }

function searchByTraits(people,input) {
	var input = promptFor("Would you like to search by gender, eye color, height, weight, occupation, or date of birth?", chars);

	switch (input){
		case "gender":
		 searchByGender(people, input);
         break;
        case "eye color":
         var eyeColorArray = searchByEyeColor(people, input);
         break;
        case "height":
         searchByHeight(people, input);
         break;
        case "weight":
         searchByWeight(people, input);
        case "occupation":
         searchByOccupation(people, input);
        case "date of birth":
         searchByDOB(people, input);
        default:
        break;
	}

}

function filterByTrait(people, input){
	var input = promptFor("Please enter person's ", + input, chars);
	var newArray = people.filter(function(people){
		if (people.newArray === input){
			return newArray[input];
			}
			else{
				return false;
			}
	
	})

}
		
	
	
function searchByEyeColor(people, input){
  var whatEyeColor= promptFor("What is the person's eye color?", chars); //prompt for what to search for "variable x" 
  var eyeColorArray = people.filter(function(people){                   //new array named "array y"
    if(people.eyeColor === whatEyeColor){
	//validate results with user -- print results and ask if any of these are the person they are looking for, redirect to new switch case asking for different conditions
		return true;    
    }
    else{
        return false;
    }
  })
   return eyeColorArray[input];
}


  
// function searchByFamily(person,people){
//    var personsSpouse = "Spouse:" + person.currentSpouse + "\n";
//    var personsParents = "Parents:" + person.parents + "\n";
//     people.filter(mainMenu(personsSpouse));

//     if (personsSpouse == 0); {
//       alert(personsFamily);
//    return(personsFamily);
//     }    



// }

// function searchByGender(people, input) {
// 	var gender = promptFor("What is the person's gender?", chars);
// 	switch (gender){
// 			case "male":
// 			return foundGender[0];
// 				break;
// 			case "female":
// 			return foundGender[0]
// 				break;
// 			default:
// 			return;
// 		}
// 	})
// }


var genderArray = people.filter(myFunction);

function myFunction(value, index, array){
	if (value === "male")
		return true;
	else{
		return false;
	}
}