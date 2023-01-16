/*1. Loop de pares
Debes crear una funcion llamada loopDePares que reciba como parametro un numero y haga un
loop de 0 a 100 mostrando en la consola cada numero del loop.
En caso de que el numero de la iteracion, sumado con el numero pasado por parametro, sea par,
mostra en la consola "El numero x es par". */

function loopDePares(numero) {
    let i=0;
    while (i <=100) {
        // if((i+numero)%2===0){
        //     console.log(`El numero ${i} es par`)
        // } else{
        //     console.log(i)
        // }
        (i+numero)%2===0? console.log(`El numero ${i} es par`) : console.log(i)
        i++
    }
}

/*2. Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una
palabra y haga un loop de 0 a 100 mostrando en la consola cada número del loop.
Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado
por parámetro sea impar, muestre en la consola la palabra pasada por parámetro. */

function loopDeImpares(numero, palabra) {
    let i=0;
    while (i<=100) {
        (i+numero)%2!=0
        ? console.log(palabra) 
        : console.log(i);
        i++
    }
}

/*3. Sumatoria
Debés crear una función llamada `sumattion` que reciba un número como parámetro y que
devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.
Ejemplo:
- sumattion(3) debe retornar 6 porque hace (1 +2 +3)
- sumattion(8) debe retornar 36 */

const SUMATTION = (numero) => {
    let sumattion=0;
    for (let i = 1; i <= numero; i++) {
        sumattion+=i
    } return sumattion
}

/*4. Callback
Debes crear una Función llamada callback que reciba como Parámetros un número y una
Función. Esta deberá retornar el resultado de esa función pasándole como argumento el número
que llega por parámetro.
Teoria de callbacks: click aqui
Ejemplo:
- callback(5, (num)=>{return num*10}) debe retornar 50
- callback(25, (num)=>{return num/5}) debe retornar 5
 */

const CALLBACK = (numero, cb) => cb(numero)

/*5. Nuevo Arreglo
Debés crear una función llamada `nuevoArreglo` que reciba un número como parámetro y que
devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.
Ejemplo:
- nuevoArreglo(5) debe retornar [1,2,3,4,5]
- nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */
function nuevoArreglo(numero) {
    let newArray=[];
    for (let i = 1; i <=numero; i++) {
        newArray.push(i)
    } return newArray
}

/*6. Similar String.split()
Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la
función original Si no sabés cómo funciona, Google puede ayudarte..
Importante: No podés usar el String.split()
Ejemplo:
- split("hola") debe retornar [“h”,”o”,”l”,”a”]
- split("chau") debe retornar [“c”,”h”,”a”,”u”] */
function split(string) {
    let split2=[];
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        split2.push(element)
    } return split2
}

/*7. Carácter del medio
Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y
devuelva sus caracteres del medio.
Ejemplo:
- middleCharacter("plataforma5") debe retornar “f”
- middleCharacter("hola") debe retornar “ol”
- middleCharacter("cosas") debe retornar “s” */

function middleCharacter(string) {
    string.length%2? console.log(string[Math.floor(string.length/2)]) : console.log(string[Math.floor(string.length/2) - 1] + string[Math.floor(string.length/2)])
}

/* 8. Mover ceros a lo último
Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva
otro con los números `0` ordenados al final.
Ejemplo:
- moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
- moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0] */

function moveZeros(array) {
    let sinCeros=array.filter(e=> e != 0);
    let conCeros=array.filter(e=> e === 0);
    return sinCeros.concat(conCeros);
}


/*9. Manejando dos arreglos
Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como
parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.
Ejemplo:
- arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar:
Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a
 */

