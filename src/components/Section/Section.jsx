import styles from './Section.module.css'
import SectionGaleria from '../SectionGaleria/SectionGaleria'
import SectionInfo from '../SectionInfo/SectionInf'

function Section(){
    return(
        <section className={styles.sectionContent}>
            <SectionGaleria />
            <SectionInfo />

        </section>
    )
}

export default Section