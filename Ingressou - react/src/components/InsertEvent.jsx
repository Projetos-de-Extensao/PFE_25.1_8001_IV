import styles from '../components/InsertEvent.module.css'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';

registerLocale('pt', pt);

function InsertEvent() {
    // para o DatePicker
    const [selecionedDate, setDate] = useState(null);
    const now = new Date();
    // impede seleção de data anterior a atual
    const sameDate = selecionedDate && now.toDateString() === selecionedDate.toDateString();

    // para fazer importação da imagem do evento e inserir no preview
    const [imageSrc, setImageSrc] = useState(null);
    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImageSrc(imageURL);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <>
            <div className={styles.insertEventContainer}>
                <div className={styles.header}>
                    <h1 className={styles.headerText}>
                        Insira os dados do evento
                    </h1>
                </div>
                <div className={styles.eventInfo}>
                    <div className={styles.imgInsert}>
                        <div className={styles.eventImgPreview}>
                            <img src={imageSrc} alt="preview" className={styles.imgSize}></img>
                        </div>
                        <label htmlFor='fileInput' className={styles.buttonStyle}>Selecione uma imagem</label>

                        <input type="file" id="fileInput" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} className={styles.buttonStyle}></input>
                    </div>
                    <form className={styles.formStyle}>
                        <label htmlFor="eventName" className={styles.labelStyle}>Insira o nome do evento</label>
                        <input type="text" id="eventName" className={styles.inputStyle}></input>

                        <p className={styles.labelStyle}>Insira a descrição do evento</p>
                        <textarea id="eventDescription"></textarea>

                        <label htmlFor="eventLocalization" className={styles.labelStyle}>Insira a localização do evento</label>
                        <input type="text" id="eventLocalization" className={styles.inputStyle}></input>

                        <label htmlFor="date" className={styles.labelStyle}>Insira a data e horário do evento</label>
                        <DatePicker
                            selected={selecionedDate}
                            onChange={(date) => setDate(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeINtervals={15}
                            dateFormat="dd/MM/yyyy HH:mm"
                            locale="pt"
                            minDate={now}
                            minTime={sameDate ? now : new Date().setHours(0, 0, 0, 0)}
                            maxTime={new Date().setHours(23, 59, 59, 999)}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            placeholderText="dd/MM/yyyy HH:mm"
                            className={styles.datepickerInput}
                        // customInput = {
                        //     <input className = {styles.dateInput} placeholder = "socorro" />
                        // }
                        />
                        <label htmlFor="price" className={styles.labelStyle}>Insira o valor do ingresso</label>
                        <input type="text" id="price" className={styles.inputStyle}></input>

                        <button type="submit" className={styles.buttonStyle} onClick = {handleSubmit}>Adicionar evento</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InsertEvent;