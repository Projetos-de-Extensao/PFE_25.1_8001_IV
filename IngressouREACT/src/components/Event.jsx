import styles from './Event.module.css'

function Event() {
    return (
        <>
            <div className={styles.evento}>
                <div className={styles.imgEvento}></div>

                <div className={styles.categoriaDataFlex}>
                    <p className={`${styles.eventoCategoria} ${styles.eventoCategoriaMusica}`}>Musica</p>
                    <p className={styles.data}>12/12/2025</p>
                </div>

                <h3 className={styles.tituloEvento}>Festival de Musica</h3>

                <p className={styles.eventoDescricao}>
                    Um festival de música de 3 dias com grandes artistas do mundo todo.
                </p>

                <div className={styles.precoDetalhesFlex}>
                    <span className={styles.preco}>R$ 89.99</span>
                    <button className={styles.verMais}>Ver Mais</button>
                </div>
            </div>
        </>
    )
}

export default Event;