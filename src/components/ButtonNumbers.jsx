
import { useState } from "react";

const numeros = [0,1,2,3,4,5,6,7,8,9]

    
export default function ButtonNumbers() {
    // aqui le metemos todas las variables/botones con los que vamos a trabajar
    const [number, setNumber] =useState({numero1:"", operando:"", numero2:"", result:"0"});

    function newNum (event) {
    // creamos un condicional cuya condicion es que numero1 va antes del operando y numero 2 despues
        if  (number.operando===""){
        // guardamos en esta variable auxiliar antes de que me rompa el código, porque si necesito mas de una cifra, solo guarda el último numero que aprieto 
            const aux = number.numero1
            const value= event.target.id;
        setNumber ({...number, numero1:aux+value})
        }  else {
            const value= event.target.id;
            const aux = number.numero2
        setNumber ({...number, numero2:aux+value})     
        }
       
    }

    function addOperando (event) {
        const value= event.target.value;
        setNumber ({...number, operando:value})
        
    }
    function Resultado () {
// transformamos primero number.numero1 de string a number y hacemos condicional para que imprima una cosa u otra según sea suma o resta
        if(number.operando === "+") {
           const result = Number(number.numero1) + Number(number.numero2)
        // le damos a number el resultado de result para que nos lo pinte. 
           setNumber ({...number, result})
        }
        
        if(number.operando === "-") {
            const result = Number(number.numero1) - Number(number.numero2)
            setNumber ({...number, result})
        }
        
    }

    return <div>
        <div>
        {numeros.map((item, index) => <div key={index}>
            <button id ={index} onClick={newNum}>{item}</button>
        </div>)}
        <button onClick={addOperando} value="+">+</button>
        <button onClick={addOperando} value="-">-</button>
        <button onClick={Resultado}>=</button>
        <h3>{number.result}</h3>
        </div>
    </div>
}

