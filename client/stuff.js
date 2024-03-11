const persons = [
  {
    name: "Washington",
    id: 23,
    year: 2001,
    legs: null,
  },
  {
    name: "Alexander",
    id: 23,
    year: 2002,
    legs: null,
  },
];
// persons.push({
//   name: "Luciie",
//   id: 20,
//   year: 2003,
//   legs: null,
// });
const people = [...persons, { name: "Luciie", id: 20, year: 2003, legs: null }];
// person.legs=2
// const getAge = () => {
//   const age = new Date().getFullYear() - person.year;
//   return age;
// };
// // getAge
// let man = { ...person, age: getAge() };

// console.log(man);

// console.log({...person, legs: 2})

// console.log(man.getAge())
// persons[1].name = "Maina";
let xman = persons.filter(person=>person.name = 'Washington');
xman[0].name = "Michael"
console.log(xman);