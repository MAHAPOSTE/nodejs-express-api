console.log(this); // {} empty object

// function declaration - es5 syntax
function test(){
    console.log(this); // global object
}
test(); 

// function express - es5 syntax
const test2 = function(){
    console.log(this); // global 
    const test3 = () => {
        console.log('test3', this); // global 
    }
    test3(); 
}
test2(); 

// function expression - arrow function
// arrow function doesn't have a value for this keyword of it's own, it borrows the value of this from it's outer scope
const test4 = () => {
    console.log(this); // {}
}
test4(); 

const person = {
    firstName: 'steve',
    lastName: 'jobs',
    skills: ['js', 'java', 'py'], 
    fullName: function(){ // function -> method -> this -> current object
        return this.firstName + ' ' + this.lastName; 
    }
    // fullName: () => { // arrow function - here this will be refering to this from the outer scope
    //     console.log(this); // {}
    //     return this.firstName + ' ' + this.lastName; 
    // }
}
console.log(person.fullName()); // steve jobs