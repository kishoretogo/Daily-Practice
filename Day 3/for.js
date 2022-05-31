let staff = [
    { name: "kishore",  salary: 5000, gender: "male" },    
    { name: "praveen",  salary: 8000 , gender: "male"},
    { name: "Janani",  salary: 6000 , gender: "female"},    
    { name: "Pravin",  salary: 5000, gender: "female"},
    { name: "Sara",  salary: 5000, gender: "female" }
    ];

let staffmember =  { name: "kishore",  salary: 5000, gender: "male" };
    
// for 
console.log("Json object array iteration using for");
for (let i=0; i < staff.length; i++){
    console.log(staff[i]);

}

// for/in 
console.log("Json object iteration using for/in");
for (var objProperty in staffmember) {    
    console.log(staffmember[objProperty]);
}

// for/of  
console.log("Json object array iteration using for/of");
for (var person of staff) { 
  console.log(person);
}

// forEach 
console.log("Json object array iteration using forEach");
staff.forEach(emp=> console.log(emp))