const Marvel_heros = ["Thor", "Ironman", "Spider-man", "Hawkeye"]
const DC_heros = ["Batman", "Superman", "Flash", "Joker"]

// Marvel_heros.push(DC_heros)

// console.log(Marvel_heros);
// console.log(Marvel_heros[4][1])

// const allHeros = Marvel_heros.concat(DC_heros)
// console.log(allHeros);
// console.log(allHeros[6]);

//spread operator

// const all_heros = [...Marvel_heros,...DC_heros]
// console.log(all_heros);

// flat function

const array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(array);
const another_array = array.flat(Infinity)
console.log(another_array);

