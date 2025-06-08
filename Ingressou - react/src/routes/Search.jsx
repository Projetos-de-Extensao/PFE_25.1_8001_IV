import styles from '../routes/Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Event from '../components/Event';
import Organizer from '../components/Organizer';
import { useState } from 'react';

function Search() {
    const [activeTab, setActiveTab] = useState('eventos')

    return (
        <>
            <div className={styles.searchBody}>
                <div className={styles.searchContainer}>
                    <section className={styles.searchHeaders}>
                        <h1 className={styles.resultHeader}>Resultador para [valor pesquisado]</h1>
                        <p className={styles.resultQuantity}>X eventos encontrados</p>
                    </section>
                    <section className={styles.filters}>
                        <div className={styles.pages}>
                            <button className={`${styles.pageButton} ${activeTab === 'eventos' ? styles.active : ''}`} onClick={() => setActiveTab('eventos')} name="Eventos">Eventos</button>
                            <button className={`${styles.pageButton} ${activeTab === 'organizadores' ? styles.active : ''}`} onClick={() => setActiveTab('organizadores')}>Organizadores</button>
                        </div>
                        <button className={styles.filterButton}>
                            <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
                            Filtrar
                        </button>
                    </section>
                    <p className={styles.pagesNumber}>Página X de Y</p>
                </div>
                <div className={styles.results}>
                    {activeTab === 'eventos' &&
                        Array.from({ length: 8 }, (_, i) => <Event key={i} />)
                    }
                    {activeTab === 'organizadores' &&
                        Array.from({ length: 8 }, (_, i) => <Organizer key={i} />)
                    }
                </div>
                <div className={styles.pageNumberDiv}>
                    <h3 className={styles.pageNumber}>1</h3>
                </div>
            </div>
        </>
    )
}

export default Search;