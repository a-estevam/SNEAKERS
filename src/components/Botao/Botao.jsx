import styles from "./Botao.module.css"
import { useState } from "react"

function Botao(){

    const [valor, setValor] = useState(1);

    const changeValorMais = () => {
        setValor (valor + 1)
    }

    const changeValorMenos = () => {
        if (valor > 0) {
            setValor(valor - 1);
        } else {
            setValor(0);
        }
        }
    


    return(
        <div className={styles.BotaoContent} >
            <button onClick={changeValorMenos}>-</button>
            <h4>{valor}</h4>
            <button onClick={changeValorMais}>+</button>
        </div>
    )
}

export default Botao