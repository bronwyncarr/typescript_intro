// Accepts two numbers and must return a number.
function getSum(num1: number, num2: number):number{
    return num1 + num2
}

console.log(getSum(1, 3))

// Accepts any type but must return a number.
let mySum = function(num1:any, num2:any):number{
    if(typeof num1 == 'string') {
        num1 = parseInt(num1)
    }
    if(typeof num2 == 'string') {
        num2 = parseInt(num2)
    }
    return num1 + num2
}

console.log(mySum('3', '4'))

// Accepts one or optionally two strings and returns a string
function getName(firstName: string, lastName?: string):string {
    if (lastName == undefined) {
        return firstName
    }
    return `${firstName} ${lastName}`
}

console.log(getName('Mickey', 'Mouse'))
console.log(getName('Nemo'))