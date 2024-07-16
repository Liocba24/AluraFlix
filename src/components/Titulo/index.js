import styles from "./titulo.module.css"

function Titulo({ children, c, f }) {
    return (
        <div className={styles.fondo}>
            <div className={styles.texto}
                style={{ backgroundColor: `var(--${c})`, fontSize:`${f}px`}}>
                {children}
            </div>
        </div>
    )
}

export default Titulo