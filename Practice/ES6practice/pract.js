const person = {
  firstname: "John",
  lasname: "Joe",
  age: 50,
  eyecolor: "blue"
};

let id = Symbol('id');
person[id] = 140353;

console.log(person[id] + " " +person.id)