import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
            <footer>
                <div className={styles.flexFooter}>
                    <div className={styles.logoDescricaoSocial}>
                        <div className={styles.logo}>
                            <FontAwesomeIcon icon={faTicket} className={styles.iconLogoFooter}></FontAwesomeIcon>
                            <h4 className={styles.tituloFooter}>INGRESSOU</h4>
                        </div>

                        <div className={styles.descricao}>
                            <p className={styles.descricaoTexto}>
                                Seu ingresso para experiências incríveis. Encontre e reserve ingressos para shows, esportes,
                                teatro e mais eventos ao redor do mundo.
                            </p>
                        </div>

                        <div className={styles.social}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon}></FontAwesomeIcon>
                        </div>
                    </div>

                    <div className={styles.categoriasFooter}>
                        <h3 className={styles.tituloCategoriasFooter}>Categorias</h3>
                        <ul className={styles.listaCategorias}>
                            <a href="#">
                                <li>Musica</li>
                            </a>
                            <a href="#">
                                <li>Esportes</li>
                            </a>
                            <a href="#">
                                <li>Teatro</li>
                            </a>
                            <a href="#">
                                <li>Comedia</li>
                            </a>
                            <a href="#">
                                <li>Festivais</li>
                            </a>
                        </ul>
                    </div>

                    <div className={styles.footerConta}>
                        <h3 className={styles.tituloContaFooter}>Conta</h3>
                        <ul className={styles.listaContaFooter}>
                            <a href="#">
                                <li>Perfil</li>
                            </a>
                            <a href="#">
                                <li>Tickets</li>
                            </a>
                            <a href="#">
                                <li>Reembolso</li>
                            </a>
                        </ul>
                    </div>

                    <div className={styles.newsletterFooter}>
                        <h3 className={styles.tituloNewsletterFooter}>Newsletter</h3>
                        <p className={styles.desccricaoNewsletterFooter}>
                            Se inscreva para receber email sobre eventos, ofertas e mais.
                        </p>

                        <input type="text" className={styles.inputNewsletterFooter} placeholder="Seu email" />
                        <button className={styles.inscrevaSeFooter}>Inscreva-se</button>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;