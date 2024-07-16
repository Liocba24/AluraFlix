import styles from "./card.module.css"
import borrar from "./borrar.png"
import editar from "./editar.png"

function Card({ id, capa, titulo }) {
    return (<>
        <div className={styles.container}>
            {/* Videos del FrondEnd */}
            <div className={styles.video}>
                <img src={capa} alt={titulo}
                    className={styles.capa} />
                <div className={styles.botonera}>
                    <div className={styles.borrar}>
                        <img src={borrar} alt="Icono de Borrar" /><h2>Borrar</h2>
                    </div>
                    <div className={styles.editar}>
                        <img src={editar} alt="Icono de editar" /><h2>Editar</h2>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}

export default Card