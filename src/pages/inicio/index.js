import Banner from "components/Banner/Banner";
import Footer from "components/Footer/footer";
import Card from "components/Card";
//import videos from "../../data/db.json"
import styles from "./index.module.css"
import Titulo from "components/Titulo";

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Liocba24/alura-cinema-api/videos")
        .then((response) => response.json())
        .then((data) => {
            setVideos(data);
        });
    },[]);

    return (
        <>
            <div className={styles.primario}>
                <Banner></Banner>
                {/* <Card id="1" titulo="Gato" capa="https://api.thecatapi.com/api/images/get?format=src&ype=png"/> */}
                <div className={styles.videos}>
                    <Titulo c="celeste" f="32">
                        <h1>FRONT END</h1>
                    </Titulo>
                    <section className={styles.container}>
                        {videos.map((video) => {
                            return <Card {...video} key={video.id} />
                        })}
                    </section>
                    <Titulo c="verde" f="32">
                        <h1>BACK END</h1>
                    </Titulo>
                    <section className={styles.container}>
                        {videos.map((video) => {
                            return <Card {...video} key={video.id} />
                        })}
                    </section>
                    <Titulo c="amarillo" f="18">
                        <h1>INOVACION Y GESTION</h1>
                    </Titulo>
                    <section className={styles.container}>
                        {videos.map((video) => {
                            return <Card {...video} key={video.id} />
                        })}
                    </section> 
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inicio;
