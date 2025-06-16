import styles from '../routes/EventPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { fetchEventsById } from '../services/api.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function EventPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getEvent = async () => {
            try {
                const data = await fetchEventsById(id);
                setEvent(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            };
        }
        getEvent();
    }, [id])

    if (loading) return <div>Carregando evento...</div>;
    if (error) return <div>Erro: {error}</div>;
    if (!event) return <div>Evento não encontrado</div>;

    const handleBuyClick = () => {
        navigate(`/compra/${id}`);
    };

    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.imgPreview}>
                    <img src={event.imagemUrl} alt="borderlaine" className={styles.imgSize} />
                </div>
                <section className={styles.eventInformation}>
                    <h1 className={styles.eventName}>{event.nome}</h1>
                    <p className={styles.organizerName}>{event.organizador}</p>
                </section>
                <section className={styles.descriptionSection}>
                    <h1 className={styles.descriptionHeader}>
                        Descrição
                    </h1>
                    <div className={styles.descriptionBackground}>
                        <p className={styles.descriptionText}>{event.descricao}</p>
                    </div>
                </section>
                <section className={styles.finalInformation}>
                    <div className={styles.localDate}>
                        <h1 className={styles.eventLocal}>{event.localizacao}</h1>
                        <p className={styles.eventHour}>{event.dataHora}</p>
                    </div>
                    <div className={styles.valueAndButton}>
                        <p className={styles.pStyle}>
                            R$<span className={styles.price}>{event.preco}</span>
                        </p>
                        <button onClick={handleBuyClick} className={styles.buyButton}>
                            Comprar
                        </button>
                    </div>
                </section>
                <Link to="../home" className={styles.linkStyle}>
                    Voltar a página inicial
                </Link>
            </div>
        </>
    )
}

export default EventPage;