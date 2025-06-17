import styles from './Reembolso.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faUserCircle, faTicketSimple, faArrowRotateLeft, faHistory, faGear, faLocationDot, faClock, faCircleInfo, faReceipt, faStar } from '@fortawesome/free-solid-svg-icons';


function Reembolso(){
    return(
        <>
            <div className={styles.divNavPerfil}>
                <p className={styles.navegacaoPerfil}>Reembolsos</p>
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
                                    <li><FontAwesomeIcon icon={faTicketSimple} /> Meus Ingressos</li>
                                </Link>
            
                                <Link to="../Reembolso" >
                                    <li className={styles.atual}><FontAwesomeIcon icon={faArrowRotateLeft} /> Reembolsos</li>
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
                        <div className={styles.informativo}>
                            <h3 className={styles.tituloInformativo}><FontAwesomeIcon icon={faCircleInfo} /> Informativo de Reembolso</h3>

                            <p className={styles.textoInformativo}>O processamento do    reembolso normalmente leva de 5 a 7 dias úteis após
                            a aprovação. Os reembolsos são emitidos para o método de pagamento original utilizado na compra.
                            </p>
                        </div>

                        <div className={`${styles.formReembolso} ${styles.divCor}`}>
                            <div className={`${styles.headerFormReembolso} ${styles.headerDiv}`}>
                                <h3 className={`${styles.tituloFormReembolso} ${styles.tituloDivs}`}>Pedir Reembolso</h3>
                            </div>

                            <div className={styles.conteudoFormReembolso}>
                                <label htmlFor="qualTicket">Escolhe o Ticket que desejar pedir reembolso</label><br></br>

                                <select name="ingressos" className={styles.ingressos} required>
                                    <option value="ingressos" disabled>Escolha o evento</option>
                                </select><br></br><br></br>

                                <label htmlFor="porque">Por que deseja pedir reembolso</label><br></br>

                                <select name="porque" className={styles.porqueReembolso} required>
                                    <option disabled>Escolha um motivo</option>

                                    <option value="porque">Não posso ir ao evento</option>

                                    <option value="porque">Detalhes do evento mudaram</option>

                                    <option value="porque">Emergência de trabalho</option>

                                    <option value="porque">Horario do evento mudou</option>

                                    <option value="porque">Outro</option>
                                </select><br></br><br></br>

                                <label htmlFor="detalhesAdicionais">Detalhes Adicionais:</label><br></br>

                                <textarea name="detalhesAdicionais" className={styles.detalhesAdicionais}
                                placeholder="Se necessario adicione detalhes adicionais"></textarea><br></br><br></br>

                                <input type="checkbox" name="termos" className={styles.termos} required />
                                <label htmlFor="termos"> Eu entendo que o reembolso esta sujeito a politica do
                                evento</label><br></br><br></br>

                                <button className={styles.pedirReembolso} onclick="pegarReembolso()">Pedir Reembolso</button>
                            </div>
                        </div>

                        <div className={`${styles.reembolsosEmAnalise} ${styles.divCor}`}>
                            <div className={`${styles.headerReembolsosEmAnalise} ${styles.headerDiv}`}>
                                <h3 className={`${styles.tituloReembolsosEmAnalise} ${styles.tituloDivs}`}>Reembolsos em Analise</h3>
                                <p className={styles.quantidadeReembolsosEmAnalise}>1 Pedido</p>
                            </div>

                            <div className={styles.conteudoReembolsosEmAnalise}>
                                <div className={`${styles.reembolsoEmAnaliseCorpo} ${styles.re1}`}>
                                    <div className={styles.tituloReembolsoPendente}>
                                        <h3 className={styles.nomeEventoDoReembolso}>Festival da Musica</h3>
                                        <p className={styles.reembolsoPendente}>Em analise</p>
                                    </div>

                                    <div className={styles.precoBotaoReembolso}>
                                        <p className={styles.precoReembolso}>R$ 120</p>
                                        <button className={styles.cancelarReembolso} onclick="cancelarReembolso()">cancelar Reembolso</button>
                                    </div>

                                    <div className={styles.motivoReembolso}>
                                        <p className={styles.motivo}><b>Motivo:</b> Emergência de trabalho</p>
                                        <p className={styles.observacao}><b>Observação:</b> Nenhuma observação</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.historicoReembolsos} ${styles.divCor}`}>
                            <div className={`${styles.headerHistoricoReembolsos} ${styles.headerDiv}`}>
                                <h3 className={`${styles.tituloHistoricoReembolsos} ${styles.tituloDivs}`}>Historico de Reembolsos</h3>
                                <p className={styles.quantidadeReembolsos}>2 Pedidos</p>
                            </div>

                            <div className={styles.conteudoHistoricoReembolsos}>
                                <div className={styles.reembolsoStatus}>
                                    <h3 className={styles.tituloEvento}>Noite de Jazz</h3>
                                    <p className={styles.precoReembolso}>R$ 55</p>
                                    <p className={styles.Aprovado}>Aprovado</p>

                                    <div className={styles.motivoObservacao}>
                                        <p className={styles.motivo}><b>Motivo:</b> Emergência de trabalho</p>
                                        <p className={styles.observacao}><b>Observação:</b> Nenhuma observação</p>
                                    </div>
                                </div>

                                <div className={styles.reembolsoStatus}>
                                    <h3 className={styles.tituloEvento}>Noite de Jazz</h3>
                                    <p className={styles.precoReembolso}>R$ 55</p>
                                    <p className={styles.Reprovado}>Reprovado</p>
                                    <div className={styles.motivoObservacao}>
                                        <p className={styles.motivo}><b>Motivo:</b> Horario do evento mudou</p>
                                        <p className={styles.observacao}><b>Observação:</b> Nenhuma observação</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reembolso;