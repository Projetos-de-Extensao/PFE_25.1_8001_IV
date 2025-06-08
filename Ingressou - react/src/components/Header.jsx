import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <>
        <header>
        <div className={styles.flexHeader}>
            <div className={styles.tituloMenu}>
                <FontAwesomeIcon icon={faTicket}/>
                <a href="./index.html" className={styles.tituloHeader}><h1 >INGRESSOU</h1></a>
                <ul className={styles.menuHeader}>
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>Eventos</li>
                    </a>
                </ul>
            </div>

            <div className={styles.buscaProfile}>
                <input type="text" className={styles.barraPesquisa} placeholder="Buscar eventos" />
                <button className={styles.pesquisar} ><FontAwesomeIcon icon={faMagnifyingGlass} className={styles.lupa}></FontAwesomeIcon></button>
                <a href="#" className={styles.profile}><FontAwesomeIcon icon={faUser} className={styles.faUser}> </FontAwesomeIcon></a>
            </div>
            <div className={styles.buttons}>
                <a href="./login.html"><button className={styles.btnStyle}>Login</button></a>
                <a href="./cadastro.html"><button className={styles.regBtn}>Register</button></a>
            </div>
        </div>
    </header>
        </>
    )
}

export default Header;