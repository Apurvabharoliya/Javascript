// Primitive
// 7 types: String,Number,Boolean,NULL,undefined,Symbol,BigInt
// Primitive data types are also known as call by value

// Non Primitive
// Arrays,Objects,Function
// Non primitive data type is also known as call by reference 

const score = 100
const scoreValue = 100.3

// the both values above are considered as number

const isLoggedIn = false    //boolean
const outsideTemp = null    //null
let userEmail;  //undefined
const id = Symbol('123')

const heros = ["shaktiman","naagraj","doga"]
let myObj ={
                name: "Apurva",
                age: "23"
            }

const myFunction = function(){
    console.log("Hello World!!");
    
}