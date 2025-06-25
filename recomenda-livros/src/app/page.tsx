import Image from "next/image";
import Link from "next/link";
import styles from "./Login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo(a)</h1>
      
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>E-mail</label>
          <input 
            type="email" 
            id="email" 
            placeholder="exemplo@email.com" 
            className={styles.input}
            autoComplete="email"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Senha</label>
          <input 
            type="password" 
            id="password" 
            placeholder="********" 
            className={styles.input}
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit" className={styles.loginButton}>
          Entrar
        </button>
      </form>

      <div className={styles.divider}>ou</div>

      <button className={styles.googleButton} type="button">
        <Image 
          src="/logogoogle.png" 
          alt="Google" 
          width={24} 
          height={24} 
          className={styles.googleIcon}
        />
        Entrar com Google
      </button>

      <div className={styles.registerText}>
        Não possui uma conta?{" "}
        <Link href="/register" className={styles.registerLink}>
          Cadastre-se
        </Link>
      </div>
    </div>
  );
}