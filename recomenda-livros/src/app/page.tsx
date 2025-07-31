// recomenda-livros/src/app/page.tsx
'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./Login.module.css";
import { Inter } from "next/font/google";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'; 

const inter = Inter({ subsets: ["latin"] });

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session, status } = useSession(); 
  const router = useRouter(); 

  if (status === "authenticated") {
    router.push('/Home-Postagens'); 
    return null;
  }

  const login = (emailInput: string, passwordInput: string) => {
    const userData = localStorage.getItem('userData');
    console.log("login:", emailInput, passwordInput);
    if (userData) {
      const parsedData = JSON.parse(userData);
      console.log(parsedData,"\n", parsedData.email, parsedData.senha);
      if (parsedData.email === emailInput && parsedData.senha === passwordInput) {
        alert("Login bem-sucedido!");
  
        router.push('/Home-Postagens');
      } else {
        alert("Email ou senha incorretos.");
      }
    } else {
      alert("Nenhum usuário registrado.");
    }
  }

  const handleGoogleSignIn = () => {
    signIn('google'); 
  };

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
          <form onSubmit={(e) => { e.preventDefault(); login(email, password); }} className={styles.form}>
            <div className={styles.container}>
              <h1 className={styles.title}>Seja Bem-vindo(a)</h1>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="exemple@gmail.com"
                  className={styles.input}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className={styles.input}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.forgotPassword}>
                  <Link href="/forgot-password">Esqueceu a senha?</Link>
                </div>
              </div>

              <input type='submit' value='Login' className={styles.loginButton} />

              <div className={styles.divider}>OU</div>

              <button type="button" className={styles.googleButton} onClick={handleGoogleSignIn}>
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
                <Link href="/Cadastro" className={styles.registerLink}>
                  Registre-se
                </Link>
              </div>
            </div>
          </form>
      </body>
    </html>
  );
}