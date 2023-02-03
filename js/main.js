/* 1 -> Diseár un Pseudocódigo de un programa que sume dos números leídos por pantalla y muestre el
resultado por terminal */

// let num1 = parseInt(prompt("Introduce un número"));
// let num2 = parseInt(prompt("Introduce otro número"));

// console.log(num1 + num2)

// -----------------------------------------------------------------------------------------------

/* 2 -> Hacer el Pseudocódio de una programa que permita leer 2 números diferentes y nos diga cual 
es el mayor de los numeros*/


// let num1 = parseInt(prompt("Introduce un número"));
// let num2 = parseInt(prompt("Introduce otro número"));

// if (num1 > num2) {
//     console.log("El" + " " + num1 + " " + "es mayor que" + " " + num2 )
// }else if (num1 < num2) {
//     console.log("El" + " " + num2 + " " + "es mayor que" + " " + num1 )
// }else {
//     console.log ("Los números introducidos son el mismo número")
// }


// -----------------------------------------------------------------------------------------------

// /* 3 --> Crear un Pseudocódigo de un programa que almacenen 3 números en 3 variables A, B y C. 
// El diagrama debe decidir cúal es  elmayor y cúal es el menor */

// let num1 = parseInt(prompt("Introduce un número"));
// let num2 = parseInt(prompt("Introduce otro número"));
// let num3 = parseInt(prompt("Introduce otro número"));

// let pmayor = 0;
// let pmenor = 0;

// if (num1 < num2) {
//     pmayor = num2
//     pmenor = num1
// }else {
//     pmayor = num1
//     pmenor = num2
// }

// if (pmayor == pmenor == num3){
//     console.log("Los números introducidos son el mismo número")
// }else {
    
// }


// if (pmayor > num3) {1
//     console.log(pmayor + " " + "es el mayor")    
// }else {
//     console.log(num3 + " " + "es el mayor")
// }


// if (pmenor < num3) {
//     console.log(pmenor + " " + "es el menor")
// }else {
//     console.log(num3 + " " + "es el menor")
// }

// -----------------------------------------------------------------------------------------------

/* 4 --> Realizar el Pseudocódigode un programa que nos calcule la hipotenusa de un triánglo rectángulo, 
conocidos sus dos catetos. */

// let catetoUno = parseInt(prompt("Introduce uno de los catetos en valor umérico"))
// let catetoDos = parseInt(prompt("Introduce el otro careto en valor umérico"))

// console.log("la hipotenusa es " + Math.sqrt((catetoUno**2)+(catetoDos**2)))

// -----------------------------------------------------------------------------------------------

/* 5 --> Realiza un Pseudocódigo de un programa que sume 10 números leídos por teclado*/

// let cantidad = 10

// let snum = 0

// while (cantidad > 0){

//     let num = parseInt(prompt("¿que numero quieres añadir a la suma?"));

//     snum = snum + num

//     cantidad--
// }

// console.log(snum);

// -----------------------------------------------------------------------------------------------

/* 6 --> Modificar el anterior para que permita sumar Nnúmeros. el valor de N se debe leer previamente por teclado */

// let cantidad = parseInt(prompt("¿Que cantidad de números vas a querer sumar?"))

// let snum = 0

// while (cantidad > 0){

//     let num = parseInt(prompt("¿que numero quieres añadir a la suma?"));

//     snum = snum + num

//     console.log(num4)

//     cantidad--
// }

// console.log(snum);


// -----------------------------------------------------------------------------------------------


/* 7 --> Hacer el pseudocódigo de un programa que permita escribir los 100 primeros pares*/

// let cantidad = 100

// for (let i = 1; i <= cantidad; i++) {

//     if (i % 2 === 0){
//         console.log(i + " es un número par");
//     } else {}
// }

// -----------------------------------------------------------------------------------------------


/* 8 --> Sumar N primeros impares. N primeros numeros pares. N primeros múltiplos de 3.*/


// let cantidad = parseInt(prompt("¿Que cantidad de números quieres revisar?"))

