import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faUser, faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useLocation, Link } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
import { useState, useContext } from "react";

function Header() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    }

    const { user, logout } = useContext(UserContext);
    const location = useLocation();

    const isLoginPage = location.pathname.toLowerCase() === '/login';
    const isRegisterPage = location.pathname.toLowerCase() === '/register';

    if (isLoginPage) {
        return (
            <>
                <header>

                    <div className={styles.flexHeader}>
                        <div className={styles.tituloMenu}>
                            <div className={styles.logo}><FontAwesomeIcon icon={faTicket} /></div>
                            <Link to="/" className={styles.tituloHeader}><h1 >INGRESSOU</h1></Link>
                        </div>
                        <div className={styles.buttons}>
                            <Link to="./register"><button className={styles.regBtn}>Register</button></Link>
                        </div>
                    </div>
                </header>
            </>
        )
    }

    if (isRegisterPage) {
        return (
            <>
                <header>
                    <div className={styles.flexHeader}>
                        <div className={styles.tituloMenu}>
                            <div className={styles.logo}><FontAwesomeIcon icon={faTicket} /></div>
                            <Link to="/" className={styles.tituloHeader}><h1 >INGRESSOU</h1></Link>
                        </div>
                        <div className={styles.buttons}>
                            <Link to={'/login'}><button className={styles.regBtn}>Login</button></Link>
                        </div>
                    </div>
                </header>
            </>
        )
    }

    return (
        <>
            <header>
                <div className={styles.flexHeader}>
                    <div className={styles.tituloMenu}>
                        <div className={styles.logo}><FontAwesomeIcon icon={faTicket} /></div>
                        <Link to="/" className={styles.tituloHeader}><h1 >INGRESSOU</h1></Link>
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
                    </div>
                    <div className={styles.searchAndHamburger}>
                          <button className={`${styles.pesquisar} ${styles.active}`}><FontAwesomeIcon icon={faMagnifyingGlass} className={styles.lupa}></FontAwesomeIcon></button>
                          
                          <div className={styles.hamburgerWrapper}>
                        <div className={styles.icon} onClick={ToggleMode}>
                            <div className={styles.hamburguer}></div>
                            <div className={styles.hamburguer}></div>
                            <div className={styles.hamburguer}></div>
                        </div>

                        <div className={`${styles.menuMobile} ${active ? styles.open : ''}`}>
                            <ul>
                                <li><Link to="/login" onClick={ToggleMode}>Login</Link></li>
                                <li><Link to="/register" onClick={ToggleMode}>Register</Link></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    {user ? (
                        <>
                            <a href="#" className={styles.profile}><FontAwesomeIcon icon={faUser} className={styles.faUser}></FontAwesomeIcon></a>
                            <button onClick={logout} >
                                <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>
                            </button>

                        </>
                    ) : (
                        <div className={styles.buttons}>
                            <Link to="./login"><button className={styles.btnStyle}>Login</button></Link>
                            <Link to="./register"><button className={styles.regBtn}>Register</button></Link>
                        </div>
                    )}

                </div>
            </header>
        </>
    )
}

export default Header;