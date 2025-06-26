'use client';

import styles from './login.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function CadastroPage() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cadastro de Usuário</h2>
      <Image
        src="/usuario.png"
        alt="Ícone de usuário"
        width={100}
        height={100}
        className={styles.icon}
      />

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="exemplo@gmail.com" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="username">Nome de usuário</label>
          <input type="text" id="username" placeholder="Bom Leitor" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="birthdate">Data de Nascimento</label>
          <input type="date" id="birthdate" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="senha">Senha</label>
          <div className={styles.passwordWrapper}>
            <input
              type={mostrarSenha ? 'text' : 'password'}
              id="senha"
              placeholder="********"
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
          <input type="checkbox" id="termos" />
          <label htmlFor="termos">
            Concordo em seguir todos os <a href="#">termos de uso</a>
          </label>
        </div>

        <button type="submit" className={styles.createButton}>
          Criar
        </button>
      </form>
    </div>
  );
}
