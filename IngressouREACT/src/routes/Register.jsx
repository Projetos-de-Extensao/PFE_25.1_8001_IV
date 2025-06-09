import styles from '../routes/Register.module.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

function Register({ onRegistered }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = React.useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("Preencha todos os campos");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some((user) => user.email === email)) {
            setError("Email já cadastrado");
            return;
        }

        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        setError("");
        alert("Cadastro realizado com sucesso!");
        onRegistered();
    };
    return (
        <>
            <div className={styles.registerBody}>
                <div className={styles.registerContainer}>
                    <div className={styles.registerHeaders}>
                        <h1 className={styles.saudation}>Bem vindo</h1>
                        <p className={styles.orientation}>Faça seu cadastro</p>
                    </div>
                    <form className={styles.formStyle}>
                        <input type="text" id="name" placeholder="Name" className={styles.inputStyle} onChange={e => setName(e.target.value)}></input>
                        <input type="email" id="email" placeholder="Email" className={styles.inputStyle} onChange={e => setEmail(e.target.value)}></input>
                        <input type="password" id="password" placeholder="Password" className={styles.inputStyle} onChange={e => setPassword(e.target.value)}></input>
                        <div className={styles.userTypeDiv}>
                            <p className={styles.userTypeText}>Selecione o tipo de usuário:</p>
                            <div className={styles.radioButtons}>
                                <label htmlFor="comum">
                                    <input type="radio" id="comum" className={styles.labelStyle} name="option"></input>
                                    Consumidor
                                </label>

                                <label htmlFor="organizador">
                                    <input type="radio" id="organizador" className={styles.labelStyle} name="option"></input>
                                    Organizador
                                </label>
                            </div>
                        </div>
                        <button type="submit" id="submit" className={styles.registerBtn} onClick={handleRegister}>Register</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </form>
                    <p className={styles.linkText}>Já tem cadastro? <Link to="../login" className={styles.linkStyle}>Acesse</Link></p>

                </div>
            </div>
        </>

    )
}


export default Register;