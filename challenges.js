/* Ejercicio 1 -------

Crea una función llamada "forEach" que reciba dos parámetros:
un array y una callback function.

La función "forEach" tiene que aplicar la callback function a 
cada elemento del array. 

Test case:
forEach(["a", "b", "c"], e => {console.log(e)}); // a b c
*/


function forEach(arr, cb) {
    // Tu código aquí
  }






/* Ejercicio 2 -------

Crea una función llamada "map" que reciba
dos parámetros: un array y una callback function.

La función "map" tiene que "retornar" un nuevo array. Cada
elemento de este nuevo array tiene que ser el resultado
de la aplicación de la callback function a cada
elemento del array que se recibe como parámetro.

Test case:
console.log(map([5, 6, 7], e => e * 2)); // [10, 12, 14]
*/




function map(arr, cb) {
    // Tu código aquí
  }




/* Ejercicio 3 -------


Crea una función llamada "filter" que reciba
dos parámetros: un array y una callback function.

La función "filter" tiene que "retornar" un nuevo array
que solo incluya aquellos elementos que hayan pasado
la callback function. Es decir, la callback function
devolverá "true" o "false" por cada elemento y solo los 
que sean true pasarán "el filtro" y serán incluidos en el 
nuevo array.

Test case:
console.log(filter([5, 6, 7, 8], e => e % 2 === 0 ? true : false)); // [6, 8]

*/




function filter(arr, cb) {
    // Tu código aquí
  }







/* Ejercicio 4 -------

Crea una función llamada "every" que reciba
dos parámetros: un array y una callback function.

La función "every" se parece a la "filter" en el hecho
de qué la callback function se aplica como "verificación".
La diferéncia, es que "every" retorna "true"
si TODOS los elementos del array pasan la verificación.
Si no la pasan TODOS, retorna "false".
Intenta escribirla!

Test cases:
console.log(every([1, 3, 5], n => n < 6)); // true
console.log(every([2, 4, 6], n => n < 6)); // false
console.log(every([2, 4, 6, 2], n => n < 6)); // false

*/



function every(arr, cb) {
    // Tu código aquí
  }




/* Ejercicio 5 -------

Has escrito "forEach", "map", "filter" y "every"
desde cero. Todos estos métodos ya existen en
el prototype de Array de JavaScript.

Para este ejercicio, utiliza el método "forEach"
nativo (ya existente) para sumar todos los elementos 
del array "nums".
Utiliza una arrow function.
*/



const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;

nums.forEach((e) => {
  // Tu código aquí
});

// console.log(sum);




/* Ejercicio 6 -------

Utiliza el método "map" nativo (ya existente) para transformar
cada uno de los elementos de "names" en una salutación.

Test case:
["Sofia", "Pedro", "Mia"] ha de retornar ["Hello, Sofia!", "Hello, Pedro!", "Hello, Mia!"]
*/


  

const names = ["Sofia", "Pedro", "Mia"];

// const greetings = // Tu código aquí

// console.log(greetings);






/* Ejercicio 7 -------

Utiliza el método "map" para crear un duplicado
a partir de un array. Escribe este ejercicio de la
forma más corta que puedas.

Test case:
["JavaScript", "Python", "Go"] ha de retornar ["JavaScript", "Python", "Go"]

*/


const langs = ["JavaScript", "Python", "Go"];

// const duplicate = // Tu código aquí

// console.log(duplicate);




/* Ejercicio 8 -------

Utiliza el método "map" para crear un duplicado
de este array. El resultado debería ser como el del 
Test case.

Test case:
["Grace Hopper", "Ruth Bader Ginsburg", "Ada Lovelace"]
*/



const people = [
    { firstname: "Grace", lastname: "Hopper" },
    { firstname: "Ruth", lastname: "Bader Ginsburg" },
    { firstname: "Ada", lastname: "Lovelace" },
  ];
  
  // const fullnames = // Tu código aquí
  
  // console.log(fullnames);




/* Ejercicio 9 -------

Utiliza el método "map" para crear un duplicado de un array con objetos.
Cada objeto del nuevo array tiene que preservar los datos originales 
y añadir el "fullname".
Utiliza el array "people" del ejercicio anterior.

Test case:
El resultado debería ser [
  { firstname: "Grace", lastname: "Hopper", fullname: "Grace Hopper" },
  {
    firstname: "Ruth",
    lastname: "Bader Ginsburg",
    fullname: "Ruth Bader Ginsburg",
  },
  { firstname: "Ada", lastname: "Lovelace", fullname: "Ada Lovelace" },
]
*/


// const fullobjects = // Tu código aquí

// console.log(fullobjects);




/* Ejercicio 10 -------

Utiliza el método "map" para crear un array con los valores "true"
o "false" según si el número que ocupa esa posición es par.

Test case:
[3, 7, 24, 1, 66, 89, 88, 23, 54, 54, 12, 9] Tendría que "retornar":
[false, false, true, false, true, false, true, false, true, true, true, false]

*/


const numbers = [3, 7, 24, 1, 66, 89, 88, 23, 54, 54, 12, 9];

// const areEven = // Tu código aquí

// console.log(areEven);



