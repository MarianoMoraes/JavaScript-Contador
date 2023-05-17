// setear el contador de inicio

let count = 0;

// seleccionar valores y botones 

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

//recorremos el nodo de botones mediante un forEach

btns.forEach( function (btn){
    console.log(btns);
    // agregamos una ESPERA DE EVENTO al realizar CLICK y volvemos a pasar CF ahora para el EVENTO
    btn.addEventListener("click", function (e){
        console.log(btn);
        // definimos una VARIABLE para pasarle el PARAMETRO y decirle que del OBJETO ACTUAL elija la CLASE del elemento
        const clases = e.currentTarget.classList;
            console.log(e);
        // declaramos el IF para decirle que si nuetras clases son uno u otra sume o reste con CONTAINS
            if (clases.contains("decrease")){
            count--;}
            else if (clases.contains("increase")){
            count++;    
            }
            else {
            count = 0;   
            }

        // ahora es donde utilizamos la variable value para poner el numero que de el contador con TEXTCONTENT
            value.textContent = count;

            // Ahora declaramos otro IF para decirle que si es negativo sea color rojo y si es positivo verde

            if (count < 0){
                value.style.color = "red";
            }
            else if (count > 0){
                value.style.color = "green";
            }
            else{
                value.style.color = "black";
            }

            // if (clases.contains("increase"))
            // count++;
            // else (clases.cointains("reset"))
            // count = 0;
    })
})