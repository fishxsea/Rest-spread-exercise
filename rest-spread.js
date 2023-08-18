function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

// Refactor it to use the rest operator & an arrow function:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -3];
const filterOutOddsRest = (...args) => args.filter( num => num % 2 === 0);
console.log(filterOutOddsRest(...numbers));



// Write a function called findMin that accepts a variable number of arguments and returns the 
// smallest argument.
const findMin = (...args) => Math.min(...args)
console.log(findMin(...numbers))


// Write a function called mergeObjects that accepts two objects and returns a new object which 
// contains all the keys and values of the first object and second object.
const obj1 = {
    name: 'aaron',
    hobby: 'music production'
}

const obj2 = {
    pets: ['sphynx cat', 'siamese cat']
}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
console.log(mergeObjects(obj1, obj2))


// Write a function called doubleAndReturnArgs which accepts an array and a variable number of 
// arguments. The function should return a new array with the original array values and all of 
// additional arguments doubled.
const doubleAndReturnArgs = (arg, ...args) => [...arg, ...args.map(v => v * 2)]



//--------------------------------------------
// For this section, write the following functions using rest, spread and refactor these functions 
// to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const item = items[Math.floor(Math.random() * items.length) ]
    return [...items].filter(i => i !== item)
}
console.log(removeRandom(numbers))

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, array2]

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val}
}

console.log(addKeyVal({name: 'aaron'}, 'favColor', 'blue'))


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}

const about = {
    name: 'gavin',
    breed: 'sphynx',
    vocal: 'yes'
}
console.log(removeKey(about, 'vocal'))

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}

}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    return {...obj, [key]: val}

}


