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
    const [eventos, setEventos] = useState([]);

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

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');


  const handleCategoriaChange = (e) => {
    setCategoriaSelecionada(e.target.value);
  };





  const aplicarFiltro = async () => {
    try {
        const eventos = await fetchEvents();
        const filtrados = eventos.filter(event =>
        (!categoriaSelecionada || event.categoria?.toLowerCase().includes(categoriaSelecionada.toLowerCase())))
        setFilteredEvents(filtrados);
        setFiltroAberto(false);
    } catch (err) {
        console.error('Erro ao filtrar eventos:', err);
    }
    };



  const [filtroAberto, setFiltroAberto] = useState(false);

  const abrirFiltro = () => {
    setFiltroAberto(true);
  };

  const fecharFiltro = () => {
    setFiltroAberto(false);
  };


   const [preco, setPreco] = useState('');

  const handleChange = (event) => {
    setPreco(event.target.value);
  };



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
                        <button className={styles.filtrar} onClick={abrirFiltro}>
                            <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
                            Filtrar
                        </button>
                    </section>
                    <p className={styles.pagesNumber}>Página 1 de 1</p>
                </div>
                <div className={styles.results}>
                    <EventList events={filteredEvents.length > 0 || categoriaSelecionada ? filteredEvents : eventos} />
                     
                </div>
                <div className={styles.pageNumberDiv}>
                    <h3 className={styles.pageNumber}>1</h3>
                </div>
            </div>


                        

                <div className={styles.overlay} style={{ display: filtroAberto ? 'block' : 'none' }}></div>
            <div className={styles.divFiltro} style={{ display: filtroAberto ? 'flex' : 'none' }}>
                <div className={styles.filtros}>
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria" className={styles.filtroCategoria } value={categoriaSelecionada} onChange={handleCategoriaChange}>
                        <option disabled>Escolha a Categoria</option>
                        <option value="Musica">Musica</option>
                        <option value="Esporte">Esportes</option>
                        <option value="Teatro">Teatro</option>
                        <option value="Festivais">Festivais</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Literatura">Literatura</option>
                        <option value="Gastronomia">Gastronomia</option>
                        <option value="Cinema">Cinema</option>
                        <option value="Saúde">Saúde</option>
                    </select>

                    <label htmlFor="data">Data</label>
                    <select name="data" className={styles.filtroData}>
                        <option value="data" disabled>Escolha a Data</option>
                        <option value="data">Hoje</option>
                        <option value="data">Amanhã</option>
                        <option value="data">Essa semana</option>
                        <option value="data">Esse mês</option>
                    </select>

                    <label htmlFor="local">Local</label>
                    <select name="local" className={styles.filtroLocal}>
                        <option value="local" disabled>Escolha o Local</option>
                        <option value="local">Rio de Janeiro</option>
                        <option value="local">São Paulo</option>
                        <option value="local">Minas Gerais</option>
                        <option value="local">Espirito Santo</option>
                    </select>

                    <label htmlFor="preco">Preço</label>
                    <input type="range" className={styles.filtroPreco} name="preco" min="20" max="500" value={preco} onChange={handleChange}></input>
                    <div className="valor">

                        {preco && <span>R$: {preco}</span>}
                    </div>

                    <div className={styles.botoes}>
                        <button className={styles.resetarFiltro} onClick={async () => {
                        setCategoriaSelecionada('');
                        }}>Resetar Filtros</button>
                        <button className={styles.aplicarFiltro} onClick={() => {
                            loadAndFilter();
                            fecharFiltro();
                        }}>Aplicar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;