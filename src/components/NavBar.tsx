import ThemeSwitch from "components/ThemeSwitch";
import LoginPage from "pages/LoginPage";
import styles from "styles/NavBar.module.scss";
import user from "public/user.png";
import users from "public/users.png";
import books from "public/books.png";
import options from "public/options.png";
import { createRoot } from "react-dom/client";
import BooksPage from "pages/BooksPage";
import { root } from "@/main";

export default function NavBar() {
  return <nav className={styles.nav}>
    <div className={styles.top}>
      <button className={styles.button} onClick={() => {
        root.render(<LoginPage />)
      }}>
        <img src={user} alt="Account icon" />
        <span>Conta</span>
      </button>
      <button className={styles.button} onClick={() => {
        createRoot(document.getElementById("main") as HTMLElement).render(<BooksPage />)
      }}>
        <img src={books} alt="Books icon" />
        <span>Livros</span>
      </button>
      <button className={styles.button}>
        <img src={users} alt="Users icon" />
        <span>Usuários</span>
      </button>
    </div>
    <div className={styles.bottom}>
      <button className={styles.button}>
        <img src={options} alt="Options icon" />
        <span>Opções</span>
      </button>
      <ThemeSwitch />
    </div>
  </nav>
}