import styles from './Carousel.module.css'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { fetchEvents } from '../services/api';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

register();

function Carousel() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const data = await fetchEvents();
                setEvents(data);
            } catch (error) {
                console.error('Erro ao carregar eventos:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        loadEvents();
    }, [])

    if (loading) {
        return (
            <div className={styles.carouselFallback}>
                <p>Carregando eventos...</p>
            </div>
        )
    }

    if (error || events.length === 0) {
        return (
            <div className={styles.carouselFallback}>
                <p>Nenhum evento disponível no momento.</p>
            </div>
        );
    }

    return (
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className={styles.carouselSize}
        >
            {events.slice(0,3).map(event => {
                return (
                    <SwiperSlide key={event.id}>
                        <div className={styles.slideWrapper}>
                            <img src={event.imagemUrl} alt="Teste" className={styles.slideSize}></img>
                            <div className={styles.informations}>
                                <h1 className={styles.carouselTitle}>{event.nome}</h1>
                                <Link className={styles.eventLink} to={`/event/${event.id}`}>
                                    <button className={styles.carouselButton}>Ver mais</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Carousel;