// let spar = 0
// let simp = 0
// let strip = 0

// for (let i = 1; i <= cantidad; i++){

//     if(i % 2 === 0){
//         spar = spar + i
//     } else {
//         simp = simp + i
//     };

//     if(i % 3 === 0){
//         strip = strip + i
//     }
// }

// console.log(spar + " es la suma de todos los números pares")
// console.log(simp + " es la suma de todos los números impares")
// console.log(strip + " es la suma de todos los números múltiplos de 3")

// -------------------------------------------------------------------------------------

/* 9 --> Hacer un reloj  PENDIENTE DE COMPROBARCIÓN*/


// for (let horas = 0; horas < 23; horas++){
//     for(let minutos = 0; minutos < 59; minutos++){
//         let segundos = 0
//         while(segundos < 59){
//             setTimeout(()=>{
//                 segundos++;
//                 console.log(segundos);
//             },1000);
//         };
//     };
// };


// const TiempoEspera (){
//     console.log(segundos);

//     if(segundos < 59){
//         setTimeout(()=>{
//             segundos++;
//             TiempoEspera();
//         }, 1000)
//     }
// }



// -------------------------------------------------------------------------------------


/* 10 --> Se piden N numeros al usuario, calcular suma de pares y producto de impares */

// let numN = parseInt(prompt("¿Cuantos numeros quieres sumar?"))

// let sPares = 0
// let pImp = 1
// let cPares = 0
// let i = 1


// while (cPares < numN){
//     if(i%2 === 0){

//         cPares++
//         sPares += i
//     } else {

//         pImp *= i
//     };
//     i++
// };


// console.log(sPares + " es la suma de los " + numN + " primeros numeros pares")
// console.log(pImp + " es la multiplicación de los " + numN + " primeros numeros impares")

// ------------------------------------------------------------


// 11 --> Un año es bisiesto si es múltiplo de 4, exceptuando los múltiplos de 100, que
// sólo son bisiestos cuando son múltiplos además de 400, por ejemplo, el año
// 1900 no fue bisiesto, pero el año 2000 si lo será. Hacer el pseudocódigo de un
// programa que dado un año A nos diga si es o no bisiesto.


// let año = parseInt(prompt("¿Que año te gustaría analizar si es o no bisiesto?"))

// if(año % 4 === 0 || año % 400 ===0 && año % 100 !== 0){
//     console.log(`El ${año} es bisiesto`)
// }else {
//     console.log(`El ${año} no es bisiesto`)
// }


// ------------------------------------------------------------


// 12 --> ¿Caja registradora?



// ------------------------------------------------------------


// 13 --> Dadas dos variables numéricas A y B, que el usuario debe teclear, se pide realizar
// un algoritmo que intercambie los valores de ambas variables y muestre cuánto
// valen al final las dos variables (recuerda la asignación).

//  PISTA https://keepcoding.io/blog/pasar-variable-por-valor-referencia-javascript/

let numA = parseInt(prompt("Introduce un numero"))
let numB = parseInt(prompt("Introduce otro numero"))


numA = numB && numB = numA

console.log(`El primer número introducido es ${numA}`)
console.log(`El primer número introducido es ${numB}`)

































// 13 --> Calculadora inversa 

//CALCULADORA INVERSA

// let num1 = parseInt((prompt("Introduce el primer valor")));
// let num2 = parseInt((prompt("Introduce el segundo valor")));

// let signo = prompt("Dime el signo de la operación").toLowerCase();

// switch(signo){

//     case '+':
//     case 'suma':

//         console.log(num1 + num2);

//     break;

//     case '-':
//     case 'resta':

//         console.log(num1 - num2);

//     break;

//     case '/':
//     case 'division':

//         console.log(num1 / num2);   

//     break;

//     case '*':
//     case 'multiplicacion':

//         console.log(num1 * num2);

//     break;

//     default:
//         console.log("Nooooooo! no has dicho nada coherente");

// }