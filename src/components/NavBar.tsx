import ThemeSwitch from "@components/ThemeSwitch";
import styles from "@styles/NavBar.module.scss";
import user from "@public/user.png";
import users from "@public/users.png";
import books from "@public/books.png";
import options from "@public/options.png";

export default function NavBar() {
  return <nav className={styles.nav}>
    <div className={styles.top}>
      <button className={styles.button}>
        <img src={user} alt="Account icon" />
        <span>Conta</span>
      </button>
      <button className={styles.button}>
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