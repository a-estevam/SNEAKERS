import styles from "./SectionInfo.module.css"
import BotaoAdd from "../BotaoAdd/BotaoAdd"
import Botao from "../Botao/Botao"



function SectionInfo(){
    return(
        <section className={styles.SectionInfoContent}>
            <h3>SNEAKERS COMPANY</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus, quas libero distinctio voluptatem est dolorem laudantium rem eos harum veniam architecto labore nulla soluta ipsum minus doloremque voluptates alias.</p>

            <div className={styles.SectionInfoPrice}>
                <h3>$125.00</h3>
                <span>50%</span>
            </div>
            <div className={styles.SectionInfoOldPrice}>$250.00</div>
            <div className={styles.SectionInfBtn}>
                <Botao />
                <BotaoAdd text='Add to cart'/>
            </div>
        </section>
    )
}

export default SectionInfo