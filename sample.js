

// Given an object representing a car, with properties for the make, model, year, and a method to 
// display the car's information, 
// write a function that takes the car object and adds a new method to the object called age. 
// The age method should return the current age of the car based on the current year and the car's year property.
const car = {
    make: 'Ford',
    model: 'Ranger',
  year: 2023,
  displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};


const currentage = function(obj) {
    obj.age = function() {
       return fullyear - car.year
    }
}
currentage(car)
const date = new Date()
const fullyear = date.getFullYear()
console.log(car.age())
console.log(car)