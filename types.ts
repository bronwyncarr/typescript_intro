let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

myString = 'Hello world'.concat(' from a string');
myNum = 22 + 4.3;
myBool = true;
myVar = 'hello'
myVar = false;

console.log(myString)
console.log(myNum)
console.log(myBool)
console.log(myVar)

let strArr: string[]
let numArr: number[]
let boolArr: boolean[]
let strNumTuple: [string, number] // Types must have this order. Can have any type after last defined type.
let myVoid: void = null // Can be assigned a value in one line.
let myNull: null = null
let myUndefined: undefined = undefined

strArr = ['Hello', 'World']
numArr = [1,2,3]
boolArr = [true, false]
strNumTuple = ['Hello', 4]
myVoid = undefined

console.log(strArr)
console.log(numArr)
console.log(boolArr)
console.log(strNumTuple)
console.log(myVoid)
console.log(myNull)
console.log(myUndefined)


