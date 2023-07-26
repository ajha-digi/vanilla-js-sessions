const abc = (a) => {
  return a();
};

function xyz() {
  return "Hello i am xyz function";
}

// A callback is a function passed as an argument to another function.

console.log(
  abc(() => {
    return "Hello i am xyz function";
  })
);

// document.getElementById("#test").addEventListener("click", function(){
//     alert(123)
// })

// document.getElementById("#test").addEventListener("click", () =>{
//     alert(123)
// })

function doSomthingAsync(cb) {
  setTimeout(() => {
    console.log("Async Operation complete !!");
    cb();
  }, 5000);
}

function afterAsyncOperation() {
  console.log("Callback executed !!!!");
}

// console.log("start");
// doSomthingAsync(afterAsyncOperation)
// console.log("end");
// afterAsyncOperation()

// Promises

// function fetchDataFromApi() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const user = {
//         id: "123",
//         name: "ajeet",
//         age: 38,
//         salary: 100,
//       };

//       resolve(
//         new Promise(function(res, rej){
//             res(user)
//         })
//       );
//     }, 2000);
//   });
// }

// const fetchDataFromApi =  () => {

// }

// fetchDataFromApi()
//     .then(function (data) {
//     console.log(data);
//     })
//     .catch(function(){
//         console.log("Opps !! something went wrong");
//     })
//     .finally(function(){
//         console.log("Api call completed !!");
//     })

// Async await

// function fecthDataFromApi() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const user = {
//         id: "123",
//         name: "ajeet",
//         age: 38,
//         salary: 100,
//       };

//       resolve(user);
//     }, 2000);
//   });
// }

// async function fetchData(){
//     try {
//         const data = await fecthDataFromApi();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchData();


// Generator

function* generateNumber () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator = generateNumber()

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// while (generator.next().done !== true) {
//     console.log(generator.next().value);
// }