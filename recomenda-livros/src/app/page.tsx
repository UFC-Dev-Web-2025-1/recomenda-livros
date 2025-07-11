import Image from "next/image";
import Link from "next/link";
import styles from "./Login.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function LoginPage() {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
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
        <main className="main-content">
          <div className={styles.container}>
            <h1 className={styles.title}>Seja Bem-vindo(a)</h1>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="exemple@gmail.com"
                className={styles.input}
              />
            </div>



            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className={styles.input}
              />
              <div className={styles.forgotPassword}>
                <Link href="/forgot-password">Esqueceu a senha?</Link>
              </div>
            </div>

            <button className={styles.loginButton}>Login</button>

            <div className={styles.divider}>OU</div>

            <button className={styles.googleButton}>
              <Image
                src="/logogoogle.png"
                alt="Google Logo"
                width={24}
                height={24}
                className={styles.googleIcon}
              />
              Entrar com Google
            </button>

            <div className={styles.registerText}>
              Ainda não é registrado?{" "}
              <Link href="/register" className={styles.registerLink}>
                Registre-se
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
