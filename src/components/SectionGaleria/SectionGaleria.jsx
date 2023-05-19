import styles from "./SectionGaleria.module.css"

function SectionGaleria(){
    return(
        <div>
                    <section className={styles.SectionGaleriaContent}>
            <img src="../public/images/image-product-1.jpg" alt="" srcset="" />
        </section>
            <div className={styles.SectionGaleria}>
                <img src="../public/images/image-product-1-thumbnail.jpg" alt="" srcset="" />
                <img src="../public/images/image-product-2-thumbnail.jpg" alt="" srcset="" />
                <img src="../public/images/image-product-3-thumbnail.jpg" alt="" srcset="" />
                <img src="../public/images/image-product-4-thumbnail.jpg" alt="" srcset="" />
            </div>
        </div>

    )
}

export default SectionGaleria