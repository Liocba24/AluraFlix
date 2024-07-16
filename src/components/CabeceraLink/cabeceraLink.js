import { Link } from "react-router-dom";
import styles from "./cabeceraLink.module.css"

function CabeceraLink({url, children}){
    //Creamos el link para los botones de barra de navegacion
    //url viene por props 
    return(
        <Link to={url} className={styles.link}>
            {children} {/* es una estructura HTML que podemos pasar y construir */}
        </Link>
    )
}

export default CabeceraLink;