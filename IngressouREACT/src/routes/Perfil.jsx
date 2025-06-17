import styles from './Perfil.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faUserCircle, faTicketSimple, faArrowRotateLeft, faHistory, faGear, faLocationDot, faClock, faCircleInfo, faReceipt, faStar } from '@fortawesome/free-solid-svg-icons';

function Perfil() {
    return (
        <>
            <div className={styles.divNavPerfil}>
                <p className={styles.navegacaoPerfil}>Meus Ingressos</p>
            </div>

            <div className={styles.main}>
                <div className={styles.lados}>
                    <div className={styles.ladoEsquerdo}>
                        <div className={styles.imgPerfilNav}>
                            <div className={styles.iconUsuario}>
                                <FontAwesomeIcon icon={faUserCircle} className={styles.iconFotoPerfil} />
                            </div>
                            <p className={styles.nomeUsuario}>NOME</p>
                            <p className={styles.emailUsuario}>Email@exemplo.com</p>
                            <button className={styles.editarPerfil}>Editar Perfil</button>
                            <button className={styles.sair}><Link to="../Login">Sair da Conta</Link></button>
                        </div>

                        <div className={styles.navPerfil}>
                            <ul className={styles.listaNavPerfil}>
                                <Link to="../Perfil">
                                    <li className={styles.atual}><FontAwesomeIcon icon={faTicketSimple} /> Meus Ingressos</li>
                                </Link>

                                <Link to="../Reembolso" >
                                    <li><FontAwesomeIcon icon={faArrowRotateLeft} /> Reembolsos</li>
                                </Link>

                                <Link to="../Perfil">
                                    <li><FontAwesomeIcon icon={faHistory} />Historico de Compras</li>
                                </Link>

                                <Link to="../Perfil">
                                    <li><FontAwesomeIcon icon={faGear} />Configurações da Conta</li>
                                </Link>
                            </ul>
                        </div>
                    </div>



                    <div className={styles.ladoDireito}>
                        <div className={`${styles.eventosVindo} ${styles.divCor}`}>
                            <div className={`${styles.headerEventosVindo} ${styles.headerDiv}`}>
                                <h3 className={`${styles.tituloEventosVindo} ${styles.tituloDivs}`}>Seus Proximos Eventos</h3>
                                <p className={styles.quantidadeEventosVindo}>3 Eventos</p>
                            </div>

                            <div className={styles.eventosVindoConteudo}>
                                <div className={styles.eventosVindoEvento}>
                                    <div className={styles.eventoVindoHeader}>
                                        <h3 className={styles.eventoVindoTitulo}>Festival da Musica</h3>
                                        <p className={`${styles.eventoCategoriaMusica} ${styles.eventoCategoria}`}>Musica</p>
                                    </div>

                                    <div className={styles.eventoVindoConteudo}>
                                        <p className={styles.localEventoVindo}><FontAwesomeIcon icon={faLocationDot} /> copacabana, RJ</p>
                                        <p className={styles.eventoVindoHorario}><FontAwesomeIcon icon={faClock} /> 12:00 PM</p>
                                        <p className={styles.tipoIngressoVindo}><FontAwesomeIcon icon={faTicketSimple} /> Ingresso Simples
                                        </p>
                                    </div>

                                    <div className={styles.eventoVindoDownloadDetalhes}>
                                        <button className={styles.download}> Download</button>
                                        <button className={styles.detalhes}><FontAwesomeIcon icon={faCircleInfo} /> Detalhes</button>
                                    </div>

                                    <div className={styles.eventoVindoCodigoReembolso}>
                                        <p className={styles.codigoDeCompra}>Codigo #834951</p>
                                        <p className={styles.pedirReembolso}>Pedir Reembolso</p>
                                    </div>
                                </div>

                                <div className={styles.eventosVindoEvento}>
                                    <div className={styles.eventoVindoHeader}>
                                        <h3 className={styles.eventoVindoTitulo}>Festival da Musica</h3>
                                        <p className={`${styles.eventoCategoriaMusica} ${styles.eventoCategoria}`}>Musica</p>
                                    </div>

                                    <div className={styles.eventoVindoConteudo}>
                                        <p className={styles.localEventoVindo}><FontAwesomeIcon icon={faLocationDot} /> copacabana, RJ</p>
                                        <p className={styles.eventoVindoHorario}><FontAwesomeIcon icon={faClock} /> 12:00 PM</p>
                                        <p className={styles.tipoIngressoVindo}><FontAwesomeIcon icon={faTicketSimple} /> Ingresso Simples
                                        </p>
                                    </div>

                                    <div className={styles.eventoVindoDownloadDetalhes}>
                                        <button className={styles.download}> Download</button>
                                        <button className={styles.detalhes}><FontAwesomeIcon icon={faCircleInfo} /> Detalhes</button>
                                    </div>

                                    <div className={styles.eventoVindoCodigoReembolso}>
                                        <p className={styles.codigoDeCompra}>Codigo #834951</p>
                                        <p className={styles.pedirReembolso}>Pedir Reembolso</p>
                                    </div>
                                </div>

                                <div className={styles.eventosVindoEvento}>
                                    <div className={styles.eventoVindoHeader}>
                                        <h3 className={styles.eventoVindoTitulo}>Festival da Musica</h3>
                                        <p className={`${styles.eventoCategoriaMusica} ${styles.eventoCategoria}`}>Musica</p>
                                    </div>

                                    <div className={styles.eventoVindoConteudo}>
                                        <p className={styles.localEventoVindo}><FontAwesomeIcon icon={faLocationDot} /> copacabana, RJ</p>
                                        <p className={styles.eventoVindoHorario}><FontAwesomeIcon icon={faClock} /> 12:00 PM</p>
                                        <p className={styles.tipoIngressoVindo}><FontAwesomeIcon icon={faTicketSimple} /> Ingresso Simples
                                        </p>
                                    </div>

                                    <div className={styles.eventoVindoDownloadDetalhes}>
                                        <button className={styles.download}> Download</button>
                                        <button className={styles.detalhes}><FontAwesomeIcon icon={faCircleInfo} /> Detalhes</button>
                                    </div>

                                    <div className={styles.eventoVindoCodigoReembolso}>
                                        <p className={styles.codigoDeCompra}>Codigo #834951</p>
                                        <p className={styles.pedirReembolso}>Pedir Reembolso</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.eventosPassaram} ${styles.divCor}`}>
                            <div className={`${styles.headerEventosPassaram} ${styles.headerDiv}`}>
                                <h3 className={`${styles.tituloEventosPassaram} ${styles.tituloDivs}`}>Eventos Que Passaram</h3>
                                <p className={styles.quantidadeEventosPassaram}>2 Eventos</p>
                            </div>

                        
                            <div className={styles.passaram}>
                                <div className={styles.eventosPassaramConteudo}>
                                    <div className={styles.eventoPassou}>
                                        <div className={styles.eventoPassouHeader}>
                                            <h3 className={styles.eventoPassouTitulo}>Festival da Musica</h3>
                                            <p className={`${styles.eventoCategoriaMusica} ${styles.eventoCategoria}`}>Musica</p>
                                        </div>

                                        <div className={styles.eventoPassouCorpo}>
                                            <p className={styles.localPassaramVindo}><FontAwesomeIcon icon={faLocationDot} /> copacabana, RJ</p>

                                            <p className={styles.eventoPassaramHorario}><FontAwesomeIcon icon={faClock} /> 12:00 PM</p>

                                            <p className={styles.tipoIngressoPassaram}><FontAwesomeIcon icon={faTicketSimple} /> Ingresso Simples</p>
                                        </div>

                                        <div className={styles.eventoPssouDownloadRecibo}>
                                            <button className={styles.recibo}><FontAwesomeIcon icon={faReceipt} /> Recibo</button>

                                            <button className={styles.avalie}><FontAwesomeIcon icon={faStar} /> Avalie o Evento</button>
                                        </div>

                                        <div className={styles.eventoVindoCodigoReembolso}>
                                            <p className={styles.codigoDeCompra}>Codigo #834951</p>
                                        </div>
                                    </div>

                                    <div className={styles.eventoPassou}>
                                        <div className={styles.eventoPassouHeader}>
                                            <h3 className={styles.eventoPassouTitulo}>Festival da Musica</h3>
                                            <p className={`${styles.eventoCategoriaMusica} ${styles.eventoCategoria}`}>Musica</p>
                                        </div>

                                        <div className={styles.eventoPassouCorpo}>
                                            <p className={styles.localPassaramVindo}><FontAwesomeIcon icon={faLocationDot} /> copacabana, RJ</p>

                                            <p className={styles.eventoPassaramHorario}><FontAwesomeIcon icon={faClock} /> 12:00 PM</p>

                                            <p className={styles.tipoIngressoPassaram}><FontAwesomeIcon icon={faTicketSimple} /> Ingresso Simples</p>
                                        </div>

                                        <div className={styles.eventoPssouDownloadRecibo}>
                                            <button className={styles.recibo}><FontAwesomeIcon icon={faReceipt} /> Recibo</button>

                                            <button className={styles.avalie}><FontAwesomeIcon icon={faStar} /> Avalie o Evento</button>
                                        </div>

                                        <div className={styles.eventoVindoCodigoReembolso}>
                                            <p className={styles.codigoDeCompra}>Codigo #834951</p>
                                        </div>
                                    </div>

                                    <div className={styles.eventoPassou}>
                                        <div className={styles.eventoPassouHeader}>
                                            <h3 className={styles.eventoPassouTitulo}>Festival da Musica</h3>
                                            <p className={`${styles.eventoCategoriaMusica} ${styles.eventoCategoria}`}>Musica</p>
                                        </div>

                                        <div className={styles.eventoPassouCorpo}>
                                            <p className={styles.localPassaramVindo}><FontAwesomeIcon icon={faLocationDot} /> copacabana, RJ</p>

                                            <p className={styles.eventoPassaramHorario}><FontAwesomeIcon icon={faClock} /> 12:00 PM</p>

                                            <p className={styles.tipoIngressoPassaram}><FontAwesomeIcon icon={faTicketSimple} /> Ingresso Simples</p>
                                        </div>

                                        <div className={styles.eventoPssouDownloadRecibo}>
                                            <button className={styles.recibo}><FontAwesomeIcon icon={faReceipt} /> Recibo</button>

                                            <button className={styles.avalie}><FontAwesomeIcon icon={faStar} /> Avalie o Evento</button>
                                        </div>

                                        <div className={styles.eventoVindoCodigoReembolso}>
                                            <p className={styles.codigoDeCompra}>Codigo #834951</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Perfil;