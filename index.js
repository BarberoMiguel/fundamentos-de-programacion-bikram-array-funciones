var arrayVacio = [];
var arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayNumerosPares = [0, 2, 4, 6, 8];
var arrayBidimensional =  [[0, 1, 2], ['a', 'b', 'c']];
function suma(a,b) {
    return a+b;
}
function  potenciacion(a,b) {
    let c = 1;
    for (i = 0; i < b; i++) {
        c = c * a; 
    }
    return c;
}
function separarPalabras(frase) {
    let palabra = "";
    let lista = [];
    for (i = 0; i <= frase.length; i++) {
        if (frase[i] == " " || i == frase.length) {
            lista.push(palabra);
            palabra = "";
        } else {
            palabra += frase[i];
        }
    }
    return lista; 
}
function repetirString (frase,num) {
    let palabra = "";
    for (i = 1; i <= num; i++) {
        palabra += frase;
    }
    return palabra;
}
function esPrimo(num) {
    let boolean = true;
    for (i = 2; i <= Math.sqrt(num); i++) {
        if ((num / i) % 1 === 0) {
          boolean = false;
          break;
        }
    }
    return boolean;
}
function ordenarArray(array) {
    return array.sort((a, b) => a - b);
}
function obtenerPares(array) {
    let pares = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pares.push(array[i]);
        }; 
    }
    return pares;
}
function pintarArray(array) {
    let cadena = "";
    cadena += "[";
    cadena += array.join(", ");
    cadena += "]";
    return cadena;
}
function sumaruse(num) {
    let palabra = "hola" + num;
    return palabra;
}
function arrayMapi(array) {
    var arrayanswer = [];
    for (let i = 0; i < array.length; i++) {
        arrayanswer.push(sumaruse(array[i]));
    }
    return arrayanswer;
}
function eliminarDuplicados(array) {
    for (i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                array.splice(j, 20);
            } 
        } 
    }
    return array;
}
var arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
var  holaMundo = ["Hola", "Mundo"];
var loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
var arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
function multiplicacion(a,b) {
    return a*b;
}
function division(a,b) {
    return a/b;
}
function esPar(num) {
    let boolean = false;
    if (num % 2 == 0) {
        boolean = true;
    }
    return boolean;
}
function resta(a,b) {
    return a-b;
}
function suma(a,b) {
    return a+b;
}
function arrayFunciones(array,suma,resta,multiplicacion) {
    var array1 = [];
    array1.push(suma(a,b));
    array1.push(resta(a,b));
    array1.push(multiplicacion(a,b));
    return array1;
}
function ordenarArray2(array) {
    array.sort((a, b) => b - a);
    return array;
}
function  obtenerImpares(array) {
    let impares = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            impares.push(array[i]);
        }; 
    }
    return impares;
}
function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}
function multiplicarArray(array) {
    let multi = 1;
    for (let i = 0; i < array.length; i++) {
        multi = multi * array[i];
    }
    return multi;
}