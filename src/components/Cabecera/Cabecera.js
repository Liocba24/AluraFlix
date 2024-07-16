import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./LogoMain.png"
import CabeceraLink from "components/CabeceraLink/cabeceraLink"

function Cabecera({url, url2}) {
    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo de AluraFlix" />
                </section>
            </Link>

            <nav>
                <CabeceraLink url={url} className={styles.home} >
                    Home
                </CabeceraLink>
                <CabeceraLink url={url2} className={styles.nuevo} >
                    Nuevo Video
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera