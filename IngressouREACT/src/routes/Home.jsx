import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBasketball, faMasksTheater, faFaceLaughBeam, faUmbrellaBeach, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel';
import EventList from '../components/EventList.jsx';
import { fetchEvents } from '../services/api.jsx';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [city, setCity] = useState(null);
    const [allEvents, setAllEvents] = useState([]);

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

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };
    return (
        <>
            <Carousel />
            <section className={styles.categorias}>
                <h2 className={styles.tituloSeccao}>CATEGORIAS</h2>
                <div className={styles.categoriaWrapper}>
                    <button className={styles.arrow} onClick={scrollLeft}>&lt;</button>
                    <div className={styles.flexCategorias} ref={scrollRef} >
                        <Link to={`search/Musica`} className={styles.linkStyle}>
                            <div className={styles.categoria}>
                                <FontAwesomeIcon icon={faMusic} className={`styles.categoriaIcon ${styles.musicaIcon}`}></FontAwesomeIcon>
                                <h3 className={styles.tituloCategoria}>Musica</h3>
                            </div>
                        </Link>

                        <Link to={`search/Esporte`} className={styles.linkStyle}>
                            <div className={styles.categoria}>
                                <FontAwesomeIcon icon={faBasketball} className={`styles.categoriaIcon ${styles.basketIcon}`}></FontAwesomeIcon>
                                <h3 className={styles.tituloCategoria}>Esportes</h3>
                            </div>
                        </Link>


                        <Link to={`search/Teatro`} className={styles.linkStyle}>
                            <div className={styles.categoria}>
                                <FontAwesomeIcon icon={faMasksTheater} className={`styles.categoriaIcon ${faMasksTheater}`}></FontAwesomeIcon>
                                <h3 className={styles.tituloCategoria}>Teatro</h3>
                            </div>
                        </Link>

                        <Link to={`search/Comedia`} className={styles.linkStyle}>
                            <div className={styles.categoria}>
                                <FontAwesomeIcon icon={faFaceLaughBeam} className={`styles.categoriaIcon ${faFaceLaughBeam}`}></FontAwesomeIcon>
                                <h3 className={styles.tituloCategoria}>Comedia</h3>
                            </div>
                        </Link>

                        <Link to={`search/Tecnologia`} className={styles.linkStyle}>
                            <div className={styles.categoria}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} className={`styles.categoriaIcon ${faUmbrellaBeach}`}></FontAwesomeIcon>
                                <h3 className={styles.tituloCategoria}>Tecnologia</h3>
                            </div>
                        </Link>

                        <Link to={`search/Workshop`} className={styles.linkStyle}>
                            <div className={styles.categoria}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} className={`styles.categoriaIcon ${faUmbrellaBeach}`}></FontAwesomeIcon>
                                <h3 className={styles.tituloCategoria}>Workshop</h3>
                            </div>
                        </Link>
                        <Link to={`search/Literatura`} className={styles.linkStyle}>
                            <div className={styles.categoria}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} className={`styles.categoriaIcon ${faUmbrellaBeach}`}></FontAwesomeIcon>
                                <h3 className={styles.tituloCategoria}>Literatura</h3>
                            </div>
                        </Link>
                        <Link to={`search/Gastronomia`} className={styles.linkStyle}>
                            <div className={styles.categoria}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} className={`styles.categoriaIcon ${faUmbrellaBeach}`}></FontAwesomeIcon>
                                <h3 className={styles.tituloCategoria}>Gastronomia</h3>
                            </div>
                        </Link>
                        <Link to={`search/Cinema`} className={styles.linkStyle}>
                            <div className={styles.categoria}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} className={`styles.categoriaIcon ${faUmbrellaBeach}`}></FontAwesomeIcon>
                                <h3 className={styles.tituloCategoria}>Cinema</h3>
                            </div>
                        </Link>
                        <Link to={`search/Saúde`} className={styles.linkStyle}>
                            <div className={styles.categoria}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} className={`styles.categoriaIcon ${faUmbrellaBeach}`}></FontAwesomeIcon>
                                <h3 className={styles.tituloCategoria}>Saúde</h3>
                            </div>
                        </Link>
                    </div>
                    <button className={styles.arrow} onClick={scrollRight}>&gt;</button>
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