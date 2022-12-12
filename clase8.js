array1 = [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]



function laClaveSecreta(array) {
let sinAsterisco = array.filter((item) => item !== '*')
sinAsterisco.reverse();

let junto = sinAsterisco.join("");

return junto
    
}

console.log(laClaveSecreta(array1));