function arrayHandler(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`)
    }
}

/*10. Mezclando arreglos
Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y
devuelva uno nuevo con los elementos de ambos, de 1 en 1.
Ejemplo:
- mezclarArreglos([1,2,3,4],["h","o","l","a"]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
- mezclarArreglos([1,2,3,4], ["h","p"]) debe retornar [1, “h”, 2, “p”, 3 , 4]
- mezclarArreglos(["h","p"], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4] esta se corta */

function mezclarArreglos(array1, array2) {
    let newArray=[];
    for (let i = 0; i < array1.length; i++) {
newArray.push(array1[i]);
newArray.push(array2[i]);
    } 
    // let sinUn=newArray.filter(e=> e !== undefined)
    return newArray
}

/*11. Arreglos
Investiga los siguientes métodos de los arreglos y replica su funcionamiento de manera lógica al
igual que lo hiciste en el ejercicio número 5:
- 1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”
- 2. “pop([1,2,3,4,5])” debe retornar 5
- 3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]
- 4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50] */

const JOIN = (array, joinn) => {
    let newjoin="";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        newjoin+= element + joinn
    } return newjoin
}

const POP = array => array[array.length-1]

const FILTER = (array, cb) => {
    let filterr=[]
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(cb(element) == true){
filterr.push(element)
        }
        
    }return filterr
}

const MAP= (array, cb) => {
    let newArray=[];
    array.forEach(element => {
   newArray.push(cb(element))
});
return newArray}

/*12. Mínima Suma
Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados y
devuelva la suma entre los dos números más chicos.
Ejemplo:
- minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
- minSum([1, 10, 43, 900, 20, 8]) debe retornar 9
 */

const MINSUM= array => {
    let orden = array.sort((a,b)=> a-b)
    return orden[0] + orden[1]
}

/*13. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número como parámetro y
devuelva un arreglo de objetos que tengan una propiedad llamada `valor` que contenga el valor
del número y sus anteriores 
Ejemplo:
- arregloDeObjetos(5) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor:
5}]
- arregloDeObjetos(3) debe retornar [{valor: 1}, {valor: 2}, {valor: 3}]*/

function arregloDeObjetos(numero) {
    let newArray=[]
    for (let i = 1; i <= numero; i++) {
       newArray.push({valor:i})
    } return newArray
}

/*14. Arreglo de objetos
Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como
parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra
pasada por parámetro y el valor del número y sus anteriores.
Ejemplo:
- arregloDeObjetos(5, "hola") debe retornar [{hola: 1}, {hola: 2}, {hola: 3}, {hola: 4},
{hola: 5 }]
- arregloDeObjetos(3, "chau") debe retornar [{chau: 1}, {chau: 2}, {chau: 3}] */

function arregloDeObjetos(numero, palabra) {
    let newArray=[]
    for (let i = 1; i <= numero; i++) {
       newArray.push({[palabra]:i})
    } return newArray
}

/*15. Única propiedad
Debés crear una función llamada `oneProperty` que reciba un arreglo de objetos como
parámetro y un string. Deberá retornar un nuevo arreglo de objetos, teniendo como parámetro la
propiedad que fue pasada como string.
Ejemplo:
var arreglo = [ { name: "lucas", edad: 20 }, { name: "santi", edad: 22 } ]
- oneProperty(arreglo, "edad") debe retornar [ { edad: 20 }, { edad: 22 } ]
- oneProperty(arreglo, "name") debe retornar [ { name: “lucas”}, { name: “santi” } ] */
var arreglo = [ { name: "lucas", edad: 20 }, { name: "santi", edad: 22 } ]
function oneProperty(array, string) {
    let newArray=[];
  array.forEach(element => {
    for (const key in element) {
        if (key === string) {
           newArray.push({[key] : element[key]})
        }
    }
  }); return newArray
}

/*16. Guerra de palabras
Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y
devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el
abecedario).
Ejemplo:
- warWords("hola", "chau") debe retornar "hola" (36 > 33)
- warWords("love", "friendship") debe retornar "friendship"
 */

var abc =
{a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20
,u:21,v:22,w:23,x:24,y:25,z:26}

function warWords(string1, string2){
    let suma1=0;
    let suma2=0;
    for (let i = 0; i < string1.length; i++) {
        for (const key in abc) {
            if (key === string1[i]) suma1+= abc[key];
            if (key === string2[i]) suma2+= abc[key];
        }
    } suma1 > suma2? console.log(`Gana ${string1} con ${suma1} puntos !`) : console.log(`Gana ${string2} con ${suma2} puntos !` )
}

  /*17. Prefijos Telefónicos
Utils:
Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:
1. Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los
números de prefijos, y como valor, el país correspondiente a cada prefijo.
ejemplo :
{
54: “Argentina”,
55: ”Brasil”,
56: ”Ecuador”,
57: ”Bolivia”
}
2. Validar si los dos primeros números del pasado por parámetro existen en el objeto de
prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a
X”.
3. En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”
Ejemplo:
- validarPrefijo("5412345678") debe retornar “Este número pertenece a Argentina”
- validarPrefijo("5712345678") debe retornar “Este número pertenece a Bolivia”
- validarPrefijo("8012345678") debe retornar “El número no pertenece a nuestros países” */
var prefijos = [54, 55, 56, 57, 58]
var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
function validarPrefijo(numero) {
let prefijos1={}
let preff= numero[0] + numero[1];
for (let i = 0; i < prefijos.length; i++) {
    prefijos1[prefijos[i]] = paises[i]
}    
for (const key in prefijos1) {
    if (key === preff) {
        return `El ${numero} pertenece a nuestros paises`
    }
}
}

function validarPrefijo(num) {
    let prefijos = [54, 55, 56, 57, 58];
    let paises = ["argentina", "brasil", "chile", "colombia", "venezuela"];
    let obj = {};
    for (let p = 0; p < prefijos.length; p++) {
      obj = [prefijos[p]] = paises[p]
    }
   return obj;
   }

function validarPrefijo(numero){
    let objeto= {};
    let prefijo = numero[0] + numero[1]
for (let i = 0; i< prefijos.length; i++) {
    objeto[prefijos[i]]=paises[i]
    }
    for (const key in objeto) {
            if (prefijo == key) {
                return `Este número pertenece a ${objeto[key]}`
            } 
            
        }
        return `El número no pertenece a nuestros países`
}

/*18. {value: key} kelue: vay
Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese
paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado
como input y por qué no es válido.
Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las
propiedades que sean un string puestas como key y el value deberá ser el key anterior.
Ejemplo:
- reverseKeys(344) debería devolver “error, input can’t be a number”
- reverseKeys([ ]) debería devolver “error, input can’t be an Array”
- reverseKeys(‘hola’) debería devolver “error, input can’t be a string”
- reverseKeys(prueba) debería devolver:
{
santi: ‘nombre’,
edad: 22,
‘’de otro planeta”: nacionalidad,
documento: 44444444}*/

function reverseKeys(objeto) {
    let newObj={};
    if(Array.isArray(objeto)){
        return `error, input can’t be an Array`
    };
    if(typeof objeto !== "object"){
        return `error, input can’t be a ${typeof objeto}`
    };for (const key in objeto) {
        if (typeof objeto[key] === "string") {
            newObj[objeto[key]] = key
        } else{
newObj[key]=objeto[key]
        } 
    } return newObj

}

/*19. Palindromo
Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no,
debe retornar true en el caso que sea, y false en el caso que no.
Definición de palíndromo aquí.
Ejemplo:
- palindromo("anilina") debe retornar true
- palindromo("Ana") debe retornar true
- palindromo("Enrique") debe retornar false */

function palindromo(string) {
    let reverseS= string.split("").reverse().join("")
    return string === reverseS? true : false
}

/*20. Rotación de arreglo a la derecha
Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un
nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.
Ejemplo:
- rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
- rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2] */

function rotar(array) {
    let newArray=[];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[array])
        
    }
}
function rotar(array, numero){
    let newArray= [];
    for (let i = 0; i < array.length; i++) {
   console.log(newArray[(i+numero)%array.length] = array[i])
    }
    return newArray;
    }
    
    console.log(rotar([1, 2, 3, 4, 5], 3))

    /*21. Consecutivos similares
Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos
consecutivos similares hay en un string.
Ejemplo:
- consecutivosSimilares("AAAA") debe retornar 3
- consecutivosSimilares("BBBBB") debe retornar 4
- consecutivosSimilares("ABABABAB") debe retornar 0
- consecutivosSimilares("BABABA") debe retornar 0
- consecutivosSimilares("AAABBB") debe retornar 4
 */

function consecutivosSimilares(string) {
    let suma=0;
    let j=1;
    for (let i = 0; i < string.length; i++) {
        if(string[i]=== string[j]){
            suma++
        }
        j++
    } return suma
}
///////////////examen
/*Muestre por consola los números del 1 al 50 teniendo en cuenta que si el número es par hay que multiplicarlo por 10.

Ejemplo de output:

/*
1
20
3
40
5
60
7
80
9
100
 */ 

function mostrar() {
    let i=1;
    while (i<=50) {
        if(i%2===0){
            console.log(i*10)
        } else{
            console.log(i)
        } i++
        
    }
    
}

/*Siguiendo con el ejercicio anterior, se pide crear una Función con 3 parámetros: num1, num2 y palabra. 
Muestre por consola los números del 1 al 50 teniendo en cuenta que: 
si el número es par hay que multiplicarlo por el primer parámetro;
si es impar hay que dividirlo por el segundo parámetro y mostrar la palabra.
 
Ejemplo de output:
fn (10, 2, "P5")
/*
0.5 'P5'
20
1.5 'P5'
40
2.5 'P5'
60
3.5 'P5'
80
4.5 'P5'
100
*/

function mostrar(numero1, numero2, palabra) {
    let i=1;
    while (i<=50) {
        if(i%2===0){
            console.log(i*numero1)
        } else{
            console.log(`${i/numero2} ${palabra}`)
        } i++
        
    }
    
}

 /*3. Restaurante
Nuestro cliente quiere saber qué platos de su restaurante son rentables y cuáles no.
Para esto pide crear una función llamada "rentabilidad" que como parámetro tome un arreglo de objetos con los platos del restaurante:
La función debe devolver un nuevo arreglo con objetos que tengan como key el nombre de cada plato y, como value, el resultado del cálculo que determinará el beneficio-costo.
Ejemplo de output: 
[{ Chop Suey: 200 }, { Paella: -30 }, { Ceviche: 300 }] */
let platos = [{ nombre: 'Chop Suey', costo: 100, precio: 300 }, { nombre: 'Paella', costo: 300, precio: 270 }, { nombre: 'Ceviche', costo: 200, precio: 500 }]

function rentabilidad(array) {
    let newArray=[];
    array.forEach(element => {
        newArray.push({[element.nombre]: element.precio - element.costo})
    }); return newArray
}

/*4. Socios del club
Tomando como único parámetro un objeto user, retorne el mismo siempre y cuando todos sus campos estén completos. 

Si alguno de estos da undefined deberá retornar "Campos incompletos". 
En caso de obtener toda la información retorne el siguiente texto completando los campos:
Hola, ___ ___ (nombre y apellido), tu nombre de usuario es ___ (nombre de usuario) y tu credencial de socio es ___.(número). Gracias por formar parte del club de socios de ___(nombre del club). */

let user={
    nombre : "Lucas",
    apellido : "Rivarola",
    nombreDeUsuario : "LR",
    numero: 1234,
    nombreDelClub: "Plataforma 5"
}

let user2={
    nombre : "Lucas",
    apellido : "Rivarola",
    nombreDeUsuario,
    numero: 1234,
    nombreDelClub
}

function club(user) {
    for (const key in user) {
        if (user[key] === undefined) {
          return "Campos incompletos"
        } 
    }
    return `Hola, ${user.nombre} ${user.apellido}, tu nombre de usuario es ${user.nombreDeUsuario} y tu credencial de socio es ${user.numero}. Gracias por formar parte del club de socios de ${user.nombreDelClub}.`}

    /*5. Tabla de Multiplicar

Cree una Función llamada tablaMult que reciba dos números como parámetros.
La Función deberá mostrar las tablas de multiplicar desde el 1 hasta el número que pase como primer parámetro.

Mediante el segundo parámetro el usuario podrá elegir qué tabla de multiplicar no desea imprimir en pantalla.

tablaMult(5,3)*/

function tablaDeMult(num1, num2) {
    for (let i = 1; i <= num1; i++){
        if(i != num2){
            for (let j = 1; j <= num1; j++) {
               console.log(`${i} * ${j} = ${i*j}`) 
            }
        }   
    }
}

////////////////////////////PLEDU

/*Ejercicios de Práctica Adicional
🚀 Realizá satisfactoriamente todos los ejercicios de este módulo antes de agendar tu Coding Challenge.

1. ToTime
Crea una Función llamada toTime() que tome como argumento un número entero (segundos). La Función debe convertir el valor recibido en un string ("") que describe cuántas horas y minutos comprenden esa cantidad de segundos.

El resultado debe tener el siguiente formato: "X hora (s) y X minuto (s)".

Ejemplos:

toTime(3600) ==> "1 hour(s) and 0 minutes(s)"
toTime(3500) ==> "0 hour(s) and 58 minutes(s)"
toTime(323500) ==> "89 hour(s) and 51 minutes(s)" */

function toTime(number) {
    let hora=Math.trunc(number/3600)
    let minuto=Math.trunc((number%3600)/60)
    let segundos=number%60
    console.log (`Hasta el momento llevamos ${hora} hora(s), ${minuto} minuto(s) y ${segundos} segundo(s)`)
}
hastaElMomento(3661)
hastaElMomento(3500)

/*2. Filterlist
Crea una Función llamada filterList() que tome como argumento un Arreglo de strings y números. La Función debe retornar un nuevo Arreglo sólo con los números. Si el Arreglo filtrado no posee números, tendrá que retornar el siguiente mensaje: "lista de números vacía". En este caso, no se puede usar el método filter().

Ejemplos:

filterList([1,2, "a, "b]) ==> [1, 2]
filterList([1, "a", "b", 0, 15]) ==> [1,0,15]
filterList(["x", "y", "z"]) ==> "lista de números vacía" */

function filterList(array) {
    let newArray=[];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(typeof element === "number"){
            newArray.push(element)
        }
    }
    return  newArray === true ? newArray : "lista vacia"
}

 /*3. Findshort:
Crea una Función findShort() que tome como argumento un string. La Función debe devolver la longitud de la palabra más corta. Si recibe un string vacío, deberá retornar 0.

Ejemplos:

findShort("plataforma 5") ==> 1
findShort("la mostaza es el mejor aderezo") ==> 2
findShort("bootcamp") ==> 8 */

function findShort(string) {
    let palabra=string.split(" ");
    let palabraMasCorta=palabra[0]
    if (string.length === 0) {
        return 0
    };
    if(string.length ===1){
        return string.length
    }
    for (let i = 1; i < palabra.length; i++) {
        if(palabraMasCorta.length > palabra[i].length){
            palabraMasCorta=palabra[i]
        }
    } return palabraMasCorta.length
}

function findShort(string){
    let newArr=string.split(" ");
    let palabraMasCorta=newArr[0];
    if(string.length === 0){
        return 0
    } else if(newArr.length === 1){
        return string.length
    }
    console.log(newArr)
    for (let i = 1; i < newArr.length; i++) {
        if(newArr[0]> newArr[i]){
    palabraMasCorta = newArr[i];
    return palabraMasCorta.length
        } 
        
    }
    }

    /*4. AbbrevName
Crea una Función llamada abbrevName que reciba como parámetro un string (""). Este string tiene que incluir un espacio. La Función deberá convertir el string recibido en iniciales.

Ejemplos:

 abbrevName("Sam Harris") ==> "S.H"
 abbrevName("Evan Cole") ==> "E.C"
 abbrevName("David Mendieta") ==> "D.M" */

 function abbrevName(string) {
    let abrev=string.split(" ")
    let iniciales=""
    for (let index = 0; index < abrev.length; index++) {
        const element = abrev[index];
        iniciales+= `${element[0]}.`
    } return iniciales
 }

 //OTRA FORMA
 function abbrevName(string){
    let newArr= string.split(" ");
    let iniciales=[];
    newArr.forEach(element => {
       iniciales.push(element[0])
    });return iniciales.join(".")
 }

 /*5. sumEvenNombers
Creá una Función llamada sumEvenNumbers que reciba como primer parámetro un Arreglo numérico. La Función debería filtrar solo los números pares y retornar la suma de dichos números.

Ejemplos:

sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])  => 30
sumEvenNumbers([1,3,5,7])  => 0 */

function sumEvenNumbers(array) {
    let numPares = array.filter(e=> e%2===0)
    let suma = numPares.reduce((a,b)=>a+b)
    if ( suma !=undefined) {
        return suma
    }
    return 0
}
function sumEvenNumbers(array){
    let suma =0;
    array.forEach(element => { if(element %2 === 0){
suma += element
    }
    }); return suma
}

/*6. Gravity Flip
Creá una Función llamada flip que reciba como primer parámetro un string (“ascendente” o “descendente”) y como segundo parámetro un Arreglo numérico desordenado. Además, la Función debería ordenar y retornar el Arreglo de acuerdo a la condición recibida por parámetro.

Ejemplos:

flip('ascendente', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
flip('descendente', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1] */

function flip(string, array) {
    if(string === "ascendente"){
        return array.sort((a,b)=> a-b)
    };
    if(string === "descendente"){
        return array.sort((a,b)=> b - a)
    };
}

/*7. getPlanetName
Creá una Función llamada getPlanetName que reciba como parámetro un número. La Función debería retornar el nombre del planeta correspondiente al número recibido por parámetro.

Planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano, Neptuno.

Ejemplos:

getPlanetName(2) => 'Venus'
getPlanetName(4) => 'Marte'
getPlanetName(7) => 'Urano' */

function getPlanetName(numero) {
    switch (numero) {
        case 1:
            console.log(`Mercurio`)
            break;
            case 2:
                console.log(`Venus`)
                break;
                case 3:
                    console.log(`Tierra`)
                    break;
                    case 4:
                        console.log(`Marte`)
                        break;
                        case 5:
                            console.log(`Jupiter`)
                            break;
                            case 6:
                                console.log(`Saturno`)
                                break;
                                case 7:
                                    console.log(`Urano`)
                                    break;
                                    case 0:
                                        console.log(`Nepturno`)
                                        break;
        default: console.log(`El ${numero} es incorrecto`)
            break;
    }
}

/*8. Factorial///////////////////BUSCAR FACTORIAL
Creá una Función que pida al usuario un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
!5 = 5*4*3*2*1 = 120 */

function factorial(numero) {
    let suma = numero
    for (let i = numero-1; i >= 1; i--) {
      suma*=i
    } return suma
}

/*9. Loop de pares.
Creá una Función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100, mostrando en la consola cada número del loop.

En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par” */

function loopDePares(numero) {
    let i=0;
    while (i<=100) {
        if((i+numero)%2===0){
            console.log(`El numero ${i} es par`)
        } else{
            console.log(i)
        } i++
    }
}

/*10. Nuevo Arreglo
Declará una Función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

Ejemplo

nuevoArreglo(5) debe retornar [1,2,3,4,5] 
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */

function nuevoArreglo(numero) {
    let newArray=[];
    for (let i = 1; i < numero; i++) {
        newArray.push(i) 
    } return newArray
}

/*11. Única propiedad
Creá una Función llamada oneProperty que reciba un Arreglo de Objetos como parámetro y un string. Deberá retornar un nuevo Arreglo de objetos, teniendo como parámetro la propiedad que fue pasada como string.

Ejemplo:

var arreglo = [ { name: “lucas”, edad: 20 }, { name: “santi”, edad: 22 } ] 
oneProperty(arreglo, “edad”) debe retornar 
[ { edad: 20 }, { edad: 22 } ] oneProperty(arreglo, “name”) 
debe retornar [ { name: “lucas”}, { name: “santi” } ] */

function oneProperty(array, string) {
    let newArray=[];
    array.forEach(element => {
  for (const key in element) {
    if (key === string) {
        newArray.push({[key]:element[key]})
    } 
  }
    
    }); return newArray }

/*12. Sumatoria
Declará una Función llamada sumattion que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

Ejemplo:

sumattion(3) debe retornar 6 por que hace (1 +2 +3)
sumattion(8) debe retornar 36 */
function sumattion(numero) {
    let suma=0;
    for (let i = 1; i <=numero; i++) {
        suma += i
        
    } return suma
}

/*13. Caracter del medio
Creá una Función llamada middleCharacter que reciba un string por parámetro y devuelva sus caracteres del medio.

Ejemplo:

middleCharacter(“plataforma5”) debe retornar “f”
middleCharacter (“hola”) debe retornar “ol”
middleCharacter (“cosas”) debe retornar “s” */

function middleCharacter(palabra) {
    palabra.length%2? console.log(palabra[Math.floor(palabra.length/2)]) : console.log(palabra[Math.floor(palabra.length/2)-1] + palabra[Math.floor(palabra.length/2)])
}

/*14. Validador de edad para votar
Escribe una Función llamada isOldEnoughToVote. Dado un número, en este caso una edad, isOldEnoughToVote retorna un booleano si la persona de esa edad tiene la edad necesaria para votar legalmente en Argentina.

Ejemplo:

isOldEnoughToVote(21) //output: true
isOldEnoughToVote(18) //output: false */

const VALIDAR= number => number>=21? true : false

/*15. Descuento tienda de autos
Declará una Función llamada descuento para una tienda de autos. La Función debe recibir como parámetro marca y modelo. Si el auto a la venta es un Ford Fiesta, el descuento es de un 5%. Si el auto a la venta es un Ford Focus, el descuento es del 10%.

Ejemplo:

descuento(“ford”,”fiesta”) //output: “5% de descuento”
descuento(“ford”,”focus”) //output: “10% de descuento” */

function descuento(marca, modelo) {
    if(marca === "ford"){
        if(modelo === "fiesta") return `5% de descuento`;
        if(modelo === "focus") return `10% de descuento`;
    } else {
        return `No hay descuento`
    }
}

/*16. Winner
Creá una Función que, dados 2 puntuaciones por parámetro, compare las puntuaciones de dos jugadores y determine quién ha ganado, perdido o empatado. */

const WINNER = (j1, j2) => j1 > j2? `Jugador 1 gana con ${j1} puntos` : `Jugador 2 gana con ${j2} puntos`

/*CODING CHALLENGE PARTE 1

1. Pares e Impares
Creá una Función llamada paresEimpares que reciba 3 parámetros. Los dos primeros números y el tercero una palabra (string ). La Función tiene que mostrar en la consola los números entre el uno y el primer parámetro que recibe, pero debe, en primer lugar, mostrar todos los números pares y, luego, los impares.

Además, cuando el número sea divisible por el segundo parámetro pasado a la Función, en vez de loggearlo, debe imprimir la palabra que recibe como tercer parámetro.

Ejemplo:

paresEImpares(10,7,"prueba")  
2
4
6
8
10
1
3
5
’Prueba’
9*/

function paresEImpares(num1,num2,palabra) {
let i=1;
let j=1;
while (i <= num1) {
    while (j<=num1) {
        if(j%2===0){
            if(j%num2===0){
                console.log(palabra)
            } else{
                console.log(j)
            }
        }
        j++
    }
    if(i%2 !==0){
        if(i%num2===0){
            console.log(palabra)
        } else{
            console.log(i)
        }
    }
    i++
}
}

/*2. Index o Value
Creá una Función llamada min que tome dos parámetros: un Arreglo de números desordenados y un string que sea "index" o "value".

Si el string es "value", la Función deberá imprimir el número más chico del Arreglo. Si el string es "index", la Función devolverá el índice (la posición) del número más chico en el Arreglo.

Ejemplo:

min([5,8,2,3,4,9,1,18], "index") debe retornar 6 
(porque es el índice del 1, que es el menor)
min([5,8,2,3,4,9,1,18], "value") debe retornar 1 
(porque 1 es el menor número) */

function indexOValue(array, string) {/////////no me sale
    let clon=array.slice("");
    let menor=clon.sort((a,b)=>a-b)[0]
    if(string === "index"){
        return array.indexof(menor)
    };
    if(string==="value"){
        return menor
    }
}

//////777
const MIN=(array, string) => { //FUNCIONA
    let min=array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] < array[0]){
            min = array [i]
        }
    }
    if(string === "value"){
return min
    } else if(string === "index"){
        return array.indexOf(min)
    }
}

// COMO ME AYUDO MATI
const min=(array, str)=>{
    let clon= array.slice();
    let min = clon.sort((a,b) => a-b)[0]


if(str ==="value"){
    console.log(`${min}, soy el numero mas chico`);

} else if (str === "index"){
    let indice = array.indexOf(min);
    console.log(`${min}, soy el numero mas chico y estoy en la posicion ${indice}`)
}
}

/*3. Doble Filtro
Creá una Función llamada doubleFilter que reciba como parámetro un Arreglo de Objetos, un continente, y un número de población. La Función filtra el Arreglo solo con los países que sean del continente pasado por parámetro, y además, los que su población sea mayor o igual a la del último parámetro.

Deberá devolver un Arreglo con los nombres de los países de los objetos que cumplan con la condición.
 */

function doubleFilter(array, continente, poblacion) {
    return array.filter(e=> e.continente === continente && e.poblacion >= poblacion)
}

/*4. Doble Filtro II
Ahora, refactorizá la Función doubleFilter que recibirá los mismos tres parámetros pero, en vez de devolver un arreglo con los nombres de los países que cumplan con las condiciones, devolverá un Objeto:

con una key ‘nombres’ que tendrá como valor un arreglo con los nombres de los países;
y otra llamada ‘población total’ cuyo valor sea la suma de las poblaciones de los países filtrados.
Ejemplo:

doubleFilter (paises, "sudamerica", 30000000) 
//debe retornar 
{nombres: ["argentina", "brasil"],
población total: 340000000
} */

function doubleFilter(array, continente, poblacion) {
    let obj={nombres : [],
    poblacionTotal:0}
let filtrado = array.filter(e=> e.continente === continente && e.poblacion >= poblacion);
filtrado.forEach(element => {
    obj.nombres.push(element.nombre);
    obj.poblacionTotal +=element.poblacion
}); return obj
}

////////como lo hice antes
function doubleFilter(array, continente, poblacion) {
    let obj={nombre:[],
    poblacionTotal:0}
    array.forEach(element => { if(element["continente"] === continente && element["poblacion"] >= poblacion){
        obj.nombre.push(element.nombre);
        obj.poblacionTotal += element.poblacion;
    }
    }); return obj
    
}

/*5. Doble Filtro III
En esta oportunidad, la Función doubleFilter debe retornar un Objeto que, además de tener las keys "nombres" y "población total", tenga una key "mayor" y una "menor" en la que guarde el nombre de los países con mayor y menor población respectivamente.

Ejemplo:

doubleFilter(paises, "sudamerica", 30000000) 
//debe retornar 
{
nombres: ["argentina", "brasil"] ,
población total: 340000000,
mayor: ‘brasil’,
menor: ‘argentina’
}
 */

function doubleFilter(array, continente, poblacion) {
    let min=;
    let max=0;
    let obj={nombres : [],
    poblacionTotal:0, 
mayor:"",
menor:""}
let filtrado = array.filter(e=> e.continente === continente && e.poblacion >= poblacion);
filtrado.forEach(element => {
    obj.nombres.push(element.nombre);
    obj.poblacionTotal +=element.poblacion
    if(element.poblacion > max){
        max=element.poblacion
        obj["mayor"] = element.nombre
    } if(min ===0 || element.poblacion < min){
        min=element.poblacion;
        obj["menor"]=element.nombre
    }
}); return obj
}

/////////777
function doubleFilter(array, continente, poblacion) { ///YA ME SALIO BIEN
    let min=0;
    let max=0;
    let obj={nombre:[],
    poblacionTotal:0,
menor:"",
mayor:""}
    array.forEach(element => { if(element["continente"] === continente && element["poblacion"] >= poblacion){
        obj.nombre.push(element.nombre);
        obj.poblacionTotal += element.poblacion;
        if(element.poblacion > max){
            max=element.poblacion
            obj["mayor"] = element.nombre
        } if(min ===0 || element.poblacion < min){
            min=element.poblacion;
            obj["menor"]=element.nombre
        }
        
    }
    }); return obj}

//al ultimo lo hice asi ... OTRA OPCION
function doubleFilter(arr, continente, numPo) {
    let min =0;
    let max =0;
    let obj= {
      nombres : [],
      poblacionTotal : 0,
      mayor : "",
      menor : "",
    }
    console.log(obj)
    let filtrar = arr.filter((element)=>element.continente === continente && element.poblacion >= numPo )
    let copiafiltrar = filtrar.slice()
    obj.nombres = copiafiltrar.map((e)=> e.nombre);
    console.log(filtrar)
  for (let i = 0; i < filtrar.length; i++) {
      obj.poblacionTotal += filtrar[i].poblacion;
      if (filtrar[i].poblacion>max){
        max=filtrar[i].poblacion
        obj.mayor=filtrar[i].nombre
    } if (min===0 || filtrar[i].poblacion < min){
         min=filtrar[i].poblacion;
         console.log(filtrar[i].poblacion)
         obj.menor = filtrar[i].nombre;
    }
      console.log(filtrar[i].poblacion)
    }
  
  return obj;
  } //SOLO CON ASIA NO ME FUNCIONA EL MIN

   /*1. Sin Espacio
Creá una función que remueva los espacios del string pasado como parámetro.

Ejemplo:

Test: "hola como estas hoy ?"
Output:"holacomoestashoy?"  */

function sinEspacio(string) {
    return string.split(" ").join("")
}


/*2. Sin Repeticiones
Creá una función que reciba un arreglo con números repetidos y devuelva otro sin números reiterados.

Ejemplo:

Test: [1,2,2,2,3,3,4,5]
Output : [1,2,3,4,5]  */
function sinRepeat(array) {
    return new Set(array)
}

/*3. Invitaciones
Declará una función que reciba una lista de personas invitadas a una fiesta y que filtre a los mayores de 18 años.

Ejemplo:

Test: [{Kath:20},{Javi:31},{Mario:10},{Paz:9}]
Output : ["Kath"], ["Javi"] */

function listaa(array) {
    let newArray=[];
    array.forEach(element => {
        for (const key in element) {
            if (element[key] >= 18) {
                newArray.push(key)
            }
        }
    }); return newArray
}

/*4. Números Mayores
Creá una función que reciba un arreglo de números y devuelva otro arreglo con los dos números mayores, donde el primero sea el menor de ambos números.

Ejemplo:

Test: [6,5,83,5,3,18]
Output : [18, 83]  */

function mayores(array) {
    let mayores=array.sort((a,b)=> b-a);
    let mayoress=[]
    mayoress.push(mayores[1]) 
    mayoress.push(mayores[0])
    return mayoress
}

///////////
function numMayores(arr) {
    arr.sort((a,b)=> b-a)
    console.log(arr)
    let newArr=[];
    newArr.push(arr[1]);
    newArr.push(arr[0]);

    return newArr}

    /*5. Números Narcisistas
Creá una función para determinar si un número es narcisista. Un número narcisista es aquél que es igual a la suma de cada uno de sus dígitos elevados a la “n” potencia (donde “n” es el número de cifras del número).

Ejemplo 1: 153 es un número narcisista ya que 1 elevado a 3 + 5 elevado a 3 + 3 elevado a 3 = 1 + 125 + 27 = 153.

Ejemplo 2:

Test: 371
Output: True

Test: 369
Output: False */

function narcisita(numero) {
    let elevado=`${numero}`.length
    let suma=0;
    for (let i = 0; i < `${numero}`.length; i++) {
        suma += Math.pow(`${numero}`[i],elevado)
    } return suma === numero? true : false
}

/*1. Bienvenida
Escribe una función que luego de tres segundos escriba por consola "Bienvenido a tu challenge" */

function bienvenida() {
 setTimeout(()=> {
        console.log("Bienvenido a tu challenge")
    }, 3000)
}


/*2. Fecha De Hoy
Escribe una función que indique si la fecha de hoy es par o impar. */
//GET DATE ES DEL OBJETO DATE

function fecha() {
    let hoy= new Date().getDate();
    return hoy%2===0? `Es par` : `Es impar`
}

/*3. Coincidencias
Escribe una función que reciba dos parámetros: el primero, un arreglo y, el segundo, un número. Vas a retornar los elementos del arreglo desde el primer elemento hasta el índice que coincide con el segundo parámetro de la función (el número).

Si el valor del segundo parámetro es mayor al length del arreglo va a retornar un texto que indique que el arreglo no tiene la cantidad suficiente de elementos. */

function coincidencias(array, numero) {
    let elementos=[];
    if(array.length<numero){
        return `el arreglo no tiene la cantidad suficiente de elementos`
    }
    for (let i = 0; i <= numero; i++) {
        elementos.push(array[i]);
    } return elementos
}
//////////////antes
function coincidencias(array, numero) {
    if(array.length < numero){
        return "el arreglo no tiene la cantidad suficiente de elementos"
    }
    for (let i = 0; i < numero; i++) {
        const element = array[i];
console.log(element)        
    }
}

//PLEDU
function showElements(arr, num) {
    if (arr.length >= num) {
      return arr.slice(0, num);
    } else {
      return "El arreglo no tiene suficientes elementos";
    }
   }

   /*4. Misma Letra
Escribe una función que reciba dos parámetros: un arreglo de objetos que tiene la propiedad "producto y precio" y una letra. La función debe devolver la sumatoria de todos los productos que inicien con la misma letra que se pasa por parámetro. */
function misma(array, letra) {
    let suma=0;
    array.forEach(element => {
        if(element.producto[0].tolowercase === letra.tolowercase){
            suma+=element.precio
        }
    }); return suma
}

//////antes
function productos(array, letra) {
    let suma=0;
    array.forEach(element => { if(element.producto[0] === letra){
        suma+= element.precio
    }
    });return suma
    
}
///pledu
function sameVowel(arr, letter) {
    let total = 0;
    arr.map((item) => {
      if (item.producto[0].toLowerCase() === letter.toLowerCase()) {
        total += item.precio;
      }
    });
    return total;
   }

/*5. Generala
Se pide crear una función que replique el juego de la generala. La función debe retornar cuántos intentos lleva conseguir la "generala". Es decir, tirar los 5 dados y que todos muestren el número 6.*/

let generalaWin = [6, 6, 6, 6, 6]; 

function generala(array){
let migenerala=[];
let intentos=0;
for (let i = 0; i < array.length; i++) {
    migenerala=[];
if(migenerala.length != array.length){
    let dado=Math.ceil(Math.random()*6);
    if(dado === 6){
        migenerala.push(dado)
    }
} intentos++
}  return intentos
}
/////////
    
const GENERALA=(arr)=>{
    let intentos=0;
    let generala=[];
    while (generala.length != arr.length) {
        generala=[];
        for (let i = 0; i < arr.length; i++) {
            let dadoVal = Math.ceil(Math.random()*6);
            if (dadoVal ==6) {
                generala.push(dadoVal);
            }     
        }
        contadorDeIntentos++;
    }
    return contadorDeIntentos;
  }
//pledu
let generalaWin = [6, 6, 6, 6, 6];
function generalaGame(arr) {
  let generala = [];
  let contadorDeIntentos = 0;
  while (generala.length != arr.length) {
    generala = []; // Reset (limpio mi arreglo y vuelvo a empezar)
    for (let i = 0; i < arr.length; i++) {
      let dadoVal = Math.ceil(Math.random() * 6);
      // dadoVal = 1 al 6
      if (dadoVal == 6) {
        generala.push(dadoVal);
      }
    }
    contadorDeIntentos++;
  }
  return contadorDeIntentos;
}
/*En este ejercicio deberás crear la Función isUniform que tome un Arreglo como Parámetro y devuelva true si todos los elementos del Arreglo son idénticos. De lo contrario, deberá devolver false.

⚠️ Importante: Salvo que sea necesario, tu Función no debe recorrer todo el Arreglo si no es idéntico. Es decir, al momento que encuentre una diferencia deberá cortar. */

function isUniform(array) {
    for (let i = 1; i < array.length; i++) {
        if(array[0]!==array[i]){
return false
        }
        
    } return true
}

isUniform([1,2,1,1,3]);
isUniform([2,2,2,2,2,2,2])