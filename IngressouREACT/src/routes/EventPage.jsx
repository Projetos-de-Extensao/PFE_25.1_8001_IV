import styles from '../routes/EventPage.module.css';
import { Link } from 'react-router-dom';
import image from '../assets/testImages/dhr6pnuac7ka1.jpg'


function EventPage() {
    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.imgPreview}>
                    <img src={image} alt="borderlaine" className={styles.imgSize}></img>
                </div>
                <section className={styles.eventInformation}>
                    <h1 className={styles.eventName}>Nome do evento</h1>
                    <p className={styles.organizerName}>Organizador</p>
                </section>
                <section className={styles.descriptionSection}>
                    <h1 clasName={styles.descriptionHeader}>
                        Descrição
                    </h1>
                    <div className={styles.descriptionBackground}>
                        <p className={styles.descriptionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                </section>
                <section className={styles.finalInformation}>
                    <div className={styles.localDate}>
                        <h1 className={styles.eventLocal}>Local do evento</h1>
                        <p className={styles.eventHour}>Data e hora</p>
                    </div>
                    <div className={styles.valueAndButton}>
                        <p className={styles.pStyle}>R$<h1 className={styles.price}>123.456,789</h1></p>
                        <button className={styles.buyButton}>Comprar</button>
                    </div>
                </section>
                <Link to="../home" className={styles.linkStyle}>Voltar a página inicial</Link>
            </div>
        </>
    )
}

export default EventPage;