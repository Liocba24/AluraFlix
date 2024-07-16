import styles from "./footer.module.css"
import logo from "./LogoMain.png"

function Footer(){
    return(
        <footer className={styles.footer}>
            
            <img src={logo} alt="Logo de AluraFlix" />
            
        </footer>
    )
}

export default Footer