'use client';

import { Box } from '@mui/material';
import styles from './login.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function CadastroPage() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [inputData, setInputdata] = useState<{ [key: string]: any }>({});

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, type, value, checked } = event.target;
    setInputdata(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Dados do formulário:', inputData);
    localStorage.setItem('userData', JSON.stringify(inputData));

    alert('Cadastro realizado com sucesso!');
  };



  return (
    <Box>
      <header className="navbar">
        <div className="navbar-content full-width">
          <h1 className="navbar-title">Recomenda Livros</h1>
          <span className="navbar-divider" />
          <Image
            src="/Education.png"
            alt="Logo Recomenda Livros"
            width={40}
            height={40}
            className="navbar-logo"
            priority
          />
        </div>
      </header>

      <div className={styles.container}>
        <h2 className={styles.title}>Cadastro de Usuário</h2>
        <Image
          src="/usuario.png"
          alt="Ícone de usuário"
          width={100}
          height={100}
          className={styles.icon}
        />

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="exemplo@gmail.com" onChange={handleDataChange} />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="username">Nome de usuário</label>
            <input type="text" id="username" placeholder="Bom Leitor" onChange={handleDataChange} />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="birthdate">Data de Nascimento</label>
            <input type="date" id="birthdate" onChange={handleDataChange} />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="senha">Senha</label>
            <div className={styles.passwordWrapper}>
              <input
                type={mostrarSenha ? 'text' : 'password'}
                id="senha"
                placeholder="********"
                onChange={handleDataChange}
              />
              <span
                className={styles.toggle}
                onClick={() => setMostrarSenha((prev) => !prev)}
              >
                👁
              </span>
            </div>
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="termos" onChange={handleDataChange} />
            <label htmlFor="termos">
              Concordo em seguir todos os <a href="#">termos de uso</a>
            </label>
          </div>

          <input type="submit" value='Criar' className={styles.createButton} />


          <div className={styles.registerText}>
            Já é registrado?{" "}
            <Link href="/" className={styles.registerLink}>
              Conecte-se
            </Link>
          </div>
        </form>
      </div>
    </Box>
  );
}
