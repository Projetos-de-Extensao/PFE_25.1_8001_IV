import styles from './Event.module.css'
import { Link } from 'react-router-dom';

function Event({ event }) {
    return (
        <Link to={`/event/${event.id}`}>
            <div className={styles.evento}>
                <div className={styles.imgEvento}>
                    <img src={event.imagemUrl} alt="teste" className={styles.imgSize}></img>
                </div>

                <div className={styles.categoriaDataFlex}>
                    <p className={`${styles.eventoCategoria} ${styles.eventoCategoriaMusica}`}>{event.categoria}</p>
                    <p className={styles.data}>{event.dataHora}</p>
                </div>

                <h3 className={styles.tituloEvento}>{event.nome}</h3>

                <p className={styles.eventoDescricao}>
                    {event.descricao}
                </p>

                <div className={styles.precoDetalhesFlex}>
                    <span className={styles.preco}>R$ {event.preco}</span>
                    <button className={styles.verMais}>Ver Mais</button>
                </div>
            </div>
        </Link>
    )
}

export default Event;