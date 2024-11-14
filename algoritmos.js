function saludar(){
    console .log ("Hola Mundo")
    alert("Hello World")
}

//ALGORITMO QUE REALICE UNA SUMA ENTRE DOS VALORES INGRESADOS POR EL USUARIO

function sumar(){
    //DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION DEL ALGORITMO
    let n1 = 0;
    let n2 = 0;
    let sumar = 0;
    //SOLICITAR Y CAPTURAR LOS VALORES INGRESADO POR PARTE DEL USUARIO
    n1 = parseInt (prompt('Por favor ingrese el primer valor a sumar '))
    n2 = parseInt (prompt('Por favor ingrese el segundo valor a sumar '))
    //REALIZAR EL PROCEDIMIENTO
    sumar = n1 + n2
    //IMPRIMIR EL RESULTADO EN PANTALLA
    console .log('El resultado de la suma es ' + sumar)
    alert('El resultado de la suma es ' + sumar )    
}

// ALGORITMO QUE REALICE UNA SUMA, RESTA, MULTIPLICACION O DIVISION ENTRE DOS VALORES INGRESADOS POR EL USUARIO

function operaciones(){
    let op1 = 0
    let op2 = 0
    let sumaop = 0
    let restaop = 0
    let multipliacionop = 0
    let divisionop = 0
    op1 = parseInt (prompt('Ingrese el valor'))
    op2 = parseInt (prompt('Ingrese el valor'))

    sumaop = op1 + op2
    restaop = op1 - op2 
    multiplicacionop = op1 * op2
    divisionop = op1 / op2

    alert('El resultado de la suma es ' + sumaop)
    alert('El resultado de la resta es ' + restaop)
    alert('El resultado de la multipliacion es ' + multipliacionop)
    alert('El resultado de la division es ' + divisionop)

}

//ALGORITMO QUE DETERMINE EL CUADRADO DE UN NUMERO
function numCuadrado(){
    let num1 = 0 
    let total = 0
    num1 = parseInt(prompt('Ingrese el numero para hayar el cuadrado '))
    total = num1 * num1
    alert('El cuadrado de su numero es ' + total )
}

//REALIZAR UN ALGORITMO QUE DETERMINE EL AREA DE UN CUADRADO
function areaTriangulo() {
    let base = 0
    let altura = 0
    let area = 0

    base = parseFloat(prompt('Ingrese el valor de la base del triángulo'))
    altura = parseFloat(prompt('Ingrese el valor de la altura del triángulo'))
    area = (base * altura) / 2
    alert('El área de su triángulo es ' + area)
}


//REALIZAR UN ALGORITMO QUE DETERMINE 
//LA MEDIDA EN KILOMETROS METROS Y CENTRIMETROS DE UN VALOR DADO EN PULGADAS

function convertirPulgadas() {
    let pulgadas = parseFloat(prompt('Ingrese el valor en pulgadas'))
    
    let kilometros = pulgadas * 0.0000254
    let metros = pulgadas * 0.0254
    let centimetros = pulgadas * 2.54

    alert('La medida en kilómetros es:   ' + kilometros + 
         'La medida en metros es:   ' + metros + 
        'La medida en centímetros es:   ' + centimetros)
}


//REALIZAR UN ALGORITMO QUE PREGUNTE AL USUARIO A QUE MONEDA QUIERE CONVERTIR EL PESO COLOMBIANO ENTRE DOLLAR, EURO Y YENES
function conversionMoneda() {

let monedaDestino = prompt("¿A qué moneda desea convertir el peso colombiano? (dolar, euro, yen)")
let pesoColombiano = parseFloat(prompt("¿Cuántos pesos colombianos deseas convertir?"))
let resultado

switch(monedaDestino) {
  case "dolar":

    resultado = pesoColombiano * 0.00026;
    alert(pesoColombiano + " pesos colombianos equivalen a " + resultado + " dólares.")
    break
  case "euro":
    resultado = pesoColombiano * 0.00024
    alert(pesoColombiano + " pesos colombianos equivalen a " + resultado + " euros.")
    break
  case "yen":
    resultado = pesoColombiano * 0.036;
    alert(pesoColombiano + " pesos colombianos equivalen a " + resultado + " yenes.")
    break
  default:
    alert("Moneda no válida. Por favor, ingresa 'dólar', 'euro' o 'yen'.")
}
}


//ALGORITMO QUE DETERMINE SI UN NUMERO ES PAR IMPAR
function esParOImpar() {

    let numero 
 
numero = parseInt(prompt('Ingrese un numero'))

if(numero % 2 == 0){
    alert('El numero es par')
  }else{
    alert('El numero es Impar')
  }    
}


//ALGORITMO QUE DETERMINE EL MAYOR DE DOS NUMEROS INGRESADOS
function numeroMayor(){
    let n1 = 0
    let n2 = 0

    n1 = parseInt(prompt('Ingrese el primer numero'))
    n2 = parseInt(prompt('Ingrese el segundo numero'))
    
    let mayor

    if (n1>= n2){
        mayor = n1
    } else {
        mayor = n2
    }
    
    alert ('El numero mayor es ' + mayor)
}

//ALGORITMO QUE DETERMINE EL MENOR DE TRES NUMEROS INGRESADOS
function numeroMenor(){
    let n1
    let n2
    let n3
    
    n1 = parseInt(prompt('Ingrese el primer numero'))
    n2 = parseInt(prompt('Ingrese el segundo numero'))
    n3 = parseInt(prompt('Ingrese el tercer numero'))

    if (n1<n2 && n1<n3){
        alert('El numero menor es ' + n1)
    } else if (n2< n1 && n2 < n3) {
        alert('El numero menor es ' + n2)
    }else{
        alert('El numero menor es ' + n3)
    }
}


//EL COLEGIO ABC REQUIERE UN SISTEMA QUE LE PERMITA VALIDAR A X ESTUDIANTE  SI APROBO O REPROBO X MATERIA 
//TENIENDO EN CUENTA QUE SON 9 NOTAS DEL 1 AL 10 Y SE APRUEBA CON UNA NOTA DE 6.1//
function aproboNotas() {
    let suma = 0;
    let cantidadNotas = 9;
    
    for (let i = 1; i <= cantidadNotas; i++) {
        let nota = parseFloat(prompt('Ingrese la nota ' + i));
        suma += nota;
    }

    let promedio = suma / cantidadNotas;

    if (promedio >= 6.1) {
        alert('El estudiante aprobó con un promedio de ' + promedio.toFixed(2));
    } else {
        alert('El estudiante reprobó con un promedio de ' + promedio.toFixed(2));
    }
}

//UN INDIVIDUO DESEA INVERTIR SU CAPITAL EN UN BANCO Y REQUIERE SABER CUANTO DINERO GANARA DESPUES 
//DE N NUMERO DE AÑOS TENIENDO EN CUENTA QUE EL BANCO PAGA UN INTERES MENSUAL DEL 0,7%
function calcularInversion() {
    let capitalInicial = parseFloat(prompt('Ingrese el capital inicial que desea invertir'));
    let años = parseInt(prompt('Ingrese el número de años que desea invertir'));
    
    let interesMensual = 0.007;
    let meses = años * 12;
    let capitalFinal = capitalInicial;

    for (let i = 1; i <= meses; i++) {
        capitalFinal += capitalFinal * interesMensual;
    }

    alert('El capital después de ' + años + ' años será de ' + capitalFinal.toFixed(2));
}
