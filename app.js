"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
//let people = data;

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  //var people = data;
  switch(searchType){
    case 'yes':
      var foundPerson = searchByName(people);
      mainMenu(foundPerson, people);
      break;
    // case 'no':
    //   var notFound = people.filter(searchByEyeColor(people));
    //   break;
    // case 'no':
      // notFound = people.filter(searchByGender(people));
      // break;
    // case 'no':
    //   notFound = people.filter(searchByWeight(people));
    //   break;
    case 'no':
      searchByTraits();
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
    // get person's info
    displayPerson(person);
    break;
    case "family":
    searchByTraits(searchByFamily, person);
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson[0];
}// find the person using the name they entered


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

function searchByGender(people){
  var gender = promptFor("What is the person's gender?", chars);

  notFoundPerson = people.filter(function(){
    if(person.gender == "male"){
      return true;
    }
    else{
      (person.gender == "female")
      return(notFoundPerson);
    }
  })
  }
  // find the person using their gender
  // return foundPerson[0];

function searchByEyeColor(people){
  var eyeColor = promptFor("What is the person's eye color?", chars);
  var foundPerson = people.filter(function(person){
    if(person.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson[0];
}
  
function searchByFamily(person,people){
   var personsSpouse = "Spouse:" + person.currentSpouse + "\n";
   var personsParents = "Parents:" + person.parents + "\n";
    data.filter(mainMenu(personsSpouse));

    if (personsSpouse == 0); {
      alert(personsFamily);
   return(personsFamily);
    }    
   
}

function searchByTraits(input){
    var input = promptFor("Would you like to search by Gender, Eye Color, Height, Weight, Occupation, or Date of Birth?", chars);
    return(input);
}
