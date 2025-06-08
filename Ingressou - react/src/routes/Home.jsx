import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faBasketball, faMasksTheater, faFaceLaughBeam, faUmbrellaBeach, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Event from '../components/Event';
import Carousel from '../components/Carousel';

function Home() {
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
                    <a href="#" className = {styles.linkStyle}>
                        <Event />
                    </a>

                    <a href="#" className = {styles.linkStyle}>
                        <Event />
                    </a>

                    <a href="#" className = {styles.linkStyle}>
                        <Event />
                    </a>
                </div>
            </section>
            <section className={styles.destaques}>
                <h2 className={styles.tituloSeccao2}>Destaques da Semana</h2>
                <div className={styles.flexDestaques}>
                    <div className={styles.Destaque}>
                        <a href="#" className = {styles.linkStyle}>
                            <Event />
                        </a>
                    </div>

                    <div className={styles.Destaque}>
                        <a href="#" className = {styles.linkStyle}>
                            <Event />
                        </a>
                    </div>

                    <div className={styles.Destaque}>
                        <a href="#" className = {styles.linkStyle}>
                            <Event />
                        </a>
                    </div>

                    <div className={styles.Destaque}>
                        <a href="#" className = {styles.linkStyle}>
                            <Event />
                        </a>
                    </div>

                </div>
            </section>

            <section className={styles.eventosProximos}>
                <h2 className={styles.tituloSeccao2}>Eventos Proximos de Você</h2>

                <div className={styles.flexEventosProximos}>
                    <div className={styles.escolherLocal}>
                        <FontAwesomeIcon icon={faLocationDot} className={styles.locationDotIcon} />
                        <label htmlFor="opcoes"></label>
                        <select id="opcoes" className={styles.locais}>
                            <option value="1" className={styles.local}>Rio de Janeiro</option>
                            <option value="2" className={styles.local}>São Paulo</option>
                            <option value="3" className={styles.local}>Minas Gerais</option>
                        </select>
                    </div>
                </div>

                <div className={styles.flexEventoLocal}>
                    <div className={styles.eventoLocal}>
                        <div className={styles.imgEventoLocal}></div>
                        <div className={styles.detalhesEventoLocal}>
                            <div className={styles.categoriaDataFlex}>
                                <p className={`${styles.eventoCategoria} ${styles.eventoCategoriaTeatro}`}>Teatro</p>
                                <p className={styles.data}>12/12/2025</p>
                            </div>
                            <h3 className={styles.tituloEventoLocal}>Show de Comedia</h3>
                            <p className={styles.local}>Copacabana, RJ</p>
                            <div className={styles.flexPrecoDetalhesLocal}>
                                <p className={styles.precoEventoLocal}>R$ 89.99</p>
                                <button className={styles.verMaisEventoLocal}>Detalhes</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.eventoLocal}>
                        <div className={styles.imgEventoLocal}></div>
                        <div className={styles.detalhesEventoLocal}>
                            <div className={styles.categoriaDataFlex}>
                                <p className={`${styles.eventoCategoriaLocal} ${styles.eventoCategoriaComedia}`}>Comedia</p>
                                <p className={styles.data}>12/12/2025</p>
                            </div>
                            <h3 className={styles.tituloEventoLocal}>Show de Comedia</h3>
                            <p className={styles.local}>Copacabana, RJ</p>
                            <div className={styles.flexPrecoDetalhesLocal}>
                                <p className={styles.precoEventoLocal}>R$ 89.99</p>
                                <button className={styles.verMaisEventoLocal}>Detalhes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.flexVerTodosLocal}>
                    <button className={styles.botaoVerTodosLocal}>Todos perto de você</button>
                </div>
            </section>



        </>
    )
}

export default Home;