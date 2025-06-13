import Event from './Event.jsx';
import styles from './EventList.module.css'

function EventList({ events } ) {
    if (events.length === 0) {
        return <p>Nenhum item encontrado.</p>
    }
    return (
        <div className={styles.eventsStyle}>
            {events.map(event => {
                return(
                <Event
                key={event.id}
                event={event}
                />
                )
            })}
        </div>
    );
}

export default EventList;