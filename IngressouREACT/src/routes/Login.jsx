import styles from '../routes/Login.module.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = storedUsers.find(
            (u) => u.email === email && u.password === password
        );

        if (foundUser) {
            login(foundUser); // Marca como logado via contexto
            setError("");
            navigate("/"); // Redireciona para a home
        } else {
            setError("Email ou senha inválidos.");
        }
    };


    return (
        <>
            <div className={styles.loginBody}>
                <div className={styles.loginContainer}>
                    <section className={styles.mainTexts}>
                        <h1 className={styles.saudation}>Bem Vindo</h1>
                        <p className={styles.orientation}>Faça seu login</p>
                    </section>
                    <form className={styles.inputsContainer}>
                        <input type="email" placeholder="Email" className={styles.inputStyle} onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="password" placeholder="Senha" className={styles.inputStyle} onChange={(e) => setPassword(e.target.value)}></input>
                        <div className={styles.rememberPass}>
                            <input type="checkbox" id="checkbox" className={styles.checkbox}></input>
                            <label for="checkbox" className={styles.label}></label>
                            <p className={styles.checkText}>Lembrar senha</p>
                        </div>
                        <button type className={styles.loginBtn} onClick={handleLogin}>Entrar</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </form>
                    <p>Não tem cadastro? <Link to="../register" className={styles.linkStyle}>Acesse</Link></p>
                </div>
            </div>
        </>
    )
};


export default Login;