import styles from '../routes/Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEvents } from '../services/api';
import EventList from '../components/EventList'

function Search() {
    const [activeTab, setActiveTab] = useState('eventos')
    const { categoria } = useParams();
    const [filteredEvents, setFilteredEvents] = useState([]);

     useEffect(() => {
    const loadAndFilter = async () => {
      try {
        const allEvents = await fetchEvents();
        const filtered = allEvents.filter(event => 
          event.categoria.toLowerCase() === categoria.toLowerCase()
        );
        setFilteredEvents(filtered);
      } catch (err) {
        console.error('Erro ao buscar eventos:', err);
      }
    };

    if (categoria) loadAndFilter();
  }, [categoria]);

    return (
        <>
            <div className={styles.searchBody}>
                <div className={styles.searchContainer}>
                    <section className={styles.searchHeaders}>
                        <h1 className={styles.resultHeader}>Resultados para {categoria}</h1>
                        <p className={styles.resultQuantity}>{filteredEvents.length} {filteredEvents.length === 1 ? 'evento encontrado': 'eventos encontrados'} </p>
                    </section>
                    <section className={styles.filters}>
                        <div className={styles.pages}>
                            <button className={`${styles.pageButton} ${activeTab === 'eventos' ? styles.active : ''}`} onClick={() => setActiveTab('eventos')} name="Eventos">Eventos</button>
                        </div>
                        <button className={styles.filterButton}>
                            <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
                            Filtrar
                        </button>
                    </section>
                    <p className={styles.pagesNumber}>Página 1 de 1</p>
                </div>
                <div className={styles.results}>
                    <EventList events = {filteredEvents} />
                </div>
                <div className={styles.pageNumberDiv}>
                    <h3 className={styles.pageNumber}>1</h3>
                </div>
            </div>
        </>
    )
}

export default Search;