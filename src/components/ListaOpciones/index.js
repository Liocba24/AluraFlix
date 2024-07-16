import styles from "./Listaopciones.module.css"

const ListaOpciones = (props) => {

    const cat = [
        "FRON END",
        "BACK END",
        "INNOVACION Y GESTIÓN"
    ]

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return (
        <div className={styles.lista}>
            <label>Categoria</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>
                    Selecionar una categoria.
                </option>
                {cat.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
            </select>
        </div>
    )
}

export default ListaOpciones;