/* Ejercicio 11 -------

Utiliza el método "map" para crear un array con los valores "true"
o "false" según si el número que ocupa esa posición es igual
al índice de la posición dentro del array (empezando por 0).

Test case:
[1,3,2,2,4,13,8,6,8,10,4,12,12] debería "retornar":
[false, false, true, false, true, false, false, false, true, false, false, false, true]
*/


const moreNumbers = [1, 3, 2, 2, 4, 13, 8, 6, 8, 10, 4, 12, 12];

// const areInPosition = // Tu código aquí

// console.log(areInPosition);




/* Ejercicio 12 -------

Utiliza el método "filter" para descartar los números
mayores de 50.

Test case:
[1, 34, 83, 65, 3, 24, 98] debería "retornar" [1, 34, 3, 24]
*/


const numsList = [1, 34, 83, 65, 3, 24, 98];

// const smallNums = // Tu código aquí

// console.log(smallNums);




/* Ejercicio 13 -------

Utiliza el método "filter" para descartar los números
pares.
Utiliza el array anterior "numList"

Test case:
[1, 34, 83, 65, 3, 24, 98] debería "retornar" [1, 83, 65, 3]
*/


// const oddList = // Tu código aquí

// console.log(oddList);







/* Ejercicio 14 -------

Utiliza el método "filter" para conservar los números
más grandes que el índex que ocupan en el array.
(empezando por 0).

Test case:
[1, 0, 1, 3, 5, 6, 6, 1, 9] debería "retornar" [1, 5, 6, 9]
*/


const moreNums = [1, 0, 1, 3, 5, 6, 6, 1, 9];

// const filteredList = //  Tu código aquí

// console.log(filteredList);





/* Ejercicio 15 -------

Utiliza el método "filter" para excluir a las personas cuyo
nombre (firstname) no contiene la letra "a". 
Utiliza el array "people" de los ejercicios anteriores.

Test case:
[
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ruth", lastname: "Bader Ginsburg" },
  { firstname: "Ada", lastname: "Lovelace" },
]

debería "retornar"

[
  { firstname: "Grace", lastname: "Hopper" },
  { firstname: "Ada", lastname: "Lovelace" },
]
*/


// const peopleWithA = //  Tu código aquí

// console.log(peopleWithA);





/* Ejercicio 16 -------

Utiliza el método "every" para "retornar" "true" si cada
palabra del siguiente array es un palíndromo (es decir,
si se lee igual tanto desde el principio como desde el final).

Puedes utilizar este código para invertir un string:

.split('').reverse().join('')

Fíjate en qué el código está dentro de otra función. 
Eso nos permite testear fácilmente diversos casos :)

Test cases:
["deified", "civic", "radar", "level", "rotor"] retorna true
["kayak", "reviver", "racecar", "reader", "madam"] retorna false
*/

const wordList1 = ["deified", "civic", "radar", "level", "rotor"];
const wordList2 = ["kayak", "reviver", "racecar", "reader", "madam"];

function checkPalindromes(list) {
  return list.every(() => {
    // afegeix els paràmetres necessaris a la línia de sobre
    // i acaba d'escriure el codi aquí
  });
}

// console.log(checkPalindromes(wordList1));
// console.log(checkPalindromes(wordList2));




/* Ejercicio 17 -------

Ves a la documentación de MDN y "Eloquent JavaScript" y lee sobre
el funcionamiento del método "reduce".
Después, utiliza un "reduce" para sumar todos los elementos en "numsList"
*/


const total = numsList.reduce(() => {
    // añade los parámetros necesarios a la línea superior
    // y termina de escribir tú código aquí
  });
  
  // console.log(total); // debería retornar 308
  



/* Ejercicio 18 -------

Utiliza el método "filter" para crear un array que contenga
solo aquellos números que son pares y que ocupan una posición
par en el array, o aquellos números que son impares y que ocupan
una posición impar en el array.

Test case:
[1, 34, 83, 65, 3, 24, 98] debería "retornar" [65,98]
*/


// const oddList = // tú código aquí

// console.log(oddList);





/* Ejercicio 19 -------

Cada array dentro del siguiente array representa la edad de cada 
jugadora de un equipo de básquet. Descarta aquellos equipos que 
tengan menos de 3 jugadoras mayores de 20 anys.
Pista: puedes utilizar una HOF dentro de la callback de otra HOF.

Test case:
[[20,31,19,18,22],[20,31,16,21,21],[17,31,16,21,21],[18,19,19,20,32]] 
debería "retornar" [[20, 31, 16, 21, 21], [17, 31, 16, 21, 21]]
*/


// let olderTeams = // tú código aquí

// console.log(olderTeams);






/* Ejercicio 20 -------

Ahora, en vez de retornar los arrays de los equipos, calcula
la edad total de cada equipo retornando/ devolviendo la suma 
de las edades de las jugadoras.
Es decir, crea un array que contenga las edades acumuladas de 
las jugadoras de aquellos equipos que tengan más de 2 jugadoras 
mayores de 20 años.
Solo puedes utilizar HOFs, pero puedes utilizar tantas como necesites.

Test case:
[[20,31,19,18,22],[20,31,16,21,21],[17,31,16,21,21],[18,19,19,20,32]] 
debería retornar [109,106]

*/


// olderTeams = // tú código aquí

// console.log(olderTeams);