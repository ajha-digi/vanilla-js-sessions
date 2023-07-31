const obj = {
  a: "first",
};

// console.log(typeof obj);
obj["b"] = "second";

obj["a"] = "edited first";

// console.log(obj);

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));
// console.log(Object.entries(obj2))

for (let obj in obj2) {
  // console.log(obj2[obj])
}

for (let obj in obj2) {
  // console.log(obj)
}

for (let [key, value] of Object.entries(obj2)) {
  // console.log(key, value)
}

// const person = {
//     name: "saikumar",
//     greet : function(greeting){
//         console.log(greeting + " " +  name)
//     }
// }

const person = {
  name: "saikumar",
  greet: function (greeting) {
    console.log(greeting + " " + this.name);
  },
};

const sayHello = person.greet;
const boundSayHello = sayHello.bind(person);

var obj = {
  value: 42,
  method1() {
    // doesn't use `this`
    console.log("yey!");
  },
  method2() {
    // uses `this`
    console.log(this.value);
  },
};

obj.method1(); // works
obj.method2(); // works

var m1 = obj.method1;
var m2 = obj.method2;

m1(); // works
m2(); // BROKEN!

var m2bound = obj.method2.bind(obj);
m2bound(); // works




function greet(greeting) {
    console.log(greeting + " " + this.name );
}

const person1 = {
    name: "sudeep"
}

const person2 = {
    name: "vivek"
}

greet.apply(person1, ["Good evening"])
greet.apply(person2, ["Good evening"])

greet.call(person1, "Good evening")