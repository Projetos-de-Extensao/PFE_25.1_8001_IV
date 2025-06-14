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

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const data = await fetchEvents();
                setEvents(data);
            } catch (error) {
                console.error('Erro ao carregar eventos:', error);
            }
        }

        loadEvents();
    }, [])

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