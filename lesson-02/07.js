

let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
}; 

//et passportMarried2 = JSON.parse(JSON.stringify(passportMarried));

let passportMarried2 = { ...passportMarried,  married: true, address: { ...passportMarried } } 
//passportMarried2.married = ...
 
console.log(passportMarried); 
console.log(passportMarried2);