import styles from './Carousel.module.css'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import um from '/assets/images/cinema.jpg'
import dois from '/assets/images/comedia.jpg'
import tres from '/assets/images/esporte.jpg'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
    { id: '1', image: um },
    { id: '2', image: dois },
    { id: '3', image: tres }
]

function Carousel() {
    return (
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className={styles.carouselSize}
        >
            {images.map((item) => {
                return (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt="Teste" className={styles.slideSize}></img>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Carousel;