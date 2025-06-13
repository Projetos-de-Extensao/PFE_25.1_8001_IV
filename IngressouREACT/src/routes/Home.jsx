import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBasketball, faMasksTheater, faFaceLaughBeam, faUmbrellaBeach, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel';
import EventList from '../components/EventList.jsx';
import { fetchEvents } from '../services/api.jsx';
import { useEffect, useState } from 'react';

function Home() {
    const [city, setCity] = useState(null);
    const [allEvents, setAllEvents] = useState([]);

    // pega a cidade do usuário
    useEffect(() => {
        const getUserCity = async () => {
            try {
                const pos = await new Promise((resolve, reject) =>
                    navigator.geolocation.getCurrentPosition(resolve, reject)
                );

                const { latitude, longitude } = pos.coords;
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                );
                const data = await response.json();
                const userCity = data.address.city
                setCity(userCity);
            } catch (error) {
                console.error("Erro ao obter cidade:", error);
            }
        };

        getUserCity();
    }, []);

    useEffect(() => {
        const loadEvents = async () => {
            const eventsData = await fetchEvents();
            setAllEvents(eventsData);
        };
        loadEvents();
    }, []);

    const principais = allEvents.filter(event => {
        return event.prioridade === 'principal'
    })

    const destaques = allEvents.filter(event => {
        return event.prioridade === 'destaque'
    })

    const proximos = allEvents.filter(event => {
        return event.localizacao === city;
    })

    return (
        <>
            <Carousel />
            <section className={styles.categorias}>
                <h2 className={styles.tituloSeccao}>CATEGORIAS</h2>

                <div className={styles.flexCategorias}>
                    <div className={styles.categoria}>
                        <FontAwesomeIcon icon={faMusic} className={`styles.categoriaIcon ${styles.musicaIcon}`}></FontAwesomeIcon>
                        <h3 className={styles.tituloCategoria}>Musica</h3>
                    </div>

                    <div className={styles.categoria}>
                        <FontAwesomeIcon icon={faBasketball} className={`styles.categoriaIcon ${styles.basketIcon}`}></FontAwesomeIcon>
                        <h3 className={styles.tituloCategoria}>Esportes</h3>
                    </div>

                    <div className={styles.categoria}>
                        <FontAwesomeIcon icon={faMasksTheater} className={`styles.categoriaIcon ${faMasksTheater}`}></FontAwesomeIcon>
                        <h3 className={styles.tituloCategoria}>Teatro</h3>
                    </div>

                    <div className={styles.categoria}>
                        <FontAwesomeIcon icon={faFaceLaughBeam} className={`styles.categoriaIcon ${faFaceLaughBeam}`}></FontAwesomeIcon>
                        <h3 className={styles.tituloCategoria}>Comedia</h3>
                    </div>

                    <div className={styles.categoria}>
                        <FontAwesomeIcon icon={faUmbrellaBeach} className={`styles.categoriaIcon ${faUmbrellaBeach}`}></FontAwesomeIcon>
                        <h3 className={styles.tituloCategoria}>Festivais</h3>
                    </div>
                </div>
            </section>

            <section className={styles.eventosPrincipais}>
                <h2 className={styles.tituloSeccao2}>Eventos Principais</h2>
                <div className={styles.flexEventosPrincipais}>
                    <EventList
                        events={principais}
                    />
                </div>
            </section>
            <section className={styles.destaques}>
                <h2 className={styles.tituloSeccao2}>Destaques da Semana</h2>
                <div className={styles.flexDestaques}>
                    <div className={styles.Destaque}>
                        <EventList
                            events={destaques}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.eventosProximos}>
                <div className={styles.titleAndButton}>
                    <h2 className={styles.tituloSeccao2}>Eventos Proximos de Você</h2>
                    <button className={styles.locationButton}
                    >
                        <FontAwesomeIcon icon={faLocationDot} className={styles.locationDotIcon} />
                    </button>
                </div>
                <div className={styles.flexEventoLocal}>
                    <EventList
                        events={proximos}
                    />
                </div>

                <div className={styles.flexVerTodosLocal}>
                    <button className={styles.botaoVerTodosLocal}>Todos perto de você</button>
                </div>
            </section>



        </>
    )
}

export default Home;