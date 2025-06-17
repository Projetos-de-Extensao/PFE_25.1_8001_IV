import styles from './HeaderPerfil.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function HeaderPerfil() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.flexHeader}>
                    <div className={styles.divTituloHeader}>
                        <Link to="./Home"><FontAwesomeIcon icon={faTicket} className={styles.faTicket}/></Link>
                        
                        <h1 className={styles.tituloHeader}><Link to="./Home">INGRESSOU</Link></h1>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderPerfil;