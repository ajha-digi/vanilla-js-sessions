// let salary = 1000

// function printSalary () {
//     console.log(`Hey my Salary is ${salary}`);
// }

// printSalary();
// printSalary();
// printSalary();
// printSalary();
// printSalary();
// printSalary();
// salary = 100
// printSalary();
// printSalary();
// printSalary();


let first = 1
second = 6
function a (extra) {
    let second = 2
    thrid=4
    return function b (four) {
        let third = 3
        console.log(first, second, extra, third, four)
        
    }
}

a(5)(4)


function counter() {
    let count = 0;

    return function updateCount (num) {
        count = count + num
        return count
    }
}

const counter1 = counter();
const counter2 = counter();
const counter3 = counter();




//mul(1)(2)(3)(4) => 1*2*3*4 = 24

function mul(n1) {
    return function (n2) {
        return function (n3) {
            return function (n4){
                return n1* n2 * n3* n4
            }
        }
    }
}

mul(1)(2)(3)(4)



[1,2,3,4,5,6,7,8].map(function(num){
    return num *2
})

[1,2,3,4,5,6,7,8].map(function(num){
    return num + 7
})

const arr = [1,2,3,4,5,6,7,8]
undefined
arr.map(x => x*3)

arr

const abc = arr.filter(function(num){
   return num > 4
})




[1,2,3,4,5,6,7,8,9,10]



// Write a JavaScript program to display the current day and time in the following format.
ewuirowejroi
//  Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

feature/basic

