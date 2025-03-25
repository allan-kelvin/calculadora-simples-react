import { useState } from "react";

function Calculadora() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    function somar() {
        let soma  = num1 + num2;
        alert(`A Soma é: ${soma}`);
    }
    function subtrair() {
        let subtrair  = num1 - num2;
        alert(`A Subtração é: ${subtrair}`);
    }
    function multiplicar() {
        let multiplicar  = num1 * num2;
        alert(`A Multiplicação é: ${multiplicar}`);
    }
    function dividir() {
        let dividir  = (num1 / num2).toFixed(2);
        alert(`A Divisão é: ${dividir}`);
    }
    return (
        <div id="container">
            <h2>Digite dois números</h2>
            <input type="text" name="num1" id="num1" placeholder="0..."
            onChange={(evento)=>{
                setNum1(Number(evento.target.value));
                console.log(num1);
            }}
            />
            <br />
            <input type="text" name="num2" id="num2"  placeholder="0..."
            onChange={(evento)=>{
                setNum2(Number(evento.target.value))
            }}
            />

            <br />
            <hr />
            <button id="btnSomar" onClick={somar}>Somar</button>
            <button id="btnSomar" onClick={subtrair}>Subtrair</button>
            <button id="btnSomar" onClick={dividir}>Dividir</button>
            <button id="btnSomar" onClick={multiplicar}>Multiplicar</button>
        </div>
    )
}

export default Calculadora;