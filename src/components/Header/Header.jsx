import styles from './Header.module.css'
import NavBar from '../NavBar/NavBar'

function Header(){
    return(
        <>
        <div className={styles.content}>
            <header className={styles.header}>
            <div className={styles.headerContent}>
            <img className={styles.brand} src="../public/images/logo.svg" alt="brand" />
            <nav className={styles.navbar}>
                <NavBar item='Colection'/>
                <NavBar item='Men'/>
                <NavBar item='Women'/>
                <NavBar item='About'/>
                <NavBar item='Contact'/>
            </nav>



            </div>
            <div>
            <img  className={styles.cart} src="../public/images/icon-cart.svg" alt="cart" />
            <img className={styles.avatar} src="../public/images/image-avatar.png" alt="cart" />
            </div>
        </header>
        </div>
        </>

    )
}

export default Header