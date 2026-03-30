const person = {
    firstName: "Mahalaxmi",
    lastName: "Poste",
    email: "maha@gmail.com"
}

// for in loop
for (let key in person) {
   // console.log(key);
   // console.log(person[key]);
    console.log(key, person[key]);
}

// using for of loop
for(let key of Object.keys(person)) {
    console.log(key, person[key]);
}

// using for each method
Object.keys(person).forEach((key) => {
    console.log(key, person[key]);
});