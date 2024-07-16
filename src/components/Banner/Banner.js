import Cabecera from "components/Cabecera/Cabecera"
import styles from "./Banner.module.css"
import CardBanner from "components/CardBanner/cardBanner"

function Banner() {
    return (<>
        <div className={styles.banner} >
            <Cabecera url2={"./NuevoVideo"}></Cabecera>
            <CardBanner>
                <div className={styles.gradient} />
            </CardBanner>
        </div>
        
    </>
    )
}

export default Banner