import styles from './NavBar.module.css'

function NavBar({item}){
    return(
        <nav>
        <ul className={styles.nav_ul}>
            <li className={styles.nav_li}>{item}</li>
        </ul>
    </nav>


    )
}

export default NavBar