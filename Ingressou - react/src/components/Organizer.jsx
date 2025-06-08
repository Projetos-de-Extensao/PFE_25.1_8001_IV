import styles from './Organizer.module.css'

function Organizer() {
    return (
        <>
         <div className={styles.organizer}>
                        <div className={styles.imgOrganizer}></div>
        
                        <div className={styles.categoryContainer}>
                            <p className={styles.organizerCategory}>Musica</p>
                        </div>
        
                        <h3 className={styles.nameOrganizer}>Nome Organizador</h3>
        
                        <p className={styles.organizerDescription}>
                            Organiza eventos do tipo [categoria]
                        </p>
                        <div className = {styles.buttonContainer}>
                            <button className={styles.seeMore}>Ver Mais</button>
                        </div>
                    </div>
        </>
    )
}

export default Organizer;