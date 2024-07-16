import Cabecera from "components/Cabecera/Cabecera"
import styles from "./nuevoVideo.modules.css"
import Footer from "components/Footer/footer"
import Formulario from "components/Formulario"

function NuevoVideo() {
    return (<>
        <Cabecera url="/" url2="./NuevoVideo"></Cabecera>
        <Formulario />
        <Footer></Footer>
    </>
    )
}

export default NuevoVideo

{/* <div className={styles.titulo_formulario}>
            <div className={styles.formulario}>
                <Formulario />
            </div>
</div> */}