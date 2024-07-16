import styles from "./Campo.module.css"

const Campo = (props) => {
    const manejarCambio = (e) => {
        props.setValor(e.target.value);
    };

    return (
    <div className={styles.campo}>
        <label>{props.titulo}</label>
        {props.tipo === "textarea" ? (
            <textarea
            placeholder={props.placeholder}
            value={props.valor}
            onChange={manejarCambio}
            required={props.required}/>
        ) : (<input type="text"
            placeholder={props.placeholder}
            value={props.valor}
            onChange={manejarCambio}
            required={props.required} />
        )}
    </div>
    )
}

/* function Campo({type, name, titulo, placeholderModificado, required, valor }){
    return(
        <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>

    )
} */

export default Campo