import { useState } from "react";
import styles from "./Formulario.module.css"
import Campo from "components/Campo";
import ListaOpciones from "components/ListaOpciones";
import BotonGuardar from "components/BotonGuardar";

const Formulario = ({registrarvideo }) => {
    //Array
    const [titulo, setTitulo] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const [video, setVideo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    return(
        <section className={styles.formulario}>
            <div className={styles.tituloform}>
                <h1>NUEVO VIDEO</h1>
                <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            </div>
            <form>
                <div className={styles.divisor}></div>
                <h2>Crear Tarjeta</h2>
                <div className={styles.divisor}></div>
                {/* Campo Titulo */}
                <Campo titulo="Titulo" 
                placeholder="Ingrese el tiulo"
                required valor={titulo} 
                setValor={setTitulo} />
                {/* Lista de Opciones */} 
                <ListaOpciones valor={categoria}
                setValor={setCategoria} />
                {/* Campo Imagen */}
                <Campo titulo="Imagen"
                placeholder="Ingrese el enlace de la imagen"
                required valor={imagen}
                setValor={setImagen} />
                {/* Campo  video*/}
                <Campo titulo="Video"
                placeholder="Ingrese enlace del video"
                required valor={video}
                setValor={setVideo} />
                {/* Campo  descripcion*/}
                <Campo titulo="Descripcion"
                placeholder="Coloque una descripcion aqui"
                valor={descripcion}
                setValor={setDescripcion}
                tipo="textarea" />
                <BotonGuardar />
            </form>
        </section>
    )
}

export default Formulario;