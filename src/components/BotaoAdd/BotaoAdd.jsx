import styles from "./BotaoAdd.module.css"

function BotaoAdd({text}){
    return(
        <button className={styles.BotaoAddContent} >
            <img  className={styles.BotaoAddIco} src="../public/images/icon-cart.svg" alt="cart" />
            {text}
        </button>
    )
}

export default BotaoAdd