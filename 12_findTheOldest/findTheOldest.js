const findTheOldest = function(people) {
  /*  given an array of people objects, return the oldest person object (death - birth) 
      if one of the person objects does not have a death year (is still alive), find current age using JS date function */


      //to get current date: Date().split(' ')
      //returns an array in the order Day Month Date Year HH:mm:ss Timezone
      const currentYear = Date().split(' ')[3];
      const oldest = [];
      let age = 0;

      //first a function to help us find everyone's age
      function findAge(person) {
        if (!person.yearOfDeath) { //if they're not dead
          return currentYear - person.yearOfBirth;//use the current year we found earlier to determine age
        }
        else { return person.yearOfDeath - person.yearOfBirth }
      }

      //Then, loop thru the array comparing the result of the findAge function to a 
      //placeholder variable that stores the oldest age
      people.map((person) => {
        if (findAge(person)>age) {
          age = findAge(person);
          oldest.splice(0, 1, person); //add that object to our return array
        }
      });
      return oldest[0] //return the first object in the return array
    }

//Don't edit below this line
module.exports = findTheOldest;