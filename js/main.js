let num1=0;
let num2=0;
let operacion=0;

while(operacion!=9){
    console.log("Bienvenido a la calculadora");
    num1=parseInt(prompt("Ingrese número 1:"));
    num2=parseInt(prompt("Ingrese número 2:"));    
    operacion=parseInt(prompt("Ingresa el numero de operación a realizar (para salir presiona 9):"));
    console.log("1 - Suma");
    console.log("2 - Resta")
    console.log("3 - Mult")
    console.log("4 - Div")
    switch(operacion){
        case 1:
            console.log("Resultado de la suma: "+(num1 + num2));
            break;
        case 2:
            console.log("Resultado de la resta: "+(num1 - num2));
            break;
        case 3:
            console.log("Resultado de la multiplicación: "+(num1 * num2));
            break;
        case 4: 
            console.log("Resultado de la división: "+(num1 / num2));
            break;
    }
}