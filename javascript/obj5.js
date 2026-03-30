const person = {
        firstName: "John", // property
        lastName: "Smith",
        age: 21,
        fullName: function() { // function
             return this.firstName + " " + this.lastName;
        }
};
console.log(person.fullName());