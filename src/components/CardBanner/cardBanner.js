import styles from "./cardBanner.module.css"
import player from "./player.png"

function CardBanner(){
    return(
        <div className={styles.container}>
            <div className={styles.frontend}>
                <h2>FRONT END</h2>
                <h3>Challenger React</h3>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div className={styles.player}>
                <img src={player}></img>
            </div>
        </div>
    )
}

export default CardBanner