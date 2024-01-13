//using a new keyword we first created the new object and then on newly created object we added new properties.
//Here, in object constructor function way we create a function (a normal function )

function Student(name, age, id) {
  this.name = name;
  this.age = age;
  this.id = id;
}

const Student1 = new Student("john", 14, 1201);

const Student2 = new Student("milind", 24, 65);

Student1.email = "jmilind1234@gmail.com";
//Can we create constructor function with optional parameters?

console.log(Student1);
console.log(Student2);

// accessing the properties of the object
// 1st way using . operator
// 2nd way using [] branckets

console.log(Student1["name"]);

//both the ways of acessing the object's property are correct, and can be used interchangeably
//but there are some specific use cases where we are allowed to use only the square brackets
// 1. if property key is numeric
// 2. if property key is space seperated.
// 3. if property key is coming as the variable.

// existence of a property 
console.log('name' in Student1);
