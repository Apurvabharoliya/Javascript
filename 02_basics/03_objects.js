//singleton
//object.create

// Object literals
const mySym = Symbol("key1")

const JsUsers = {
    name: "Apurva",
    "Full name": "Apurva Bharoliya",
    [mySym]: "myKey1",
    age: 19,
    place: "Surat",
    email: "apurva@gmail.com",
    isLoggedin: false,
    lastLoggedIn: ["Monday","Tuesday"]
}

console.log(JsUsers.email)
console.log(JsUsers["age"])
//Use square brackets('[]') because you don't know that the keys of the objects have space in between them or not, So use square brackets mostly.
console.log(JsUsers["Full name"])
console.log(JsUsers[mySym])